const inquirer = require('inquirer');
const fs = require('fs');

function promptUser() {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'projectTitle',
      message: 'Enter the title of your project:',
    },
    {
      type: 'input',
      name: 'projectDescription',
      message: 'Enter a description of your project:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Enter installation instructions:',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Enter usage information:',
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Enter contribution guidelines:',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Enter test instructions:',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose a license for your project:',
      choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'None'],
    },
    {
      type: 'input',
      name: 'githubUsername',
      message: 'Enter your GitHub username:',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address:',
    },
  ]);
}

function generateREADME(data) {
  return `# ${data.projectTitle}

## Description
${data.projectDescription}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Tests
${data.tests}

## License
This project is licensed under the ${data.license} license.

## Questions
For questions or concerns, please contact me at [GitHub: ${data.githubUsername}](https://github.com/${data.githubUsername}) or email me at ${data.email}.
`;
}

promptUser()
  .then((userInput) => {
    const readmeContent = generateREADME(userInput);
    fs.writeFileSync('README.md', readmeContent);
    console.log('README.md file generated successfully.');
  })
  .catch((error) => {
    console.error('Error:', error);
  });
