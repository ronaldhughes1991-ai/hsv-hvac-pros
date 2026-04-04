import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.hsvhvacpros.com";
  const now = new Date();
  const siteLastUpdated = new Date("2026-04-04");
  const servicesDate = new Date("2026-03-15");
  const locationsDate = new Date("2026-04-04");
  const legalDate = new Date("2025-12-01");

  return [
    { url: baseUrl, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    // Services
    { url: `${baseUrl}/services/ac-repair`, lastModified: servicesDate, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/services/heating-maintenance`, lastModified: servicesDate, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/services/emergency-hvac`, lastModified: servicesDate, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/services/system-installation`, lastModified: servicesDate, changeFrequency: "monthly", priority: 0.9 },
    // Locations
    { url: `${baseUrl}/locations/huntsville`, lastModified: locationsDate, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/locations/athens`, lastModified: locationsDate, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/locations/madison`, lastModified: locationsDate, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/locations/harvest`, lastModified: locationsDate, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/locations/meridianville`, lastModified: locationsDate, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/locations/hazel-green`, lastModified: locationsDate, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/locations/new-market`, lastModified: locationsDate, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/locations/toney`, lastModified: locationsDate, changeFrequency: "monthly", priority: 0.8 },
    // Blog
    { url: `${baseUrl}/blog`, lastModified: siteLastUpdated, changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/blog/heat-pump-vs-furnace-north-alabama`, lastModified: new Date("2026-01-08"), changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/blog/repair-vs-replace-hvac`, lastModified: new Date("2026-01-15"), changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/blog/central-ac-vs-mini-split`, lastModified: new Date("2026-01-22"), changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/blog/gas-furnace-vs-electric-heat-pump-alabama`, lastModified: new Date("2026-01-29"), changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/blog/hvac-repair-cost-huntsville`, lastModified: new Date("2026-02-05"), changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/blog/best-hvac-system-alabama-humidity`, lastModified: new Date("2026-02-12"), changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/blog/lower-electric-bill-huntsville-alabama`, lastModified: new Date("2026-02-19"), changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/blog/hvac-maintenance-checklist-north-alabama`, lastModified: new Date("2026-02-26"), changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/blog/emergency-hvac-when-to-call`, lastModified: new Date("2026-03-05"), changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/blog/seer2-ratings-explained`, lastModified: new Date("2026-03-10"), changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/blog/hvac-installation-timeline`, lastModified: new Date("2026-03-17"), changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/blog/hvac-permit-requirements-huntsville-madison`, lastModified: new Date("2026-03-20"), changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/blog/r22-freon-phase-out-north-alabama`, lastModified: new Date("2026-03-25"), changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/blog/signs-ductwork-needs-repair`, lastModified: new Date("2026-03-31"), changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/blog/prepare-hvac-alabama-summer`, lastModified: new Date("2026-04-04"), changeFrequency: "monthly", priority: 0.6 },
    // Info
    { url: `${baseUrl}/about`, lastModified: siteLastUpdated, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/privacy`, lastModified: legalDate, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified: legalDate, changeFrequency: "yearly", priority: 0.3 },
  ];
}
