"use client";

import { useState, type FormEvent } from "react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  urgency: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    service: "",
    urgency: "standard",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  function validate(): FormErrors {
    const e: FormErrors = {};
    if (!form.name.trim()) e.name = "Please enter your name.";
    if (!form.email.trim()) {
      e.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = "Please enter a valid email address.";
    }
    if (form.phone && !/^[\d\s()+-]{7,}$/.test(form.phone)) {
      e.phone = "Please enter a valid phone number.";
    }
    if (!form.message.trim()) e.message = "Please describe how we can help.";
    return e;
  }

  async function handleSubmit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed to send");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  function handleChange(
    ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = ev.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-2xl border border-green-200 bg-green-50 p-10 text-center" id="contact-success">
        <svg viewBox="0 0 24 24" fill="currentColor" className="mx-auto h-12 w-12 text-green-600" aria-hidden="true">
          <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
        </svg>
        <h3 className="mt-4 text-xl font-bold text-green-900">Message Sent!</h3>
        <p className="mt-2 text-green-700">
          We&apos;ll get back to you shortly. For emergencies, call{" "}
          <a href="tel:+12565884712" className="font-bold underline">(256) 588-4712</a>.
        </p>
      </div>
    );
  }

  const inputBase =
    "mt-1.5 block w-full rounded-lg border px-4 py-3 text-slate-900 shadow-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm";

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5" id="contact-form">
      {status === "error" && (
        <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
          Something went wrong. Please try again or call us directly.
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        {/* Name */}
        <div>
          <label htmlFor="contact-name" className="block text-sm font-medium text-slate-800">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="contact-name"
            name="name"
            value={form.name}
            onChange={handleChange}
            className={`${inputBase} ${errors.name ? "border-red-400 ring-1 ring-red-400" : "border-slate-300"}`}
            placeholder="Your name"
          />
          {errors.name && <p className="mt-1 text-xs text-red-600" role="alert">{errors.name}</p>}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="contact-email" className="block text-sm font-medium text-slate-800">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="contact-email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className={`${inputBase} ${errors.email ? "border-red-400 ring-1 ring-red-400" : "border-slate-300"}`}
            placeholder="you@example.com"
          />
          {errors.email && <p className="mt-1 text-xs text-red-600" role="alert">{errors.email}</p>}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        {/* Phone */}
        <div>
          <label htmlFor="contact-phone" className="block text-sm font-medium text-slate-800">
            Phone Number
          </label>
          <input
            type="tel"
            id="contact-phone"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className={`${inputBase} ${errors.phone ? "border-red-400 ring-1 ring-red-400" : "border-slate-300"}`}
            placeholder="(256) 588-4712"
          />
          {errors.phone && <p className="mt-1 text-xs text-red-600" role="alert">{errors.phone}</p>}
        </div>

        {/* Service */}
        <div>
          <label htmlFor="contact-service" className="block text-sm font-medium text-slate-800">
            Service Needed
          </label>
          <select
            id="contact-service"
            name="service"
            value={form.service}
            onChange={handleChange}
            className={`${inputBase} border-slate-300`}
          >
            <option value="">Select a service</option>
            <option value="ac-repair">AC Repair</option>
            <option value="heating-maintenance">Heating Maintenance</option>
            <option value="emergency">Emergency Service</option>
            <option value="installation">New System Installation</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      {/* Urgency */}
      <fieldset>
        <legend className="block text-sm font-medium text-slate-800">How urgent is this?</legend>
        <div className="mt-2 flex gap-4">
          {[
            { value: "standard", label: "Standard" },
            { value: "soon", label: "Within 24hrs" },
            { value: "emergency", label: "Emergency" },
          ].map((opt) => (
            <label
              key={opt.value}
              className={`flex cursor-pointer items-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-medium transition-colors ${
                form.urgency === opt.value
                  ? opt.value === "emergency"
                    ? "border-red-300 bg-red-50 text-red-700"
                    : "border-blue-300 bg-blue-50 text-blue-700"
                  : "border-slate-200 text-slate-600 hover:border-slate-300"
              }`}
            >
              <input
                type="radio"
                name="urgency"
                value={opt.value}
                checked={form.urgency === opt.value}
                onChange={handleChange}
                className="sr-only"
              />
              {opt.label}
            </label>
          ))}
        </div>
      </fieldset>

      {/* Message */}
      <div>
        <label htmlFor="contact-message" className="block text-sm font-medium text-slate-800">
          How can we help? <span className="text-red-500">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={4}
          value={form.message}
          onChange={handleChange}
          className={`${inputBase} ${errors.message ? "border-red-400 ring-1 ring-red-400" : "border-slate-300"}`}
          placeholder="Describe the issue or service you need..."
        />
        {errors.message && <p className="mt-1 text-xs text-red-600" role="alert">{errors.message}</p>}
      </div>

      {/* Submit */}
      <button
        type="submit"
        id="contact-submit"
        disabled={status === "sending"}
        className="w-full rounded-lg bg-blue-700 px-6 py-3.5 text-base font-bold text-white shadow-md shadow-blue-700/25 transition-all hover:bg-blue-800 hover:shadow-lg disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Request Free Estimate"}
      </button>

      <p className="text-center text-xs text-slate-500">
        Or call us directly at{" "}
        <a href="tel:+12565884712" className="font-semibold text-blue-700 hover:underline">
          (256) 588-4712
        </a>
      </p>
    </form>
  );
}
