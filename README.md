# YachtRelay AI — marketing site

Bespoke AI sales and charter desk for yacht charter companies, sales brokerages, and yacht management firms. Static HTML/CSS/JS, no build step, four languages (EN/FR/ES/IT, auto-detected from the browser, client-side toggle).

## Pages
- `index.html` — landing page: problem, modules (website, CRM & pipelines, AI concierge, voice concierge, behavioral analytics, social & marketplace posting, AI writing assistant, integrations), how it works, who we serve, seasons, pricing + add-ons, FAQ
- `charter-booking.html` — Charter Booking Concierge deep dive for charter operators: omnichannel inquiry handling, the three charter offers (AI Charter Booking System, Missed Inquiry Recovery, AI Lead Follow-Up), three-phase rollout, 3D yacht hero
- `readiness-check.html` — standalone, shareable interactive Charter & Listing Inquiry Readiness Check (self-scoring checklist + cost estimator)

## Structure
- `assets/css/style.css` — design tokens + components
- `assets/js/i18n.js` — EN/FR/ES/IT dictionary + language detection and toggle
- `assets/js/main.js` — nav, scroll reveal, FAQ accordion
- `assets/js/checklist.js` — readiness check scoring, segment focus, cost calculator, copy-link
- `assets/img/` — Higgsfield-generated photography (hero-marina, helm-detail, logbook-deck)
- `assets/video/` — hero loop

## Deploy
GitHub Pages, served from the repo root on `main`. `.nojekyll` disables Jekyll processing.
