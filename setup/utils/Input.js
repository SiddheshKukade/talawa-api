/**
 * @function to take user input from the console
 * @parameters questions: Array of JavaScript objects containing variables and questions
 * @returns An object of the responses of the user
 */
const inquirer = require('inquirer'); // to get checkboxes and all the features 

const input = async (questions) => {
  const answer = await inquirer.prompt(questions);
  return answer;
};
// takes the input prints in and returns the user input as array
module.exports = input;
