const execa = require('execa');
const ora = require('ora');
const chalk = require('chalk');
const path = require('path');

/**
 * Execute a command with progress indication
 * @param {string} command - The command to execute
 * @param {string} description - Description of what the command does
 * @param {object} options - Execution options
 * @returns {Promise<object>} Result of command execution
 */
async function executeCommand(command, description, options = {}) {
  const spinner = ora({
    text: description,
    spinner: 'clock'
  }).start();

  try {
    // Replace placeholders in command
    let processedCommand = command;
    if (options.projectName) {
      processedCommand = command.replace(/my-app/g, options.projectName);
    }

    const result = await execa.command(processedCommand, {
      cwd: options.cwd || process.cwd(),
      stdio: options.silent ? 'pipe' : 'inherit',
      shell: true
    });

    spinner.succeed(chalk.green(description));
    return { success: true, result, command: processedCommand };
  } catch (error) {
    spinner.fail(chalk.red(description));
    if (!options.continueOnError) {
      throw new Error(`Command failed: ${command}\n${error.message}`);
    }
    return { success: false, error, command };
  }
}

/**
 * Execute multiple commands in sequence
 * @param {Array<object>} commands - Array of command objects with cmd and description
 * @param {object} options - Execution options
 * @returns {Promise<Array<object>>} Results of all command executions
 */
async function executeCommands(commands, options = {}) {
  const results = [];

  for (const command of commands) {
    try {
      const result = await executeCommand(
        command.cmd,
        command.description,
        { ...options, cwd: command.cwd || options.cwd }
      );
      results.push(result);

      // If a command fails and we're not continuing on error, stop execution
      if (!result.success && !options.continueOnError) {
        break;
      }
    } catch (error) {
      results.push({ success: false, error });
      if (!options.continueOnError) {
        break;
      }
    }
  }

  return results;
}

/**
 * Run setup commands for a framework
 * @param {object} setupConfig - Configuration object with commands to run
 * @param {string} projectName - Name of the project directory
 * @param {string} framework - Framework name
 * @returns {Promise<boolean>} Whether setup was successful
 */
async function runSetup(setupConfig, projectName, framework) {
  console.log(chalk.blue(`\n🚀 Setting up ${setupConfig.name} project: ${projectName}\n`));

  try {
    // Determine the working directory
    const projectPath = path.join(process.cwd(), projectName);

    // Execute the main setup command
    if (setupConfig.mainCommand) {
      await executeCommand(
        setupConfig.mainCommand.cmd,
        setupConfig.mainCommand.description,
        { projectName }
      );
    }

    console.log(chalk.green('\n✅ Setup completed successfully!'));

    // Show framework-specific next steps
    console.log(chalk.cyan(`\n📁 Project created in: ${projectName}`));
    console.log(chalk.cyan(`\n👉 Next steps:`));
    console.log(chalk.white(`   cd ${projectName}`));

    // Framework-specific commands
    switch (framework) {
      case 'react':
        console.log(chalk.white(`   npm run dev`));
        break;
      case 'express':
        console.log(chalk.white(`   npm start`));
        break;
      case 'next':
        console.log(chalk.white(`   npm run dev`));
        break;
      default:
        console.log(chalk.white(`   npm run dev`));
    }

    return true;
  } catch (error) {
    console.error(chalk.red('\n❌ Setup failed:'), error.message);
    return false;
  }
}

module.exports = {
  executeCommand,
  executeCommands,
  runSetup
};