/**
 * @brief Driver code for express installation
 * @description This code installs the Talawa API by
 * running the individual steps automatically. The
 * process consists of 4 steps:
 * 1. Displaying information about Talawa API
 * 2. Install project dependencies
 * 3. Set up user configuration
 * 4. Display command to start the application
 *
 * Every step displays whether it has been
 * executed successfully or not
 */

// IT IS MAINLY CREATED FOR THE  SETUP OF THE POJECT WITH DIFFERENT CONFIGURTION OPTION 
const path = require('path');  // The node:path module provides utilities for working with file and directory paths. 
const display_about = require('./setup/Display_About'); // displays content from the about.md file 
const install_dependencies = require('./setup/Install_Dependencies'); //Code to install the dependencies
const user_input = require('./setup/User_Input'); //  Code to provide choice for configuration
const start_application = require('./setup/Start_Application'); // Code to show command to start the application and the installtion process.

/**
 * This asynchronous function runs the setup process
 * by executing each of the steps serially
 */
const run_setup = async () => {
  //1. Display information about the project
  display_about();

  //2. Install project dependencies
  await install_dependencies();

  //3. Set up user configuration
  await user_input(path.join(__dirname, '.env'));

  //4. Display command to start the application
  await start_application();
};

run_setup();
