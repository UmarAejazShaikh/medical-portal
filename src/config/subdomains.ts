// Placeholder labels — update these two keys once the final subdomain names are decided.
// Nothing else in the codebase needs to change; middleware.ts reads this map.
export const SUBDOMAIN_ROUTES: Record<string, string> = {
  nasir: "/orthopedic",
  lab: "/pathology",
};

// Root domain the app is served from once deployed (used to detect a subdomain request).
// Update when the domain is finalized (e.g. "amdavadhealth.in").
export const ROOT_DOMAIN = process.env.NEXT_PUBLIC_ROOT_DOMAIN || "localhost";
