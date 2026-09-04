# Boukhmili Adnane — Portfolio

Original single-page multilingual portfolio for **Boukhmili Adnane, Full-Stack Web Developer**.

## What is included

- Responsive single-page portfolio
- English default + French, Spanish and German UI/content translations
- Light/dark theme
- Sticky navigation + mobile menu
- Recruiter-friendly project presentations
- Resume language selector
- English resume included at `resume/resume-en.pdf`
- Slots prepared for:
  - `resume/resume-fr.pdf`
  - `resume/resume-es.pdf`
  - `resume/resume-de.pdf`
- Accessible contact form with validation/loading/success/error states
- Secure serverless contact endpoint at `api/contact.js`
- SEO metadata and semantic HTML
- Reduced-motion-friendly reveal animation approach (remove/disable CSS animation as needed)
- No invented portfolio metrics, companies, technologies or project links

## Run locally

This is a static frontend plus a Vercel-style serverless endpoint.

For the frontend only, open `index.html` in a browser.

For the contact endpoint, deploy to Vercel (or adapt `api/contact.js` to your host) and configure:

- `RESEND_API_KEY`
- `CONTACT_TO_EMAIL`
- `CONTACT_FROM_EMAIL`

Do **not** put these values in frontend JavaScript.

## Resume files

Add translated PDFs later using the exact names above. The UI intentionally does not fabricate translated resumes.

## Content source

Personal facts and professional content were taken from the supplied CV. The design direction was independently interpreted from the supplied reference portfolio rather than copied.
