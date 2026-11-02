# Sproutworks — Course Foundry

An original, lightweight browser platform game and course editor inspired by the build–play–revise loop of *Super Mario Maker*. Make a small obstacle course, switch straight into a playtest, and improve it one tile at a time.

## Run locally

Requires Node.js 18 or newer. No build step or third-party runtime dependencies.

```sh
npm start
```

Open **http://127.0.0.1:4173**. Serve the project over HTTP; do not open `index.html` as a `file://` URL.

```sh
npm test
```

The test command runs the project's Node rules tests. Test outcomes should be read from the current command output, not inferred from this README.

## Play

| Control | Action |
| --- | --- |
| Left / Right or A / D | Move |
| Space, W, or Up | Jump |
| Shift | Run |
| R | Retry |
| Tab | Switch between editor and playtest |

Collect sunseeds, jump through and land on one-way platforms, hit seed blocks from below for a reward, bounce on springs, avoid spikes and patrolling beetles, activate a checkpoint, and reach the finish. Hit a switch from below to swap coral and blue gates: one color is solid while the other is passable. Coral starts solid on each playtest or retry; the switch state persists through checkpoint respawns. Place keys and lock blocks to create optional routes: collect a key and touch a lock block to open it, consuming one key per block. Keys and opened locks persist through checkpoint respawns; retry restores them and clears your inventory. Seed blocks can be used once per playtest and reset on retry. Pick up a bloom to gain a shield against one thorn or beetle hit and break blocks by jumping into them from below. After a shield is lost, a brief flashing grace period prevents repeated hits. Falling still sends you back to the checkpoint, and retry restores the course. The course is 80 × 18 tiles, with 32-pixel tiles.

## Built-in course progression

Choose one of six built-in courses and select **Load course**. Play to the finish, then use **Next course**, or select any course directly. Loading asks before replacing the current editor course; local saves and exported JSON remain separate. Editing a built-in course makes it your own and removes the finale checklist from that edited copy.

1. First Steps: start, ground, and finish only.
2. Jump and Gather: sunseeds, thorns, and one-way platforms.
3. Bounce and Beetles: springs, beetles, and a checkpoint.
4. Bloom Workshop: bloom power, breakable blocks, and seed blocks.
5. Gates and Keys: switches, both gate colors, keys, and lock blocks.
6. Foundry Finale: its finish requires every checklist action. Pass the blue gate while it is open before switching to open coral; you can backtrack and hit the switch again. Touch the thorns with a bloom shield, then use the checkpoint.

The finale tracks collecting a sunseed and bloom; breaking a block; hitting a seed block; taking a shielded thorn hit; activating a checkpoint; bouncing on a spring; landing on a platform; stomping a beetle; hitting a switch; passing through each color of open gate; collecting a key; and opening a lock. The ground, start and finish are used by traversing the course. Empty space and eraser are editor tools, and the used seed block is an automatic result of hitting a seed block, so none is a separate objective. Running, dying, and retrying are optional controls rather than mandatory hazards. The finale is a checklist challenge with a flat route, not a proof that arbitrary player-made courses can be completed.

## Build

Name your course, select a tile from the editor palette, and click or drag across the course. Undo and redo edits using the buttons or Ctrl/Cmd-Z and Ctrl/Cmd-Shift-Z. Switch into playtest to try your changes. Use local save/load to retain a course in this browser, or JSON export/import to keep a portable copy.

Browser storage is local to the current browser and origin. Clearing site data can remove saved courses; export JSON for a durable backup. Imported courses are user data, not executable code.

## Kata Arcade integration

Return to [Kata Arcade](https://intrepion.github.io/).

`arcade.json` provides a small, self-describing catalog entry: game title, repository name, entry point, genre, and controls. The game itself is a static site with `index.html` as its entry point. The Arcade catalog links to the published game.

## Design and fidelity

This is a deliberately scoped, original interpretation—not a Nintendo game, port, asset recreation, or full feature replica. It uses original programmatically drawn visuals and its own simplified movement and rules. No Nintendo artwork, characters, music, or level files are included.

Nintendo’s [original game tutorial](https://en-americas-support.nintendo.com/app/answers/detail/a_id/15167/~/how-to-start-and-play-though-the-tutorial-%28super-mario-maker%29) describes placing elements, playtesting, and naming and saving a course. These inspired the editor flow; the mechanics and presentation here are simplified original interpretations.

Deliberate limitations include no online course community, accounts, moderation, multiplayer, Nintendo game-style variants, extensive enemy catalog, or advanced Nintendo physics. Local JSON sharing is not an online publishing system. Creating a course does not certify that it is completable.

## License

Original project code and assets are available under the [MIT License](LICENSE). Nintendo and Super Mario Maker are trademarks of Nintendo; this independent project is not affiliated with or endorsed by Nintendo.
