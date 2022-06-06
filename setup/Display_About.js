/**
 * @brief Code to display information about Talawa
 * @description This code reads the content from the
 * `About.md` file and displays it on the console. The text
 * contains basic information about the Talawa
 */

const fs = require('fs'); // to perofrm file operations 
const path = require('path'); // The node:path module provides utilities for working with file and directory paths. 
const display_heading = require('./utils/Display_Heading'); // take a string and display it * inside a box. It is used to denote the individual * installation steps.
const display_markdown = require('./utils/Display_Markdown'); //  display the content of a markdown file

const display_about = () => {
  //Read text from markdown file
  const data = fs.readFileSync(
    path.join(__dirname, 'markdown/about.md'),
    'utf-8'
  );

  //Display the text on console
  display_heading('TALAWA ADMIN'); //display in box
  display_markdown(data); // load contennt in commnd line 
};

module.exports = display_about;
