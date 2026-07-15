# Development Setup Guide

This guide provides instructions for setting up the development environment for the OSRS quest data npm module.

## Prerequisites

Before proceeding, ensure you have the following prerequisites installed on your system:

- [Node.js](https://nodejs.org/) (version 16.x or higher)
- [npm](https://www.npmjs.com/) (Node.js package manager)
- [Git](https://git-scm.com/) (version control system)

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/jamescer/osrs-tools.git
   ```

2. Navigate to the project directory:

   ```bash
   cd osrs-tools
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## Building the Module

To build the npm module and generate distribution files, run the following command:

```bash
npm run build
```

## Releasing

This project uses [changesets](https://github.com/changesets/changesets) to track changes and generate `CHANGELOG.md`. When you make a user-facing change:

```bash
npm run changeset
```

This prompts for the affected bump type (patch/minor/major) and a summary, and writes a changeset file to `.changeset/` — commit it alongside your change. When it's time to cut a release, `npm run changeset:version` consumes the pending changesets, bumps the version in `package.json`, and updates `CHANGELOG.md`.
