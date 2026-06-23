# NestGuard

Marketing site for **NestGuard** — honest, friendly property management in Coimbatore (rentals, repairs, legal help and complete NRI remote care).

Built as a **React + Vite + Framer Motion** single-page app, design direction **"Warm Residential"**.

**Live:** https://bb1nfosec.github.io/nestguard/

## Develop

```bash
npm install
npm run dev      # local dev server
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the
Vite app and publishes `dist/` to GitHub Pages. Pages source must be set to
**GitHub Actions**. Vite `base` is `/nestguard/` to match the Pages subpath.

## Contact form

The enquiry form has no backend — on submit it opens WhatsApp (to
+91 83444 81044) pre-filled with the visitor's details. Zero setup, delivers
straight to the business. Swap `onSubmit` in `src/components/Contact.jsx` for a
service like Formspree if email delivery is preferred later.

## Notes

- The original three design proposals (A / B / C + picker) are preserved under
  `/nestguard/proposals/` (`public/proposals/`).
- Contact: 8344481044 · nestguardprop@gmail.com · Coimbatore, Tamil Nadu.
