# Global Hemp Service — Clean Static Build

This is a unified, lightweight site skeleton with a tiny design system.

## Structure
- `/assets/css/tokens.css` — design tokens (colors, spacing, radii, type)
- `/assets/css/ui.css` — reusable components (buttons, cards, hero, header/footer)
- `/assets/css/site.css` — small theme accents
- `/assets/js/site.js` — hamburger toggle + active link
- Core pages: `index.html`, `marketplace.html`, `product.html`, `wallet.html`, `carbon.html`, `services.html`, `knowledge.html`, `partner.html`, `token.html`, `about.html`, `contact.html`, `cart.html`, `privacy.html`, `terms.html`, `cookies.html`

## Theming
- General site (green): `<body class="theme-site">`
- Marketplace (purple): `<body class="theme-market">`
- Wallet (yellow): `<body class="theme-wallet">`

## Deploy
Upload everything to your GitHub repo/Netlify site root. All paths are **absolute** (`/assets/...`).

## Next
- Hook real products and category pages.
- Build vendor onboarding flows (forms + auth).
- Connect WETAS logic + Carbon Lab MRV views.