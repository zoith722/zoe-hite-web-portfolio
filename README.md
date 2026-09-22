Zoe Hite — Portfolio (scaffold)
================================

Private Overland Code client site. This repository contains the scaffold for the Zoe Hite portfolio per Linear ticket ZOE-3 — App Router + TypeScript, corporate‑minimal base layout, tokens, and a locked Design Read.

Phase 1 (ZOE-9): Contact form removed — email only via mailto in Links.

Package manager
---------------
- pnpm is the required package manager for this repo.
- Do not use npm, Yarn, or Bun.

Install
-------
```bash
pnpm install
```

Develop
-------
```bash
pnpm dev
# http://localhost:3000
```

Build
-----
```bash
pnpm build
pnpm start
```

Notes
-----
- App Router + TypeScript + ESLint are enabled.
- Fonts via `next/font` (Geist Sans, Geist Mono).
- Design tokens are defined as CSS variables in `app/globals.css`.
- Content config in `content/site.ts`.
- Section content is intentionally placeholders; implementation is out of scope for ZOE-3.

Design Read
-----------
See `DESIGN.md` for the full locked Design Read (one‑liner, reference, tokens, wireframe, avoid list).

Contact (Phase 1)
-----------------
- Links section includes: LinkedIn and `mailto:zhite722@gmail.com`.
- No contact form and no server or database. Future form work is deferred.

Testing
-------
```bash
pnpm test
```
Note: There are currently no server tests in Phase 1.

