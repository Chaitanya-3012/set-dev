const execa = require('execa');
const ora = require('ora');
const chalk = require('chalk');

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
    const result = await execa.command(command, {
      cwd: options.cwd || process.cwd(),
      stdio: options.silent ? 'pipe' : 'inherit',
      shell: true
    });

    spinner.succeed(chalk.green(description));
    return { success: true, result };
  } catch (error) {
    spinner.fail(chalk.red(description));
    if (!options.continueOnError) {
      throw new Error(`Command failed: ${command}\n${error.message}`);
    }
    return { success: false, error };
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
 * @returns {Promise<boolean>} Whether setup was successful
 */
async function runSetup(setupConfig, projectName) {
  console.log(chalk.blue(`\n🚀 Setting up ${setupConfig.name} project: ${projectName}\n`));

  try {
    // Execute the main setup command
    if (setupConfig.mainCommand) {
      await executeCommand(
        setupConfig.mainCommand.cmd,
        setupConfig.mainCommand.description
      );
    }

    // Execute additional commands if any
    if (setupConfig.additionalCommands && setupConfig.additionalCommands.length > 0) {
      console.log(chalk.yellow('\n🔧 Installing additional packages...\n'));
      await executeCommands(setupConfig.additionalCommands);
    }

    console.log(chalk.green('\n✅ Setup completed successfully!'));
    console.log(chalk.cyan(`\n📁 Project created in: ${projectName}`));
    console.log(chalk.cyan(`\n👉 Next steps:`));
    console.log(chalk.white(`   cd ${projectName}`));
    console.log(chalk.white(`   npm run dev`));

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