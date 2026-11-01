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

Collect coins, bounce on springs, avoid spikes and patrolling beetles, activate a checkpoint, and reach the finish. The course is 80 × 18 tiles, with 32-pixel tiles.

## Build

Select a tile from the editor palette and click or drag across the course. Switch into playtest to try your changes. Use local save/load to retain a course in this browser, or JSON export/import to keep a portable copy.

Browser storage is local to the current browser and origin. Clearing site data can remove saved courses; export JSON for a durable backup. Imported courses are user data, not executable code.

## Kata Arcade integration

Return to [Kata Arcade](https://intrepion.github.io/).

`arcade.json` provides a small, self-describing catalog entry: game title, repository name, entry point, genre, and controls. The game itself is a static site with `index.html` as its entry point. The Arcade catalog links to the published game.

## Design and fidelity

This is a deliberately scoped, original interpretation—not a Nintendo game, port, asset recreation, or full feature replica. It uses original programmatically drawn visuals and its own simplified movement and rules. No Nintendo artwork, characters, music, or level files are included.

The reference requested for the project is Nintendo's [Super Mario Maker electronic manual](https://microsite.nintendo-europe.com/super-mario-maker-manual/enGB/page_01.html). The manual URL returned HTTP 503 during preparation, so its contents were not available for direct verification. The implementation follows the general course-building/playtesting concept, not a claim of page-by-page manual coverage.

Deliberate limitations include no online course community, accounts, moderation, multiplayer, Nintendo game-style variants, extensive enemy catalog, or advanced Nintendo physics. Local JSON sharing is not an online publishing system. Creating a course does not certify that it is completable.

## License

Original project code and assets are available under the [MIT License](LICENSE). Nintendo and Super Mario Maker are trademarks of Nintendo; this independent project is not affiliated with or endorsed by Nintendo.
