/**
 * @function to display the content of a markdown file
 */
var marked = require('marked');  // markdown-parser library renders HTML Code on command line 
var TerminalRenderer = require('marked-terminal'); // pacakage used to make the terminal output bold and colorful

marked.setOptions({
  renderer: new TerminalRenderer(),  //integrating terminal renderer with market package
});

const display_markdown = (text) => {
  console.log(marked(text)); //priting the markdown 
};

module.exports = display_markdown; //  exporting the markdown function
