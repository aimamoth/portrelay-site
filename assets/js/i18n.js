// ============================================================
// PortRelay AI — bilingual EN/FR dictionary + apply logic
// Toggle stores preference in localStorage under "portrelay-lang"
// ============================================================

const I18N = {
en: {
  "nav.home": "Home",
  "nav.how": "How It Works",
  "nav.who": "Who We Serve",
  "nav.readiness": "Readiness Check",
  "nav.faq": "FAQ",
  "nav.contact": "Contact",
  "nav.cta": "Book a Free Audit",

  "meta.home_title": "PortRelay AI — Bespoke AI Service Desks For Marine Businesses",
  "meta.home_desc": "PortRelay AI designs, builds, and runs a bespoke AI service desk for marine and boat businesses — not software you configure yourself. Answers calls, qualifies parts and repair jobs, and books the next step in whichever language your customer calls in.",
  "meta.rc_title": "Peak Season Call Readiness Check — PortRelay AI",
  "meta.rc_desc": "A free five minute self check for marine and boat businesses. See exactly where calls and jobs are slipping through before your next peak season.",

  "hero.eyebrow": "AI Built For Marine &amp; Boat Businesses",
  "hero.h1": "Every Call Answered.<br>Every Job Booked.",
  "hero.lead": "We design, build, and run a <strong>bespoke AI service desk</strong> for your marine business — not a software tool you configure yourself. It answers parts and repair calls, qualifies the job, and books the next step, in whichever language your customer calls in.",
  "hero.cta1": "Take the 5 Minute Readiness Check",
  "hero.cta2": "Book a Free Audit",
  "hero.trust": "Built for chandlers, refit yards, distributors, and marinas across Europe and the United States.",
  "hero.badge1": "GDPR Aligned",
  "hero.badge2": "Payment Data Never Stored",
  "hero.badge3": "Built Around Your Existing Systems",

  "problem.eyebrow": "Is Your Front Desk Losing Jobs?",
  "problem.h2": "The Call You Didn't Answer Was Going To Be A Job",
  "problem.stat1": "Parts and repair calls going unanswered during peak season",
  "problem.stat2": "Urgent dispatch calls sitting behind routine questions",
  "problem.stat3": "International callers who hang up when no one understands them",
  "problem.close": "<strong>Every missed call is a missed job</strong> — and most marine businesses have never actually measured how often it happens.",

  "how.eyebrow": "How It Works",
  "how.h2": "One System, Five Moving Parts, Zero Manual Work",
  "how.lead": "From the first ring to the booked job, the AI carries the conversation end to end, so nothing depends on someone remembering to call back.",
  "step1.title": "Every Call Answered",
  "step1.body": "Every inquiry is picked up instantly and sorted, urgent dispatch calls from routine questions, no voicemail, no lost job.",
  "step2.title": "Parts And Compatibility Handled",
  "step2.body": "Vessel, engine, and part details are captured up front and checked before a technician ever gets pulled off the floor.",
  "step3.title": "Multilingual From The First Word",
  "step3.body": "Owners, captains, crew, and charter guests are handled comfortably in their own language, then routed and logged.",
  "step4.title": "Nothing Falls Through After Hours",
  "step4.body": "A breakdown at the dock doesn't wait for office hours. Genuine emergencies reach someone the same day.",
  "step5.title": "Every Job Tracked, Nothing Forgotten",
  "step5.body": "Every inquiry, quote, and follow up lives in one place, synced with whatever system you already run.",

  "who.eyebrow": "Who We Serve",
  "who.h2": "Four Kinds Of Marine Business, Four Different Priorities",
  "who.lead": "The opening conversation and the priority module differ by segment. The system is trained around how your business actually runs.",
  "seg1.tag": "Retail &amp; Installers",
  "seg1.title": "Chandlers &amp; Electronics Installers",
  "seg1.body": "Parts, compatibility questions, and walk in traffic handled without pulling staff off the floor during peak season.",
  "seg2.tag": "Technical &amp; Refit",
  "seg2.title": "Refit &amp; Repair Yards",
  "seg2.body": "Urgent dispatch, quote qualification, and after hours emergencies routed to the right technician immediately.",
  "seg3.tag": "Distributor &amp; Wholesale",
  "seg3.title": "Marine Equipment Distributors",
  "seg3.body": "B2B stock and order inquiries qualified and synced straight into your order system.",
  "seg4.tag": "Marina &amp; Charter",
  "seg4.title": "Marinas &amp; Charter Operators",
  "seg4.body": "Multilingual owner, captain, crew, and guest communication, plus berth and scheduling questions, handled around the clock.",

  "besp.eyebrow": "How This Is Different",
  "besp.h2": "A System We Build And Run For You, Not Software You Configure Yourself",
  "besp.lead": "PortRelay AI is not a self-serve platform or a chatbot widget you install and hope works. We design the system around how your business actually operates, then we run it for you.",
  "besp.item1": "Built around your parts catalog, your technicians, and your season, not a generic template",
  "besp.item2": "A dedicated point of contact, not a support ticket queue",
  "besp.item3": "Plugs into whatever inventory or shop system you already run",
  "besp.item4": "Monthly reporting and a direct line to the team that built it",

  "season.eyebrow": "Two Seasons, One System",
  "season.h2": "Built Around Your Actual Calendar, Not A Generic Retainer",
  "season.lead": "Marine businesses don't share one busy season. We build and test your system against whichever one applies to you.",
  "s1.month": "February &mdash; May",
  "s1.title": "Spring Launch Readiness",
  "s1.body": "For chandlers, installers, and recreational hubs across the Netherlands, Germany, the UK, and the US. Peak hits with spring commissioning.",
  "s2.month": "October &mdash; April",
  "s2.title": "Refit Season Readiness",
  "s2.body": "For superyacht refit and service yards in Antibes, Cannes, La Ciotat, Palma, and Genoa. Peak hits while charter yachts are out of service.",

  "faq.eyebrow": "Frequently Asked Questions",
  "faq.h2": "Straight Answers, No Sales Spin",
  "faq1.q": "Will this replace our inventory or shop management system?",
  "faq1.a": "No. We don't replace DockMaster, Sage, Lightspeed, or whatever you already run, everything gets written back into your existing system. This removes the manual work sitting around it.",
  "faq2.q": "Will it try to answer technical questions about my customer's boat?",
  "faq2.a": "No. It handles logistics and qualification, vessel details, scheduling, basic compatibility, and escalates anything that looks like real technical advice straight to your team.",
  "faq3.q": "A lot of our calls come from boats with bad signal. What then?",
  "faq3.a": "A dropped or missed live call falls back to a callback flow the moment signal allows, and SMS or voicemail to text catches anything that never connects as a live call at all.",
  "faq4.q": "Is my customer and payment data safe?",
  "faq4.a": "Card details are never stored at the AI layer. Customer and vessel data is encrypted in transit and at rest, never used to train external models, and handled under GDPR aligned practices for European businesses.",
  "faq5.q": "Is there a contract, or a minimum commitment?",
  "faq5.a": "Monthly plans run an initial three month term, then continue month to month with thirty days notice to change or cancel. The setup fee is one time, due at kickoff.",

  "cta.h2": "Ready To Stop Losing Jobs To A Missed Call?",
  "cta.body": "Start with the five minute readiness check, or go straight to a free 30 minute audit. Either way, you'll see exactly what's slipping through today.",
  "cta.btn1": "Take The Readiness Check",
  "cta.btn2": "Book A Free Audit",

  "footer.blurb": "Bespoke AI service desks for marine and boat businesses, chandlers, refit yards, distributors, and marinas across Europe and the United States.",
  "footer.offices": "Offices in Canada, Switzerland &amp; India.",
  "footer.nav_h": "Navigate",
  "footer.co_h": "Company",
  "footer.contact_h": "Contact",
  "footer.bottom": "&copy; 2026 PortRelay AI. All rights reserved.",
  "footer.privacy": "Privacy Policy",
  "footer.terms": "Terms &amp; Conditions",
  "footer.readiness": "Readiness Check",

  "rc.eyebrow": "Free Self Check",
  "rc.h1": "Peak Season Call Readiness Check",
  "rc.lead": "A five minute self check across six areas. See exactly where calls and jobs are slipping through before your next season hits.",
  "rc.segment_label": "What kind of business are you? (optional, sharpens your result)",
  "rc.seg1": "Chandler / Installer",
  "rc.seg2": "Refit / Repair Yard",
  "rc.seg3": "Distributor",
  "rc.seg4": "Marina / Charter",
  "rc.progress_label": "checks completed",

  "rc.sec1": "Call Coverage",
  "rc.sec2": "Parts And Compatibility Questions",
  "rc.sec3": "After Hours And Emergency Handling",
  "rc.sec4": "International And Multilingual Callers",
  "rc.sec4_skip": "Skip this section if not relevant to your market.",
  "rc.sec4_na": "This section doesn't apply to my business",
  "rc.sec5": "System And Follow Up",
  "rc.sec6": "Seasonal Timing",

  "c1_1": "Every incoming call during peak hours gets answered live or gets a same day callback",
  "c1_2": "You know roughly how many calls go to voicemail in a typical peak week",
  "c1_3": "Urgent calls, like a breakdown or a haul out scheduled today, get flagged and routed differently than routine ones",
  "c1_4": "Someone reviews missed calls at least once a day during the season",

  "c2_1": "“Will this fit my engine or my boat” questions get a same day answer",
  "c2_2": "Make, model, and engine details are captured before the question reaches a technician",
  "c2_3": "Staff aren't regularly pulled off the shop floor to answer routine compatibility questions",
  "c2_4": "You can state your typical quote turnaround time without guessing",

  "c3_1": "There's a defined path for a call that comes in outside business hours",
  "c3_2": "A true emergency, like a stranded boat or a dock breakdown, reaches someone the same day",
  "c3_3": "Non urgent after hours calls get an appointment or callback, not silence",
  "c3_4": "You know roughly how many after hours calls came in last month",

  "c4_1": "You know roughly what share of calls come from non native speakers",
  "c4_2": "Those callers get handled comfortably in a language they understand",
  "c4_3": "Nothing gets lost in translation on vessel or part details",

  "c5_1": "Every inquiry gets logged somewhere, not just remembered",
  "c5_2": "Quotes and inquiries that go quiet get a structured follow up, not silence",
  "c5_3": "Your inventory or shop system stays in sync with what staff tell customers",
  "c5_4": "Dormant leads from the last 12 months get revisited at least once a season",

  "c6_1": "You know your exact peak season window, not just “it gets busy sometimes”",
  "c6_2": "Staffing and call handling are adjusted before the season starts, not during it",
  "c6_3": "You have a plan for what happens if peak volume runs ahead of last year",

  "rc.result_h": "Your Score",
  "rc.result_band_high": "Strong shape",
  "rc.result_band_mid": "Real jobs are likely slipping through",
  "rc.result_band_low": "Worth a real look before the season hits",
  "rc.result_msg_high": "The gaps left are worth closing, but nothing urgent is bleeding right now.",
  "rc.result_msg_mid": "This is the range where missed calls quietly cost real jobs and parts orders every peak week.",
  "rc.result_msg_low": "At this level, it's very likely calls and jobs are being lost every week without anyone tracking it.",
  "rc.focus_default": "Start with call coverage and after hours handling, the fastest wins for most marine businesses.",
  "rc.focus_seg1": "Your fastest win is likely parts and compatibility handling, the most repeated question in your business.",
  "rc.focus_seg2": "Your fastest win is likely urgent dispatch and after hours emergency handling.",
  "rc.focus_seg3": "Your fastest win is likely structured intake and CRM sync for B2B order inquiries.",
  "rc.focus_seg4": "Your fastest win is likely multilingual intake for owners, captains, and charter guests.",

  "calc.eyebrow": "What Is This Actually Costing You?",
  "calc.h2": "Estimate What Missed Calls Are Costing You",
  "calc.lead": "A rough, disclosed-assumption estimate, not a claim about your business specifically. The free audit replaces this with your real numbers.",
  "calc.f1": "Inquiry calls per week",
  "calc.f2": "Calls missed or unanswered",
  "calc.f3": "Average job or parts order value",
  "calc.f4": "Est. conversion rate of answered inquiries",
  "calc.out1": "Missed calls / month",
  "calc.out2": "Est. jobs lost / month",
  "calc.out_big": "Left on the table every year",
  "calc.out_small": "Estimate only, based on the assumptions above. Your free audit replaces this with your business's real numbers.",

  "rc.cta_h": "Want The Real Number, Not An Estimate?",
  "rc.cta_body": "Book a free 30 minute audit. We'll walk your actual call and job data and show you exactly where things are slipping.",
  "rc.cta_btn": "Book A Free Audit",
  "rc.back_home": "&larr; Back to PortRelay AI",
  "rc.share_label": "Share this check with anyone, no pitch attached:",
  "rc.copy_btn": "Copy Link",
  "rc.copy_done": "Copied"
},

fr: {
  "nav.home": "Accueil",
  "nav.how": "Comment ça marche",
  "nav.who": "À qui nous nous adressons",
  "nav.readiness": "Diagnostic",
  "nav.faq": "FAQ",
  "nav.contact": "Contact",
  "nav.cta": "Réserver un audit gratuit",

  "meta.home_title": "PortRelay AI — Accueil IA sur mesure pour entreprises nautiques",
  "meta.home_desc": "PortRelay AI conçoit, construit et exploite un service d'accueil IA sur mesure pour les entreprises nautiques, pas un logiciel que vous configurez vous-même. Répond aux appels, qualifie les demandes de pièces et réparations, et réserve la suite dans la langue de votre client.",
  "meta.rc_title": "Diagnostic de préparation à la haute saison — PortRelay AI",
  "meta.rc_desc": "Un auto-diagnostic gratuit de cinq minutes pour les entreprises nautiques. Découvrez précisément où appels et interventions vous échappent avant votre prochaine haute saison.",

  "hero.eyebrow": "L'IA conçue pour les entreprises nautiques",
  "hero.h1": "Chaque appel pris.<br>Chaque intervention réservée.",
  "hero.lead": "Nous concevons, construisons et exploitons un <strong>service d'accueil IA sur mesure</strong> pour votre entreprise nautique, pas un logiciel que vous configurez vous-même. Il répond aux appels pièces et réparations, qualifie la demande, et réserve la suite, dans la langue de votre client.",
  "hero.cta1": "Faites le diagnostic en 5 minutes",
  "hero.cta2": "Réserver un audit gratuit",
  "hero.trust": "Conçu pour les shipchandlers, chantiers de refit, distributeurs et marinas, en Europe et aux États-Unis.",
  "hero.badge1": "Conforme RGPD",
  "hero.badge2": "Données de paiement jamais stockées",
  "hero.badge3": "Intégré à vos outils existants",

  "problem.eyebrow": "Votre accueil téléphonique vous fait-il perdre des clients ?",
  "problem.h2": "L'appel que vous n'avez pas pris allait devenir une intervention",
  "problem.stat1": "Appels pièces et réparations sans réponse en pleine saison",
  "problem.stat2": "Appels urgents relégués derrière des questions courantes",
  "problem.stat3": "Appelants étrangers qui raccrochent faute d'interlocuteur",
  "problem.close": "<strong>Chaque appel manqué est une intervention perdue</strong>, et la plupart des entreprises nautiques n'ont jamais vraiment mesuré à quelle fréquence cela arrive.",

  "how.eyebrow": "Comment ça marche",
  "how.h2": "Un seul système, cinq mécanismes, zéro travail manuel",
  "how.lead": "Du premier appel à l'intervention réservée, l'IA gère la conversation de bout en bout, sans dépendre de quelqu'un qui doit penser à rappeler.",
  "step1.title": "Chaque appel pris",
  "step1.body": "Chaque appel est pris en charge instantanément et trié, urgence ou question courante, sans messagerie vocale, sans intervention perdue.",
  "step2.title": "Pièces et compatibilité gérées",
  "step2.body": "Les détails du bateau, du moteur et de la pièce sont recueillis en amont et vérifiés avant qu'un technicien ne soit dérangé.",
  "step3.title": "Multilingue dès le premier mot",
  "step3.body": "Propriétaires, capitaines, équipages et clients de charter sont pris en charge dans leur langue, puis orientés et enregistrés.",
  "step4.title": "Rien n'échappe hors horaires",
  "step4.body": "Une panne au ponton n'attend pas les heures de bureau. Les vraies urgences atteignent quelqu'un le jour même.",
  "step5.title": "Chaque dossier suivi, rien n'est oublié",
  "step5.body": "Chaque demande, devis et relance vit au même endroit, synchronisé avec les outils que vous utilisez déjà.",

  "who.eyebrow": "À qui nous nous adressons",
  "who.h2": "Quatre profils d'entreprises nautiques, quatre priorités différentes",
  "who.lead": "La conversation d'ouverture et le module prioritaire diffèrent selon le profil. Le système est calibré sur votre façon de travailler.",
  "seg1.tag": "Vente &amp; installateurs",
  "seg1.title": "Shipchandlers &amp; installateurs électronique",
  "seg1.body": "Pièces, questions de compatibilité et affluence en boutique gérées sans mobiliser votre équipe en pleine saison.",
  "seg2.tag": "Technique &amp; refit",
  "seg2.title": "Chantiers de refit et réparation",
  "seg2.body": "Interventions urgentes, qualification des devis et urgences hors horaires transmises immédiatement au bon technicien.",
  "seg3.tag": "Distribution &amp; grossiste",
  "seg3.title": "Distributeurs d'équipements nautiques",
  "seg3.body": "Demandes de stock et commandes B2B qualifiées et synchronisées directement avec votre système de commande.",
  "seg4.tag": "Marina &amp; charter",
  "seg4.title": "Marinas et opérateurs de charter",
  "seg4.body": "Communication multilingue avec propriétaires, capitaines, équipages et clients, plus questions de mouillage et planning, gérée en continu.",

  "besp.eyebrow": "Ce qui change vraiment",
  "besp.h2": "Un système que nous construisons et exploitons pour vous, pas un logiciel à configurer",
  "besp.lead": "PortRelay AI n'est ni une plateforme en libre-service ni un widget de chatbot à installer en espérant que ça marche. Nous concevons le système autour de votre façon de travailler, puis nous l'exploitons pour vous.",
  "besp.item1": "Conçu autour de votre catalogue, de vos techniciens et de votre saison, pas d'un modèle générique",
  "besp.item2": "Un interlocuteur dédié, pas une file d'attente de tickets",
  "besp.item3": "Se connecte à votre système de gestion ou d'inventaire actuel",
  "besp.item4": "Rapports mensuels et ligne directe avec l'équipe qui l'a construit",

  "season.eyebrow": "Deux saisons, un seul système",
  "season.h2": "Calé sur votre vrai calendrier, pas sur un abonnement générique",
  "season.lead": "Les entreprises nautiques n'ont pas toutes la même haute saison. Nous construisons et testons votre système selon celle qui vous concerne.",
  "s1.month": "Février &mdash; Mai",
  "s1.title": "Préparation lancement de saison",
  "s1.body": "Pour shipchandlers, installateurs et zones de plaisance aux Pays-Bas, en Allemagne, au Royaume-Uni et aux États-Unis. Le pic arrive avec la remise à l'eau de printemps.",
  "s2.month": "Octobre &mdash; Avril",
  "s2.title": "Préparation saison de refit",
  "s2.body": "Pour les chantiers de refit et service superyacht à Antibes, Cannes, La Ciotat, Palma et Gênes. Le pic arrive quand les yachts de charter sont à quai.",

  "faq.eyebrow": "Questions fréquentes",
  "faq.h2": "Des réponses claires, sans discours commercial",
  "faq1.q": "Est-ce que ça va remplacer notre logiciel de gestion ou d'inventaire ?",
  "faq1.a": "Non. Nous ne remplaçons pas DockMaster, Sage, Lightspeed ou l'outil que vous utilisez déjà, tout est reporté dans votre système existant. Cela supprime le travail manuel qui l'entoure.",
  "faq2.q": "Va-t-il essayer de répondre à des questions techniques sur le bateau du client ?",
  "faq2.a": "Non. Il gère la logistique et la qualification, détails du bateau, planning, compatibilité de base, et transmet immédiatement à votre équipe tout ce qui relève d'un vrai conseil technique.",
  "faq3.q": "Beaucoup de nos appels viennent de bateaux avec un mauvais réseau. Que se passe-t-il ?",
  "faq3.a": "Un appel coupé ou manqué déclenche un rappel dès que le réseau le permet, et un SMS ou message vocal transcrit prend le relais si l'appel n'aboutit jamais.",
  "faq4.q": "Les données de mes clients et paiements sont-elles en sécurité ?",
  "faq4.a": "Les données de carte ne sont jamais stockées au niveau de l'IA. Les données clients et bateau sont chiffrées en transit et au repos, jamais utilisées pour entraîner des modèles externes, et traitées conformément au RGPD pour les entreprises européennes.",
  "faq5.q": "Y a-t-il un contrat ou un engagement minimum ?",
  "faq5.a": "Les forfaits mensuels débutent par une période initiale de trois mois, puis se poursuivent au mois avec un préavis de trente jours pour modifier ou annuler. Les frais de mise en place sont uniques, dus au démarrage.",

  "cta.h2": "Prêt à arrêter de perdre des clients à cause d'un appel manqué ?",
  "cta.body": "Commencez par le diagnostic de 5 minutes, ou passez directement à un audit gratuit de 30 minutes. Dans les deux cas, vous verrez précisément ce qui vous échappe aujourd'hui.",
  "cta.btn1": "Faire le diagnostic",
  "cta.btn2": "Réserver un audit gratuit",

  "footer.blurb": "Services d'accueil IA sur mesure pour les entreprises nautiques, shipchandlers, chantiers de refit, distributeurs et marinas, en Europe et aux États-Unis.",
  "footer.offices": "Bureaux au Canada, en Suisse et en Inde.",
  "footer.nav_h": "Navigation",
  "footer.co_h": "Société",
  "footer.contact_h": "Contact",
  "footer.bottom": "&copy; 2026 PortRelay AI. Tous droits réservés.",
  "footer.privacy": "Politique de confidentialité",
  "footer.terms": "Conditions générales",
  "footer.readiness": "Diagnostic",

  "rc.eyebrow": "Auto-diagnostic gratuit",
  "rc.h1": "Diagnostic de préparation à la haute saison",
  "rc.lead": "Un auto-diagnostic de 5 minutes en six volets. Découvrez précisément où appels et interventions vous échappent avant votre prochaine haute saison.",
  "rc.segment_label": "Quel type d'entreprise êtes-vous ? (facultatif, affine votre résultat)",
  "rc.seg1": "Vente / Installateur",
  "rc.seg2": "Chantier de refit / réparation",
  "rc.seg3": "Distributeur",
  "rc.seg4": "Marina / Charter",
  "rc.progress_label": "cases cochées",

  "rc.sec1": "Couverture des appels",
  "rc.sec2": "Pièces et questions de compatibilité",
  "rc.sec3": "Urgences et gestion hors horaires",
  "rc.sec4": "Appelants internationaux et multilingues",
  "rc.sec4_skip": "Ignorez cette section si elle n'est pas pertinente pour votre marché.",
  "rc.sec4_na": "Cette section ne s'applique pas à mon activité",
  "rc.sec5": "Systèmes et suivi",
  "rc.sec6": "Calendrier saisonnier",

  "c1_1": "Chaque appel entrant en haute saison est pris en direct ou rappelé le jour même",
  "c1_2": "Vous savez à peu près combien d'appels partent en messagerie lors d'une semaine de pointe",
  "c1_3": "Les appels urgents, comme une panne ou une mise à sec prévue le jour même, sont signalés et orientés différemment des appels courants",
  "c1_4": "Quelqu'un vérifie les appels manqués au moins une fois par jour en saison",

  "c2_1": "Les questions « est-ce que ça va avec mon moteur ou mon bateau » obtiennent une réponse le jour même",
  "c2_2": "La marque, le modèle et le moteur sont notés avant que la question n'atteigne un technicien",
  "c2_3": "Le personnel n'est pas régulièrement interrompu pour répondre à des questions de compatibilité courantes",
  "c2_4": "Vous pouvez indiquer votre délai habituel de devis sans deviner",

  "c3_1": "Il existe un circuit défini pour un appel reçu hors des heures d'ouverture",
  "c3_2": "Une vraie urgence, comme un bateau en panne ou un incident au ponton, atteint quelqu'un le jour même",
  "c3_3": "Les appels non urgents hors horaires reçoivent un rendez-vous ou un rappel, pas le silence",
  "c3_4": "Vous savez à peu près combien d'appels hors horaires ont été reçus le mois dernier",

  "c4_1": "Vous savez à peu près quelle part de vos appels vient de personnes qui ne parlent pas couramment la langue locale",
  "c4_2": "Ces appelants sont pris en charge sans difficulté dans une langue qu'ils comprennent",
  "c4_3": "Aucun détail sur le bateau ou la pièce ne se perd dans la traduction",

  "c5_1": "Chaque demande est enregistrée quelque part, pas seulement retenue de mémoire",
  "c5_2": "Les devis et demandes sans réponse font l'objet d'une relance structurée, pas du silence",
  "c5_3": "Votre système de gestion reste synchronisé avec ce que le personnel annonce aux clients",
  "c5_4": "Les prospects inactifs des 12 derniers mois sont relancés au moins une fois par saison",

  "c6_1": "Vous connaissez précisément votre fenêtre de haute saison, pas juste « ça devient parfois chargé »",
  "c6_2": "Les effectifs et la gestion des appels sont ajustés avant le début de la saison, pas pendant",
  "c6_3": "Vous avez un plan si le volume de pointe dépasse celui de l'an dernier",

  "rc.result_h": "Votre score",
  "rc.result_band_high": "Bonne préparation",
  "rc.result_band_mid": "Des interventions vous échappent probablement",
  "rc.result_band_low": "À examiner sérieusement avant la saison",
  "rc.result_msg_high": "Les manques restants méritent d'être comblés, mais rien d'urgent ne fuit pour l'instant.",
  "rc.result_msg_mid": "C'est la zone où les appels manqués coûtent discrètement de vraies interventions et commandes chaque semaine de pointe.",
  "rc.result_msg_low": "À ce niveau, il est très probable que des appels et interventions se perdent chaque semaine sans que personne ne le suive.",
  "rc.focus_default": "Commencez par la couverture des appels et la gestion hors horaires, les gains les plus rapides pour la plupart des entreprises nautiques.",
  "rc.focus_seg1": "Votre gain le plus rapide est probablement la gestion des pièces et de la compatibilité, la question la plus répétée dans votre activité.",
  "rc.focus_seg2": "Votre gain le plus rapide est probablement la gestion des interventions urgentes et des urgences hors horaires.",
  "rc.focus_seg3": "Votre gain le plus rapide est probablement la prise en charge structurée et la synchronisation CRM pour les commandes B2B.",
  "rc.focus_seg4": "Votre gain le plus rapide est probablement l'accueil multilingue pour propriétaires, capitaines et clients de charter.",

  "calc.eyebrow": "Combien cela vous coûte-t-il réellement ?",
  "calc.h2": "Estimez ce que vous coûtent les appels manqués",
  "calc.lead": "Une estimation basée sur des hypothèses clairement indiquées, pas une affirmation sur votre activité en particulier. L'audit gratuit remplace ceci par vos vrais chiffres.",
  "calc.f1": "Appels de demande par semaine",
  "calc.f2": "Appels manqués ou sans réponse",
  "calc.f3": "Valeur moyenne d'une intervention ou commande",
  "calc.f4": "Taux de conversion estimé des demandes traitées",
  "calc.out1": "Appels manqués / mois",
  "calc.out2": "Interventions perdues estimées / mois",
  "calc.out_big": "Perdu chaque année",
  "calc.out_small": "Estimation basée sur les hypothèses ci-dessus. Votre audit gratuit remplace ceci par les vrais chiffres de votre entreprise.",

  "rc.cta_h": "Vous voulez le vrai chiffre, pas une estimation ?",
  "rc.cta_body": "Réservez un audit gratuit de 30 minutes. Nous analyserons vos vraies données d'appels et d'interventions pour vous montrer précisément où ça fuit.",
  "rc.cta_btn": "Réserver un audit gratuit",
  "rc.back_home": "&larr; Retour à PortRelay AI",
  "rc.share_label": "Partagez ce diagnostic avec qui vous voulez, sans démarchage :",
  "rc.copy_btn": "Copier le lien",
  "rc.copy_done": "Copié"
}
};

