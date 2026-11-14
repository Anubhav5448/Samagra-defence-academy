# Samagra Defence Academy website

A responsive Next.js App Router website for an NDA, SSB and other defence-exam coaching center.

## Local development

```bash
npm install
npm run dev
```

The site runs on port 3000. `npm run typecheck` checks TypeScript; `npm run build` creates a production build.

## Content to update before launch

- Edit `lib/site-data.ts` to add the academy’s verified phone, admissions inbox, physical address, office hours, current program availability and real curriculum details.
- The homepage has no student-results or faculty sections yet. Add them only with verified selections, permission-approved testimonials and confirmed staff profiles.
- Add the academy’s three YouTube class links to `onlineClassVideos` in `lib/site-data.ts`; until then the video cards show a “coming soon” state.
- `contact` in `lib/site-data.ts` still holds placeholder phone, email, address and hours. Replace them before launch, and update any official-notice links if additional exam routes are offered.
- The enquiry form validates fields in the browser and prepares a prefilled email using the address in `lib/site-data.ts`; it does not store or transmit candidate data to this demo site. Connect an approved form-processing destination before launch if server-side lead capture or automated notifications are needed.
- Project platform branding is configured separately in `app.config.ts`; the in-site wordmark and favicon are vector assets under `public/`.

## Pages

- `/` — overview, online classes, programs, about, approach, resources, and an enquiry form.
- `/programs` — NDA & NA, SSB interview, CDS, AFCAT, and related preparation pathways.
- `/admissions` — enquiry steps, eligibility guidance, official notice links, and the enquiry form.
- `/contact` — contact details and an enquiry form.
