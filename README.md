# Node.js CLI Project Template

This repository serves as a robust and modern starting point for **Node.js Command Line Interface (CLI) projects**, featuring TypeScript, ESLint, Prettier, Vitest for testing, and automated release management with Semantic Release.

It's designed to provide a consistent and high-quality development experience, ready for immediate use and easy customization for your CLI applications.

## Features

- **TypeScript:** Strong typing for scalable and maintainable code.
- **ESLint (v9 with FlatConfig):** Code linting using ESLint’s modern FlatConfig system via `eslint.config.ts`, including TypeScript-specific rules and type-aware linting.
- **Prettier:** Automated code formatting to ensure consistent style across the project.
- **Vitest:** Fast and modern unit testing framework with built-in coverage reporting.
- **Husky & Lint-Staged:** Git hooks to automatically lint and format code before committing, ensuring code quality.
- **TypeDoc:** Automated API documentation generation from JSDoc comments.
- **Semantic Release:** Automated versioning, changelog generation, and package publishing based on conventional commits.
- **GitHub Actions CI/CD:** Pre-configured workflow for continuous integration, including linting, building, testing, and security auditing.
- **Dev Container:** Ready-to-use VS Code Dev Container setup for a consistent development environment.
- **PNPM:** Efficient and fast package management.

## Getting Started

To use this template for your new project:

1. **Create a new repository from this template:**

   ```bash
   git clone https://github.com/alexulanch/node-cli-template.git your-new-project
   cd your-new-project
   rm -rf .git
   ```

2. **Initialize a new Git repository:**

   ```bash
   git init
   git add .
   git commit -m "feat: initial project setup from template"
   ```

3. **Install dependencies:**

   ```bash
   pnpm install
   ```

   This will also set up the Husky Git hooks automatically.

4. **Customize `package.json`:**
   - Update `name`, `description`, `author`, and `bin` fields.
   - Change `"your-package-name"` and `"your-cli-command"` placeholders.

5. **Update `src/cli.ts`:**
   - Modify the `runCli` function and the placeholder package name to match your new project's name and logic.

## Available Scripts

In the project directory, you can run:

- `pnpm dev` — Starts the project in development mode with `tsx watch`.
- `pnpm start` — Runs the compiled project.
- `pnpm build` — Compiles TypeScript code to JavaScript in the `dist` folder.
- `pnpm lint` — Runs ESLint to check for code quality and style issues.
- `pnpm format` — Formats all code using Prettier.
- `pnpm test` — Runs Vitest with coverage reporting enabled.
- `pnpm test:watch` — Alias for `pnpm test`.
- `pnpm docs` — Generates API documentation using TypeDoc in the `docs` folder.
- `pnpm release` — (For CI/CD) Automates package versioning, changelog generation, and publishing via Semantic Release.

## Project Structure

```
.
├── .devcontainer/ # VS Code Dev Container configuration
├── .github/workflows/ # GitHub Actions CI/CD workflows
├── .husky/ # Git hooks managed by Husky
├── dist/ # Compiled JavaScript output (ignored by Git)
├── docs/ # Generated API documentation (ignored by Git)
├── src/ # Source code
│ ├── cli.ts # Main CLI entry point (example)
│ └── cli.test.ts # Unit tests for cli.ts
├── eslint.config.ts # ESLint FlatConfig
├── .gitignore # Files and directories to ignore in Git
├── .prettierrc.json # Prettier configuration
├── package.json # Project metadata and scripts
├── pnpm-lock.yaml # PNPM lockfile
├── tsconfig.json # TypeScript configuration for source code
├── tsconfig.eslint.json # TypeScript configuration specifically for ESLint
└── vitest.config.ts # Vitest testing framework configuration
```

## Customization

- **ESLint Rules:** Adjust rules and plugin setup in `eslint.config.ts`.
- **Prettier Options:** Modify `.prettierrc.json`.
- **Vitest Configuration:** Update `vitest.config.ts` for test environment, coverage thresholds, etc.
- **CI/CD Workflow:** Customize `.github/workflows/ci.yml` for additional steps or different Node.js versions.
- **Semantic Release:** Adjust `release` configuration in `package.json` if your release process differs.

## License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.