function applyLang(lang) {
  const dict = I18N[lang] || I18N.en;
  document.documentElement.setAttribute('lang', lang);
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });
  document.querySelectorAll('[data-i18n-attr]').forEach(el => {
    const pairs = el.getAttribute('data-i18n-attr').split(',');
    pairs.forEach(pair => {
      const [attr, key] = pair.split(':').map(s => s.trim());
      if (dict[key] !== undefined) el.setAttribute(attr, dict[key].replace(/&amp;/g,'&').replace(/&mdash;/g,'—').replace(/&larr;/g,'←'));
    });
  });
  document.querySelectorAll('.lang-toggle button').forEach(btn => {
    btn.classList.toggle('on', btn.getAttribute('data-lang') === lang);
  });
  const titleKey = document.body.getAttribute('data-title-key');
  const descKey = document.body.getAttribute('data-desc-key');
  if (titleKey && dict[titleKey]) document.title = dict[titleKey];
  if (descKey && dict[descKey]) {
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', dict[descKey]);
  }
  localStorage.setItem('portrelay-lang', lang);
  document.dispatchEvent(new CustomEvent('langchange', { detail: { lang } }));
}

function initLang() {
  const stored = localStorage.getItem('portrelay-lang');
  const browserLang = (navigator.language || 'en').slice(0, 2);
  const initial = stored || (browserLang === 'fr' ? 'fr' : 'en');
  applyLang(initial);
  document.querySelectorAll('.lang-toggle button').forEach(btn => {
    btn.addEventListener('click', () => applyLang(btn.getAttribute('data-lang')));
  });
}

document.addEventListener('DOMContentLoaded', initLang);
