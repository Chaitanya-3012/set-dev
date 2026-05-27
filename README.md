# set-dev

**set-dev** is a zero-config CLI tool that helps developers set up complete development environments for popular frameworks in seconds—no more memorizing or searching boilerplate commands. Speed up your workflow for JavaScript (React, Express, Next.js) stacks with the latest framework versions and best practices!

## Demonstration

[▶️ Watch demo_react.mp4](samples/demo_react.mp4)

## Guide

[▶️ Watch manual.mp4](samples/manual.mp4)

## Features

- **Instant CLI Usage:** No install needed! Run with `npx` for one-off setups.
- **Framework Coverage:**
  - JavaScript: React, Express, Next.js
  - Actually creates projects, not just generating commands
- **Customizations:**
  - Set up projects with TypeScript, MongoDB, MySQL, Postgres, Redis, Tailwind, ESLint, Material UI, Redux, Shadcn/ui, Three.js, and more.
  - Latest framework versions and best practices
- **Interactive & Non-Interactive Modes:**
  - Guided setup with interactive prompts
  - Automated setup with CLI flags
- **Real-time Progress Tracking:**
  - See setup progress with spinners and status updates
  - Estimated setup times for each configuration

## Installation & Usage

### Interactive Mode (Recommended)
Run instantly with `npx` for guided setup:

```bash
npx set-dev              # Interactive setup - choose framework and options
```

### Non-Interactive Mode
Use CLI flags for automated setups:

```bash
npx set-dev react . --type vite-react-ts
npx set-dev express . --type express-ts
npx set-dev next . --type next-appdir
```

### Backward Compatibility Mode
Generate JSON files with setup commands (old behavior):

```bash
npx set-dev --react      # Generate React setup JSON
npx set-dev --express    # Generate Express.js setup JSON
npx set-dev --next       # Generate Next.js setup JSON
```

## Examples

### Interactive Setup
Simply run:
```bash
npx set-dev
```
Follow the interactive prompts to choose your framework, setup type, and project name.

### Non-Interactive Setup

#### React Projects
```bash
# Vite React with TypeScript
npx set-dev react . --type vite-react-ts

# Vite React with Tailwind CSS
npx set-dev react . --type vite-react-tailwind
```

#### Express Projects
```bash
# Express with TypeScript
npx set-dev express . --type express-ts

# Express with MongoDB
npx set-dev express . --type express-mongoose
```

#### Next.js Projects
```bash
# Next.js with TypeScript
npx set-dev next . --type next-ts

# Next.js with App Router
npx set-dev next . --type next-appdir
```

### Backward Compatibility - Generate JSON Files
```bash
npx set-dev --react      # Creates react-setup.json
npx set-dev --express    # Creates express-setup.json
npx set-dev --next       # Creates next-setup.json
```

Each JSON file contains:
- Project name, version, description
- Commands for multiple use cases (Vanilla, TypeScript, DB integrations, UI libraries)
- Additional package install commands

## Setup Types

### React Options
- `vanilla-react`: Create React App with default template
- `vite-react`: Fast React setup with Vite bundler
- `vite-react-ts`: React + Vite with TypeScript support
- `vite-react-tailwind`: React + Vite with Tailwind CSS styling
- `vite-react-shadcn`: React + Vite with Shadcn/ui components

### Express Options
- `vanilla-express`: Basic Express server setup
- `express-ts`: Express server with TypeScript support
- `express-mongoose`: Express server with Mongoose ORM
- `express-prisma`: Express server with Prisma ORM
- `express-auth`: Express server with JWT authentication

### Next.js Options
- `vanilla-next`: Basic Next.js app with default template
- `next-ts`: Next.js app with TypeScript support
- `next-appdir`: Next.js app with App Router (new folder structure)
- `next-tailwind`: Next.js app with Tailwind CSS styling
- `next-shadcn`: Next.js app with Shadcn/ui components

## CLI Options

```bash
npx set-dev [options] [framework] [directory]

Options:
  --type <type>        Setup type (e.g., vite-react, express-ts)
  --dir <directory>    Project directory name (use '.' for current directory)
  --non-interactive    Run in non-interactive mode
  --help, -h          Show help message

Examples:
  npx set-dev                    # Interactive setup
  npx set-dev react              # Interactive React setup
  npx set-dev --react --type vite-react-ts --dir .
  npx set-dev express . --non-interactive
```

## Coming Soon

- **Python Backend Setups:** Flask, Django, FastAPI, and environment management
- **Data Science Setups:** Jupyter Notebooks, ML libraries (TensorFlow, PyTorch, scikit-learn), visualization tools

You'll be able to run:

```bash
npx set-dev --flask
npx set-dev --django
npx set-dev --ds
```

And get ready-to-use setup scripts for Python and data science environments.

## Why set-dev?

> Stop memorizing and copy-pasting commands! set-dev creates ready-made project structures, enabling rapid prototyping, consistent onboarding, and reproducible setups across tech stacks.
> Try it if you're a lazy developer !

## Contributing

set-dev is open to all contributions!  
Suggestions, bug reports, feature requests, or PRs for new stacks are welcome.

- **GitHub Issues:** Use for feature ideas or bug reports
- **Pull Requests:** Add new frameworks, language stacks, or enhancements

## Links

- **npm:** [set-dev](https://www.npmjs.com/package/set-dev)
- **GitHub:** [github.com/Chaitanya-3012/set-dev](https://github.com/Chaitanya-3012/set-dev)

[![npm](https://img.shields.io/npm/v/set-dev.svg)](https://www.npmjs.com/package/set-dev)
[![License](https://img.shields.io/npm/l/set-dev.svg)](https://github.com/Chaitanya-3012/set-dev/blob/main/LICENSE)

## Community & Support

- Try set-dev today and share your thoughts!
- 🌟 Star the repo if you find it helpful
- Feature requests and community contributions are highly encouraged

`#Nodejs #OpenSource #DevTools #Automation #CLI #JavaScript`