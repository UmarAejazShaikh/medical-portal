# Ahmedabad Medical Directory — Development Tracker & Roadmap

## 📌 Project Overview
An independent, fast, SEO-optimized, bilingual (English & Gujarati) local healthcare directory serving the **Sarkhej, Makarba, and South-West Ahmedabad** community.

The platform operates as a **neutral medical directory & listing portal**, hosting independent verified profiles for local healthcare practitioners and diagnostic facilities without joint partnership framing:
1. **Dr. Nasir Salar** — M.B.B.S, M.S. Orthopedic (B.J. Medical College & Civil Hospital), Fellowship in Spine Surgery (Dr. Rohit Thaker). Independent profile focusing on Minimally Invasive (MIS) & Endoscopic Spine Surgery, Joint Replacement, and Trauma.
2. **Unity Pathology Laboratory** — 5.0 ★ Rated (60 Google Reviews) independent clinical diagnostic laboratory in Makarba, Ahmedabad.

---

## 🏗️ Architecture & Technology Stack
* **Architecture Model:** Independent Directory / Listing Model (`/` Directory, `/orthopedic` Doctor Profile, `/pathology` Lab Profile)
* **Framework:** Next.js 14 (App Router)
* **Language:** TypeScript
* **Styling:** Tailwind CSS
* **Icons:** `lucide-react`
* **State & I18n:** Lightweight React Context for English / ગુજરાતી instant toggle
* **Build Target:** Static Site Generation (SSG) — 100% pre-rendered pure HTML
* **Hosting Model:** 100% free static hosting on **Vercel**, **Cloudflare Pages**, or **Netlify**

---

## ✅ Phase 1: Completed Development (Current Milestone)

- [x] **Decoupled Independent Directory Architecture**
  - Shifted away from joint "paired practice" branding into a neutral, scalable medical directory (`Ahmedabad Medical Directory`).
  - Separated footer, metadata, and profile summaries so each entity is represented independently.
  - Scalable data model in `src/data/profilesData.ts` ready to list additional local doctors and services.
- [x] **Medical Directory Homepage (`/`)**
  - Client-side static search across doctors, labs, symptoms, procedures, and tests.
  - Quick-filter chips (*Spine Surgery*, *Endoscopic*, *Sciatica*, *CBC*, *HbA1c*, *Joint Replacement*).
  - Category filters (*All Profiles*, *Spine & Orthopedic*, *Pathology Lab*).
  - Structured profile cards with verified credentials, address, timings, and direct actions.
- [x] **Dr. Nasir Salar Profile (`/orthopedic`)**
  - Primary focus on **Spine Surgery, MIS Spine Surgery, and Endoscopic Spine Surgery**.
  - Conservative care philosophy (*"Surgery is Always the Last Resort"*).
  - Secondary overview of Trauma & Fracture Fixation, Arthroplasty (TKR/THR), and Arthroscopy.
  - Verified education & residency timeline (B.J. Medical College, Civil Hospital, GMERS Vadnagar, Ortho Plus Hospital).
  - Symptom navigator & FAQs debunking spine surgery myths.
- [x] **Unity Pathology Laboratory Profile (`/pathology`)**
  - Verified 5.0 Google rating (60 reviews) badge.
  - Searchable test catalog (CBC, HbA1c, Lipid, Thyroid, LFT, KFT, Vitamins, Full Body Packages).
  - Sample collection information & test turnaround time.
  - 1-tap WhatsApp inquiry pre-populated with test name.
- [x] **Bilingual Support (English & ગુજરાતી)**
  - Seamless header toggle (`English` / `ગુજરાતી`).
  - Culturally accurate, patient-friendly Gujarati medical terminology.
- [x] **Direct Patient Communication (No Pseudo-Forms)**
  - Direct Phone Call integration (`tel:...`).
  - WhatsApp integration (`https://wa.me/...`) with pre-filled inquiries.
  - Removed all non-functioning mock form inputs.
- [x] **Local SEO & Schema Markup**
  - Google Schema.org JSON-LD (`Physician` & `DiagnosticLab`).
  - Dynamic `sitemap.xml` and `robots.txt`.
  - Target keywords for Sarkhej, Makarba, and Ahmedabad local search.

---

## 🔮 Future Development Roadmap

