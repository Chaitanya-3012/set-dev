const fs = require('fs-extra');
const path = require('path');

/**
 * Check if a directory exists and is not empty
 * @param {string} dirPath - Path to directory
 * @returns {boolean} Whether directory exists and is not empty
 */
function directoryExistsAndNotEmpty(dirPath) {
  try {
    const stats = fs.statSync(dirPath);
    if (!stats.isDirectory()) {
      return false;
    }

    const files = fs.readdirSync(dirPath);
    return files.length > 0;
  } catch (error) {
    // Directory doesn't exist or other error
    return false;
  }
}

/**
 * Create a directory if it doesn't exist
 * @param {string} dirPath - Path to directory
 * @returns {Promise<void>}
 */
async function ensureDirectory(dirPath) {
  await fs.ensureDir(dirPath);
}

/**
 * Get setup configuration for a framework
 * @param {string} framework - Framework name
 * @param {string} setupType - Setup type
 * @param {object} setups - Setup configurations from command files
 * @returns {object} Setup configuration
 */
function getSetupConfig(framework, setupType, setups) {
  const frameworkSetup = setups[framework];
  if (!frameworkSetup) {
    throw new Error(`Unsupported framework: ${framework}`);
  }

  const setupCommands = frameworkSetup();
  const mainCommand = setupCommands.commands[setupType];

  if (!mainCommand) {
    throw new Error(`Unsupported setup type: ${setupType} for ${framework}`);
  }

  // Parse additional packages if needed
  const additionalCommands = [];

  return {
    name: setupCommands.name,
    version: setupCommands.version,
    description: setupCommands.description,
    framework,
    setupType,
    mainCommand: {
      cmd: mainCommand,
      description: `Creating ${setupCommands.name} project`
    },
    additionalCommands
  };
}

/**
 * Parse command line arguments
 * @param {Array<string>} args - Command line arguments
 * @returns {object} Parsed arguments
 */
function parseArguments(args) {
  const parsed = {
    framework: null,
    type: null,
    dir: null,
    features: [],
    interactive: true,
    help: false
  };

  for (let i = 2; i < args.length; i++) {
    const arg = args[i];

    if (arg === '--help' || arg === '-h') {
      parsed.help = true;
    } else if (arg === '--react') {
      parsed.framework = 'react';
    } else if (arg === '--express') {
      parsed.framework = 'express';
    } else if (arg === '--next') {
      parsed.framework = 'next';
    } else if (arg === '--type') {
      parsed.type = args[++i];
    } else if (arg === '--dir') {
      parsed.dir = args[++i];
    } else if (arg === '--features') {
      parsed.features = args[++i].split(',');
    } else if (arg === '--non-interactive' || arg === '--no-interactive') {
      parsed.interactive = false;
    } else if (!arg.startsWith('-')) {
      // Positional argument - could be framework name
      if (!parsed.framework) {
        parsed.framework = arg;
      } else if (!parsed.dir) {
        parsed.dir = arg;
      }
    }
  }

  return parsed;
}

/**
 * Show help message
 */
function showHelp() {
  console.log(`
Usage: npx set-dev [options] [framework] [directory]

Framework:
  react        Set up a React project
  express      Set up an Express project
  next         Set up a Next.js project

Options:
  --type <type>        Setup type (e.g., vite-react, express-ts)
  --dir <directory>    Project directory name
  --features <list>    Comma-separated list of features to include
  --non-interactive    Run in non-interactive mode
  --help, -h          Show this help message

Examples:
  npx set-dev                    # Interactive setup
  npx set-dev react              # Interactive React setup
  npx set-dev --react --type vite-react-ts --dir .
  npx set-dev express . --non-interactive
  `);
}

module.exports = {
  directoryExistsAndNotEmpty,
  ensureDirectory,
  getSetupConfig,
  parseArguments,
  showHelp
};