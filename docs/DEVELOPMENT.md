# Development Setup & Release Workflow

# WIP


Instructions for setting up the development environment for the `osrs-tools` npm library, and for cutting releases.

## Prerequisites

- [Node.js](https://nodejs.org/) ≥ 18 (see `.nvmrc` / `engines` in `package.json`)
- [npm](https://www.npmjs.com/)
- [Git](https://git-scm.com/)

## Getting started

```bash
git clone https://github.com/jamescer/osrs-tools.git
cd osrs-tools
npm install
npm run build
npm test
```

## Common commands

| Command | Description |
|---|---|
| `npm run build` | Compile TypeScript to `dist/` (dev build, includes tests) |
| `npm run build:npm` | Production build to `dist/` (used by `prepublishOnly`) |
| `npm test` | Run the Jest test suite |
| `npm run test:coverage` | Run tests with coverage |
| `npm run test:watch` | Run tests in watch mode |
| `npm run lint` | Lint and auto-fix with ESLint |
| `npm run format` | Format `src/` and `test/` with Prettier |
| `npm run changeset` | Record a change for the next release |
| `npm run publish-test` | Dry-run `npm publish` |

## Item icon maintenance scripts

The `scripts/` directory has a separate set of tools for maintaining OSRS item icon assets (`public/assets/items/`).
See [scripts/ITEM_ICONS_README.md](./scripts/ITEM_ICONS_README.md) and
[scripts/QUICK_REFERENCE.md](./scripts/QUICK_REFERENCE.md) for details, or run `scripts/launcher.bat` for an
interactive menu.

## Releasing

This project uses [changesets](https://github.com/changesets/changesets) to track changes and generate
`CHANGELOG.md`. When you make a user-facing change:

```bash
npm run changeset
```

This prompts for the affected bump type (patch/minor/major) and a summary, and writes a changeset file to
`.changeset/` — commit it alongside your change. See `.changeset/README.md` for details on the changeset file
format itself.

When it's time to cut a release:

```bash
npm run changeset:version
```

This consumes the pending changesets, bumps the version in `package.json`, and updates `CHANGELOG.md`. Then publish:

```bash
npm run changeset:publish
```

`prepublishOnly` runs the production build and full test suite before publish; `postpublish` pushes the commit and
tags. `preversion` and `version` (run automatically by `npm version`) also rebuild `dist/` and stage it.

## Contributing

Contributions are welcome. We use [Conventional Commits](https://www.conventionalcommits.org/) and
[changesets](https://github.com/changesets/changesets) for releases.

1. Fork and clone the repo, create a branch
2. Make your change and add tests
3. `npm test && npm run lint`
4. `npm run changeset` to record a changelog entry
5. Open a pull request

Please also review the [Code of Conduct](./CODE_OF_CONDUCT.md) and [Security Policy](./SECURITY.md).
