/**
 * @brief Code to install the dependencies
 * @description This code will install the dependencies
 * listed in the `package.json` file.
 */
const fs = require('fs'); // file system handling
const path = require('path'); // file paths 
const cmd = require('node-cmd'); // allows to run bash commands inside nodejs 
const display_heading = require('./utils/Display_Heading'); // display in box  in commnd line 
const display_markdown = require('./utils/Display_Markdown'); // display the markdown content in command line 
const chalk = require('chalk'); // colorful termnal output

const install_dependencies = async () => {
  try {
    //Display a message
    display_heading('INSTALLING PROJECT DEPENDENCIES');
    const data = fs.readFileSync(
      path.join(__dirname, 'markdown/Install.md'),
      'utf-8'
    );
    display_markdown(data); // showing installtion information

    //Install the dependencies
    cmd.runSync('npm install -f'); // install all packages with (force options probably)
    console.log(chalk.green('Project dependencies installed successfully 🎉')); // if installed without errors 
  } catch (err) {
    console.log(chalk.red('ERROR: Failed to install project dependencies ❌')); // error catch and message shown
    console.log('REASON: ', err.message);

    process.exit(1);
  }
};

module.exports = install_dependencies;