### Phase 2: Domain Strategy & Neutral Infrastructure
- [ ] **Neutral Directory Domain Selection:**
  - **Core Decision:** Acquire a neutral directory domain (e.g., `ahmedabadmedicaldirectory.com`, `sarkhejhealth.com`, or `amddirectory.in`) rather than a hyphenated joint name (e.g., `drnasir-unitylab.com`).
  - *Rationale:* A joint domain creates false impression of a formal corporate partnership or single clinic entity, which undermines the decoupled directory model and complicates future additions.
- [ ] **Independent Domain Routing Options:**
  - **Option A (Shared Neutral Portal):** Host the directory at the neutral domain with clean paths (`/orthopedic`, `/pathology`), allowing future doctors to be added seamlessly.
  - **Option B (Independent Practice Domains):** If Dr. Nasir Salar (`drnasirsalar.com`) and Unity Lab (`unitypathologylab.com`) acquire their own individual domains, configure separate deployments/redirects while maintaining this directory as the community hub.
- [ ] **DNS & SSL Configuration:**
  - Setup DNS on Cloudflare / Vercel with free automated SSL and global edge caching.

> ⚠️ **Before starting Phase 3:** Phases 3–5 are a real architecture pivot, not incremental features. Read the caveats under each phase below before building — they call out where the plan currently conflicts with decisions already made in Phase 1 and Phase 2.

### Phase 3: Patient Authentication (When Required)
- [ ] **Mobile Number OTP Authentication:**
  - Integration with Firebase Authentication, Supabase, or SMS OTP gateway (Twilio / MSG91).
- [ ] **Google One-Tap Login:**
  - Fast OAuth for patients with Google accounts.
- [ ] **Patient Profile Dashboard:**
  - Basic profile containing past consultation history or booked tests.

> ⚠️ **Reconsider before building:** Phase 1 explicitly shipped "Direct Patient Communication (No Pseudo-Forms)" as a design win — no accounts, no forms, just call/WhatsApp. Full OTP + Google auth + a patient dashboard reverses that philosophy for what is still a two-provider local clinic directory. Validate first whether a no-login flow (pick a slot → WhatsApp confirms it) gets most of the value without the auth/compliance overhead below.
> Also: this phase, and everything after it, breaks the stated "100% pre-rendered, 100% free static hosting" architecture (see Architecture section above) — it needs a real backend, database, and auth provider. Treat that as a deliberate, called-out decision, not a quiet scope change.

### Phase 4: Dynamic Appointment Booking Engine
- [ ] **Doctor OPD Schedule Manager:**
  - Admin view for Dr. Nasir Salar to configure consultation hours, off-days, and clinic vs. hospital OPD hours.
- [ ] **Slot Booking & Verification:**
  - Patient selects date and time slot.
  - Automated WhatsApp confirmation notification to both patient and clinic desk.
- [ ] **Home Sample Collection Scheduler:**
  - Dedicated morning collection time-slot picker for Unity Pathology Lab.

> ⚠️ **Data separation:** If booking/scheduling ends up on one shared backend or admin panel for both providers, that re-introduces the operational coupling the Phase 1 decoupling work removed. Partition data and access per provider explicitly — don't let a shared system imply a shared practice.

### Phase 5: Digital Test Reports & PDF Delivery
- [ ] **Secure Lab Report Portal:**
  - Lab technician uploads patient test report PDF.
  - Secure download link protected by patient mobile number and OTP.
- [ ] **WhatsApp Report Dispatch:**
  - Automated dispatch of report PDF or download link via WhatsApp Business API.

> ⚠️ **Compliance:** This phase means storing and transmitting real patient test results — sensitive personal data under India's DPDP Act 2023, not just another feature. Needs an explicit consent, retention, and access-control plan *before* implementation, not after. Not legal advice — worth a real compliance check given the health-data angle.

### Phase 6: Multi-Doctor Practice Expansion
- [ ] **Scale Directory:**
  - Add additional relative doctors, visiting consultants, or clinic branches to `src/data/profilesData.ts`.
- [ ] **Specialty Filtering:**
  - Expand category filters to support Pediatrics, Gynecology, General Medicine, Dentistry, etc.

> ⚠️ **Content substrate:** `src/data/translations.ts` is already 700+ lines of hand-duplicated English/Gujarati content for just two profiles. Adding more doctors on the current hand-edited TS-file model will get unwieldy fast — restructure content (per-locale JSON, or a lightweight CMS) before scaling past a third or fourth profile, not after.

---

## 🛠️ Quick Commands

```bash
# Run local development server
cd medical-portal
npm run dev

# Build production static bundle
npm run build

# Start production preview server
npm run start
```
