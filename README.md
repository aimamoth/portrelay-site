# PortRelay AI — marketing site

Bespoke AI service desk for marine and boat businesses. Static HTML/CSS/JS, no build step, bilingual (EN/FR toggle, client-side).

## Pages
- `index.html` — landing page
- `readiness-check.html` — standalone, shareable interactive Peak Season Call Readiness Check (self-scoring checklist + cost estimator)

## Structure
- `assets/css/style.css` — design tokens + components
- `assets/js/i18n.js` — EN/FR dictionary + language toggle
- `assets/js/main.js` — nav, scroll reveal, FAQ accordion
- `assets/js/checklist.js` — readiness check scoring, segment focus, cost calculator, copy-link
- `assets/img/` — Higgsfield-generated photography (hero-marina, helm-detail, logbook-deck)

## Deploy
GitHub Pages, served from the repo root on `main`. `.nojekyll` disables Jekyll processing.
