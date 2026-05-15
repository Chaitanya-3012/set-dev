const prompts = require('prompts');

/**
 * Prompt user to select a framework
 * @returns {Promise<string>} Selected framework
 */
async function promptFramework() {
  const response = await prompts({
    type: 'select',
    name: 'framework',
    message: 'Which framework would you like to set up?',
    choices: [
      { title: 'React', value: 'react' },
      { title: 'Express', value: 'express' },
      { title: 'Next.js', value: 'next' }
    ],
    initial: 0
  });

  return response.framework;
}

/**
 * Prompt user for project name
 * @param {string} framework - Selected framework
 * @returns {Promise<string>} Project name
 */
async function promptProjectName(framework) {
  const response = await prompts({
    type: 'text',
    name: 'projectName',
    message: `What is your ${framework} project name?`,
    initial: `${framework}-app`,
    validate: value => value.length > 0 ? true : 'Please enter a project name'
  });

  return response.projectName;
}

/**
 * Prompt user to select a setup type for React
 * @returns {Promise<string>} Selected setup type
 */
async function promptReactSetupType() {
  const response = await prompts({
    type: 'select',
    name: 'setupType',
    message: 'Which React setup would you like?',
    choices: [
      { title: 'Vanilla React (Create React App)', value: 'vanilla-react' },
      { title: 'Vite React', value: 'vite-react' },
      { title: 'Vite React with TypeScript', value: 'vite-react-ts' },
      { title: 'Vite React with Tailwind CSS', value: 'vite-react-tailwind' },
      { title: 'Vite React with Shadcn/ui', value: 'vite-react-shadcn' }
    ],
    initial: 1
  });

  return response.setupType;
}

/**
 * Prompt user to select a setup type for Express
 * @returns {Promise<string>} Selected setup type
 */
async function promptExpressSetupType() {
  const response = await prompts({
    type: 'select',
    name: 'setupType',
    message: 'Which Express setup would you like?',
    choices: [
      { title: 'Vanilla Express', value: 'vanilla-express' },
      { title: 'Express with TypeScript', value: 'express-ts' },
      { title: 'Express with MongoDB (Mongoose)', value: 'express-mongoose' },
      { title: 'Express with Prisma', value: 'express-prisma' },
      { title: 'Express with Authentication', value: 'express-auth' }
    ],
    initial: 0
  });

  return response.setupType;
}

/**
 * Prompt user to select a setup type for Next.js
 * @returns {Promise<string>} Selected setup type
 */
async function promptNextSetupType() {
  const response = await prompts({
    type: 'select',
    name: 'setupType',
    message: 'Which Next.js setup would you like?',
    choices: [
      { title: 'Vanilla Next.js', value: 'vanilla-next' },
      { title: 'Next.js with TypeScript', value: 'next-ts' },
      { title: 'Next.js with App Router', value: 'next-appdir' },
      { title: 'Next.js with Tailwind CSS', value: 'next-tailwind' },
      { title: 'Next.js with Shadcn/ui', value: 'next-shadcn' }
    ],
    initial: 1
  });

  return response.setupType;
}

/**
 * Prompt user for additional features
 * @param {string} framework - Selected framework
 * @returns {Promise<Array<string>>} Selected features
 */
async function promptAdditionalFeatures(framework) {
  const features = {
    react: [
      { title: 'ESLint', value: 'eslint' },
      { title: 'Prettier', value: 'prettier' },
      { title: 'Jest', value: 'jest' },
      { title: 'React Router', value: 'router' }
    ],
    express: [
      { title: 'Nodemon', value: 'nodemon' },
      { title: 'ESLint', value: 'eslint' },
      { title: 'Jest', value: 'jest' },
      { title: 'Validation', value: 'validation' }
    ],
    next: [
      { title: 'ESLint', value: 'eslint' },
      { title: 'Prettier', value: 'prettier' },
      { title: 'Jest', value: 'jest' },
      { title: 'Next Auth', value: 'auth' }
    ]
  };

  const response = await prompts({
    type: 'multiselect',
    name: 'features',
    message: 'Select additional features (space to select, enter to confirm):',
    choices: features[framework] || [],
    hint: '- Space to select. Return to submit'
  });

  return response.features || [];
}

/**
 * Confirm setup execution
 * @param {object} setupConfig - Configuration for the setup
 * @returns {Promise<boolean>} Whether to proceed with setup
 */
async function confirmSetup(setupConfig) {
  const response = await prompts({
    type: 'confirm',
    name: 'confirm',
    message: `Proceed with setting up ${setupConfig.name} (${setupConfig.setupType})?`,
    initial: true
  });

  return response.confirm;
}

module.exports = {
  promptFramework,
  promptProjectName,
  promptReactSetupType,
  promptExpressSetupType,
  promptNextSetupType,
  promptAdditionalFeatures,
  confirmSetup
};