# Verification — 2026-11-01

- `npm test`: 10/10 passing, covering course validation and deterministic game simulation.
- Browser smoke test served at `http://127.0.0.1:4173`: the editor and playtest rendered; keyboard movement and jump input were exercised; painting a sunseed increased the count, and local save reported success.
- A complete default-course run, mobile controls, loading and JSON import/export have not been verified in a browser.
- This is an original interpretation; it is not affiliated with Nintendo. The reference manual returned HTTP 503 during preparation.

## Expansion verification

- `npm test`: 13/13 passing, including one-way platform collision, seed-block activation/reset, and undo/redo history.
- Local HTTP browser smoke: placed a seed block above the start and jumped into it; the game reported a seed and score of 1. Placed a platform, undid and redid the edit, and renamed the course. Platform traversal itself was covered by deterministic simulation, not browser play.

## Bloom expansion verification

- `npm test`: 15/15 passing. Simulation covers pickup, one-hit protection, immunity, respawn, brick breaking, retry, and editable-course isolation.
- Local HTTP browser playtest: collected the example bloom and saw the shield indicator; placed a brick in the editor and broke it by jumping from below while powered. Shield loss was tested in simulation; a full course clear was not tested in this pass.

## Switch and gate verification

- `npm test`: 17/17 passing, including switch toggling, gate collision, reset, and preservation of the editable course in deterministic simulation.
- Local HTTP browser playtest: placed a switch and both gate colors, jumped into the switch, passed through the opened coral gate, and stopped against the solid blue gate. A complete course clear and mobile controls were not tested in this pass.

## Key and lock verification

- `npm test`: 19/19 passing; simulation covers one-use keys, locked collision, multiple locks, checkpoint persistence, retry, and editor-course isolation.
- Local HTTP browser playtest: placed a key and lock, observed the lock blocking movement without a key, collected the key, then passed the lock with the inventory returning to zero. A full course clear and mobile controls were not tested in this pass.

## Built-in progression — 2026-11-02

- `npm test`: 26/26 passing. Tests validate all six course data sets, the first course's limited pieces, lesson item groups, finale objective inventory and finish gating, plus existing mechanics and editor behavior. The finish-gating test explicitly supplies completed flags; it is not a simulated end-to-end route.
- Local HTTP browser playthroughs reached the finish of all six built-in courses. In the finale, the visible checklist recorded every required action before the finish accepted the run. The first five were played for completion, not exhaustive interaction coverage.
- Existing save/export code remains in place; this pass did not exercise a pre-existing browser save or mobile controls. The finale is a checklist challenge, not a general course-solvability proof.
