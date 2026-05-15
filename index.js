#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const chalk = require("chalk");

// Import command setup functions
const reactSetup = require("./commands/react");
const expressSetup = require("./commands/express");
const nextSetup = require("./commands/next");

// Import new libraries
const prompts = require("./lib/prompts");
const { runSetup } = require("./lib/executor");
const { parseArguments, showHelp, getSetupConfig } = require("./lib/utils");

// Map of framework setup functions
const frameworkSetups = {
  react: reactSetup,
  express: expressSetup,
  next: nextSetup
};

/**
 * Generate JSON output (backward compatibility mode)
 * @param {string} framework - Framework name
 */
function generateJson(framework) {
  const setupFunc = frameworkSetups[framework];
  if (!setupFunc) {
    console.error(chalk.red(`Unsupported framework: ${framework}`));
    process.exit(1);
  }

  const jsonOutput = setupFunc();
  const fileName = `${framework}-setup.json`;
  const outputPath = path.join(process.cwd(), fileName);

  fs.writeFileSync(outputPath, JSON.stringify(jsonOutput, null, 2));
  console.log(chalk.green(`Setup JSON written to ${outputPath}`));
}

/**
 * Run interactive setup
 * @returns {Promise<void>}
 */
async function runInteractiveSetup() {
  console.log(chalk.blue("Welcome to set-dev - Development Environment Setup Tool!"));
  console.log(chalk.gray("Create React, Express, and Next.js projects with ease.\n"));

  // Prompt for framework
  const framework = await prompts.promptFramework();
  if (!framework) {
    console.log(chalk.yellow("Setup cancelled."));
    process.exit(0);
  }

  // Prompt for project name
  const projectName = await prompts.promptProjectName(framework);
  if (!projectName) {
    console.log(chalk.yellow("Setup cancelled."));
    process.exit(0);
  }

  // Prompt for setup type based on framework
  let setupType;
  switch (framework) {
    case 'react':
      setupType = await prompts.promptReactSetupType();
      break;
    case 'express':
      setupType = await prompts.promptExpressSetupType();
      break;
    case 'next':
      setupType = await prompts.promptNextSetupType();
      break;
  }

  if (!setupType) {
    console.log(chalk.yellow("Setup cancelled."));
    process.exit(0);
  }

  // Get setup configuration
  try {
    const setupConfig = getSetupConfig(framework, setupType, frameworkSetups);

    // Confirm setup
    const confirmed = await prompts.confirmSetup(setupConfig);
    if (!confirmed) {
      console.log(chalk.yellow("Setup cancelled."));
      process.exit(0);
    }

    // Run setup
    await runSetup(setupConfig, projectName, framework);
  } catch (error) {
    console.error(chalk.red("Setup failed:"), error.message);
    process.exit(1);
  }
}

/**
 * Run non-interactive setup
 * @param {object} args - Parsed arguments
 */
async function runNonInteractiveSetup(args) {
  if (!args.framework) {
    console.error(chalk.red("Framework is required in non-interactive mode."));
    showHelp();
    process.exit(1);
  }

  if (!args.dir) {
    console.error(chalk.red("Project directory is required in non-interactive mode."));
    showHelp();
    process.exit(1);
  }

  if (!args.type) {
    console.error(chalk.red("Setup type is required in non-interactive mode."));
    showHelp();
    process.exit(1);
  }

  try {
    const setupConfig = getSetupConfig(args.framework, args.type, frameworkSetups);
    await runSetup(setupConfig, args.dir, args.framework);
  } catch (error) {
    console.error(chalk.red("Setup failed:"), error.message);
    process.exit(1);
  }
}

/**
 * Main function
 */
async function main() {
  const args = parseArguments(process.argv);

  // Show help
  if (args.help) {
    showHelp();
    process.exit(0);
  }

  // Backward compatibility mode - generate JSON
  if (process.argv.length === 3 && process.argv[2].startsWith('--')) {
    const framework = process.argv[2].substring(2); // Remove '--' prefix
    if (frameworkSetups[framework]) {
      generateJson(framework);
      return;
    }
  }

  // Non-interactive mode
  if (!args.interactive) {
    await runNonInteractiveSetup(args);
    return;
  }

  // Interactive mode
  if (!args.framework && !args.type && !args.dir) {
    await runInteractiveSetup();
    return;
  }

  // Mixed mode - use provided args with interactive prompts for missing values
  let framework = args.framework;
  let projectName = args.dir;
  let setupType = args.type;

  if (!framework) {
    framework = await prompts.promptFramework();
    if (!framework) {
      console.log(chalk.yellow("Setup cancelled."));
      process.exit(0);
    }
  }

  if (!projectName) {
    projectName = await prompts.promptProjectName(framework);
    if (!projectName) {
      console.log(chalk.yellow("Setup cancelled."));
      process.exit(0);
    }
  }

  if (!setupType) {
    switch (framework) {
      case 'react':
        setupType = await prompts.promptReactSetupType();
        break;
      case 'express':
        setupType = await prompts.promptExpressSetupType();
        break;
      case 'next':
        setupType = await prompts.promptNextSetupType();
        break;
    }

    if (!setupType) {
      console.log(chalk.yellow("Setup cancelled."));
      process.exit(0);
    }
  }

  try {
    const setupConfig = getSetupConfig(framework, setupType, frameworkSetups);
    await runSetup(setupConfig, projectName, framework);
  } catch (error) {
    console.error(chalk.red("Setup failed:"), error.message);
    process.exit(1);
  }
}

// Run main function
main().catch(error => {
  console.error(chalk.red("Unexpected error:"), error.message);
  process.exit(1);
});