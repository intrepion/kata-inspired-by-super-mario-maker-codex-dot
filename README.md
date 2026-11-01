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
