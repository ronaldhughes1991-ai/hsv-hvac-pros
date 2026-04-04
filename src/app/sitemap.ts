import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://hsvhvacpros.com";
  const now = new Date();

  return [
    { url: baseUrl, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    // Services
    { url: `${baseUrl}/services/ac-repair`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/services/heating-maintenance`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/services/emergency-hvac`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/services/system-installation`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    // Locations
    { url: `${baseUrl}/locations/huntsville`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/locations/athens`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/locations/madison`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/locations/harvest`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/locations/meridianville`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/locations/hazel-green`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/locations/new-market`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/locations/toney`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    // Blog
    { url: `${baseUrl}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/blog/heat-pump-vs-furnace-north-alabama`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/blog/repair-vs-replace-hvac`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/blog/central-ac-vs-mini-split`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/blog/gas-furnace-vs-electric-heat-pump-alabama`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/blog/hvac-repair-cost-huntsville`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/blog/best-hvac-system-alabama-humidity`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/blog/lower-electric-bill-huntsville-alabama`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/blog/hvac-maintenance-checklist-north-alabama`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/blog/emergency-hvac-when-to-call`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/blog/seer2-ratings-explained`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/blog/hvac-installation-timeline`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/blog/hvac-permit-requirements-huntsville-madison`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/blog/r22-freon-phase-out-north-alabama`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/blog/signs-ductwork-needs-repair`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/blog/prepare-hvac-alabama-summer`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    // Info
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];
}
