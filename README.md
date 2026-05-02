# set-dev

**set-dev** is a zero-config CLI tool that helps developers generate starter setup commands and JSON scripts for popular frameworks in seconds—no more memorizing or searching boilerplate commands. Speed up your workflow for JavaScript (React, Express, Next.js) stacks, with support for Python backends and data science environments coming soon!

## Demonstration

[▶️ Watch demo_react.mp4](samples/demo_react.mp4)

## Guide

[▶️ Watch manual.mp4](samples/manual.mp4)

## Features

- **Instant CLI Usage:** No install needed! Run with `npx` for one-off setups.
- **Framework Coverage:**
  - JavaScript: React, Express, Next.js
  - Output includes ready-to-use setup commands and a tailored JSON file (e.g., `react-setup.json`)
- **Customizations:**
  - Generate commands for TypeScript, MongoDB, MySQL, Postgres, Redis, Tailwind, ESLint, Material UI, Redux, and more.
- **Smart Output:** Quickly see all commands and packages needed for your stack.

## Installation & Usage

Run instantly with `npx`:

```bash
npx set-dev --react      # Create React setup JSON
npx set-dev --express    # Express.js setup commands
npx set-dev --next       # Next.js starter scripts
```

A JSON file with curated commands for your chosen framework is generated in your current directory.

## Examples

### React (Vite, MUI, Redux, Tailwind, etc.)

```bash
npx set-dev --react
```

- `vite-react`, `vite-react-mui`, `vite-react-redux`, `vite-react-tailwind`, etc., included in output.

### Express (TS, MongoDB, Redis, Middleware...)

```bash
npx set-dev --express
```

- Output commands for TypeScript, Mongoose, MySQL, Postgres, Redis, and more.

### Next.js (TypeScript, 3JS, MUI, Redux...)

```bash
npx set-dev --next
```

## Output

Each run creates a JSON file (e.g., `react-setup.json`) containing:

- Project name, version, description
- Commands for multiple use cases (Vanilla, TypeScript, DB integrations, UI libraries)
- Additional package install commands

## Coming Soon

- **Python Backend Setups:** Flask, Django, FastAPI, and environment management
- **Data Science Setups:** Jupyter Notebooks, ML libraries (TensorFlow, PyTorch, scikit-learn), visualization tools

You’ll be able to run:

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

[![npm](https://img.shields.io/npmwww.npmjs.com/package/env://img.shields.io/npm/dt/env License

ISC License © Chaitanya-3012

## Community & Support

- Try set-dev today and share your thoughts!
- 🌟 Star the repo if you find it helpful
- Feature requests and community contributions are highly encouraged

`#Nodejs #OpenSource #DevTools #Automation #CLI #JavaScript
