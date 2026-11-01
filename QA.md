# Verification — 2026-11-01

- `npm test`: 10/10 passing, covering course validation and deterministic game simulation.
- Browser smoke test served at `http://127.0.0.1:4173`: the editor and playtest rendered; keyboard movement and jump input were exercised; painting a sunseed increased the count, and local save reported success.
- A complete default-course run, mobile controls, loading and JSON import/export have not been verified in a browser.
- This is an original interpretation; it is not affiliated with Nintendo. The reference manual returned HTTP 503 during preparation.

## Expansion verification

- `npm test`: 13/13 passing, including one-way platform collision, seed-block activation/reset, and undo/redo history.
- Local HTTP browser smoke: placed a seed block above the start and jumped into it; the game reported a seed and score of 1. Placed a platform, undid and redid the edit, and renamed the course. Platform traversal itself was covered by deterministic simulation, not browser play.
