const ora = require('ora');
const chalk = require('chalk');

/**
 * Create a progress spinner
 * @param {string} text - Text to display
 * @returns {object} Ora spinner instance
 */
function createSpinner(text) {
  return ora({
    text: text,
    spinner: 'clock'
  });
}

/**
 * Show a success message
 * @param {string} message - Success message
 */
function showSuccess(message) {
  console.log(chalk.green(`✅ ${message}`));
}

/**
 * Show an error message
 * @param {string} message - Error message
 */
function showError(message) {
  console.log(chalk.red(`❌ ${message}`));
}

/**
 * Show an info message
 * @param {string} message - Info message
 */
function showInfo(message) {
  console.log(chalk.blue(`ℹ️  ${message}`));
}

/**
 * Show a warning message
 * @param {string} message - Warning message
 */
function showWarning(message) {
  console.log(chalk.yellow(`⚠️  ${message}`));
}

module.exports = {
  createSpinner,
  showSuccess,
  showError,
  showInfo,
  showWarning
};