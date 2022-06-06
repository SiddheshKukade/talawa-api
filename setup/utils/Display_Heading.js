/**
 * @function to take a string and display it
 * inside a box. It is used to denote the individual
 * installation steps.
 */
const boxen = require('boxen'); // to  create a box om command line 
const chalk = require('chalk'); // to color the command line output 

const display_heading = (heading) => { 
  // heading is the text to be printed 
  const display_options = {
    float: 'center',
    padding: { left: 20, right: 20 },
    margin: 'auto',
    borderStyle: 'double',
  }; //configuration of the box to be displayed

  //Display the box enveloping the given heading
  console.log(boxen(chalk.yellow(heading), display_options)); // printing the output with a border box and color 
};

module.exports = display_heading; //  exporting the function
