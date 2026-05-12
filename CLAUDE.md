# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev          # start dev server at localhost:5173
pnpm build        # tsc type-check + vite production build → dist/
pnpm preview      # serve the dist/ build locally
```

No test runner or linter is configured. Type errors surface via `pnpm build` (runs `tsc` before Vite).

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds with Node 20 + pnpm 9 and FTP-deploys `dist/` to `./public_html/` on one.com. Required GitHub secrets: `FTP_HOST`, `FTP_USER`, `FTP_PASS`.

`public/.htaccess` must stay in the repo — it configures Apache on one.com for SPA client-side routing.

## Architecture

**Stack:** Vite 4 + React 18 + TypeScript + SCSS CSS Modules + React Router v6. No backend, no database — all content is hardcoded in `src/data/`.

**Routing:** Four pages wired in `src/App.tsx`: `/`, `/about`, `/teams`, `/contact`. Header and Footer are rendered outside `<Routes>` so they persist across all pages.

**Content layer:** All editable site content lives in three files:
- `src/data/teams.ts` — rosters for both teams (Lightside + Darkside)
- `src/data/sponsors.ts` — sponsor list with logo, URL, tier, description
- `src/data/contact.ts` — email, Discord URL, social links; also exports `headerSocials` (subset shown in header/footer — currently only Twitter/X)

**Types:** `src/types/index.ts` is the single source of truth for `Team`, `TeamMember`, `LoLRole`, `Sponsor`, `SponsorTier`, `ContactInfo`, `SocialLink`, `SocialPlatform`.

## SCSS architecture

Variables and mixins are **auto-injected** into every `.module.scss` file via Vite's `css.preprocessorOptions.scss.additionalData`. This means:

- Use `v.$color-primary`, `v.$space-4`, etc. directly in any module — no `@use` needed
- Use `@include m.container`, `@include m.respond-to(md)`, etc. directly
- **Do NOT add `@use 'variables' as v;` or `@use 'mixins' as m;` inside `.module.scss` files** — it causes a Sass namespace conflict
- `global.scss` is the exception: it does NOT get the injection applied at the top level, so it must not re-declare `v` either (just use `v.$...` directly after the `@use 'reset'` line)
- If you need `sass:color` functions (e.g. `color.adjust()`), add `@use 'sass:color';` at the top of the individual module — this is safe because it uses a different namespace

**CSS Modules scoping:** `generateScopedName: '[local]'` is set in `vite.config.ts`, so class names in the DOM are exactly as written (no hash suffix). BEM naming prevents collisions.

**BEM hover gotcha:** When writing hover rules that cross BEM levels (e.g. `.block--modifier:hover` affecting `.block__element`), the rule **must** be written at the `.block` level, not nested inside `&--modifier`. Nesting inside `&--modifier` makes `&__element` resolve to `.block--modifier__element`:

```scss
// Correct
.member-card {
  &--linked:hover &__social-overlay { opacity: 1; }
}

// Wrong — generates .member-card--linked__social-overlay
.member-card {
  &--linked {
    &:hover &__social-overlay { opacity: 1; }
  }
}
```

## Key design tokens

| Token | Value |
|---|---|
| Primary (Lightside blue) | `#00beff` |
| Darkside red | `#ff0839` |
| Background | `#000000` |
| Surface | `#0d0d0d` |
| Font | Montserrat (loaded from Google Fonts in `index.html`) |
| Header height | `72px` |
| Container max-width | `1200px` |

## Teams page specifics

`MemberCard` (portrait card) and `StaffCard` (horizontal row) are two separate named exports from `src/components/common/MemberCard/MemberCard.tsx`. `Teams.tsx` splits `team.members` into players (`!isStaff`) and staff (`isStaff`) before rendering them in separate grids.

Player cards with `socials.length > 0` receive the `member-card--linked` class, which enables a hover overlay showing the social icon and handle extracted from the URL.

## Public assets

Static files served directly — replace placeholders before deploying:
- `/lightside-logo--blue-gradient.png` — used as header/footer logo and favicon
- `/LLS_Mountain_Darker.png` — hero background on all pages
- `/LundqvistTrävaru.png` — Lundqvist sponsor logo (filename contains special char `ä`)
- `/logo-white.png` — decorative background mark on the Home about-preview section
