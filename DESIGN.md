Zoe Hite — Portfolio — Design Read (Locked)
===========================================

1) One‑liner
------------
“Reading this as: Zoe Hite portfolio for recruiters/collaborators, corporate‑minimal.”

2) Named reference
------------------
- Reference site: https://brianlovin.com — quiet personal site energy: strong type hierarchy, generous whitespace, restrained photography, one sharp accent, no template skeleton.

3) Token sheet (locked)
-----------------------
- Background: `#FAFAFA` (paper‑white surface)
- Ink / primary text: `#171717` (near‑black)
- Muted text: `#525252`
- Rule / border: `#E5E5E5`
- Accent: `#0F766E` (deep teal — professional, not indigo/violet)
- Accent soft: `#CCFBF1` (optional hover/chip)
- Type: Geist Sans (UI + body); Geist Mono (labels/meta). Body 15–16px; measure ~65–75ch for long copy.
- Spacing: 4/8 scale
- Radius: 2–6px (tight, corporate — not pill‑everything)
- Elevation: hairline borders over heavy shadows; one soft elevation max
- Motion budget: ≤1 signature moment; transform/opacity only; honor prefers‑reduced‑motion

Implementation notes:
- Tokens are implemented as CSS variables in `app/globals.css` (e.g., `--color-bg`, `--color-ink`, `--color-border`, `--color-accent`, etc.), with a 4/8 spacing scale, 2–6px radii, and a measured container width of ~72ch.
- Typography is provided via `next/font` with Geist Sans and Geist Mono.

4) Wireframe (ASCII)
--------------------
```
[skip link]
[sticky header: Zoe Hite | About · Experience · Projects · Links]
[hero: name + tagline]
[about landmark — empty placeholder OK this ticket]
[experience landmark]
[projects landmark]
[links landmark]
[footer: email + LinkedIn]
```

5) Avoid list (expanded)
------------------------
- No purple/indigo AI‑landing primary
- No gradient headlines
- No Inter/Roboto/Arial‑by‑default
- No cream+serif+sage autopilot
- No hero + three identical cards
- No stock unthemed shadcn Card fingerprint
- No emoji‑as‑icons
- No fade‑up‑everywhere
- No startup filler copy

Scope note
----------
Ticket scope ONLY: repo scaffold + Design Read + tokens + base layout. Do NOT implement section content, contact API, Neon, or Vercel production cutover in this ticket (later tickets).

