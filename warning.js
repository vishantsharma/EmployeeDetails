var prompt = require('prompt');
var colors = require("colors/safe");

var schema = [colors.yellow(
    "The unit-tests were failing, right?"),   
    colors.yellow(
    "You didn't run the Cypress tests now, didn't you?"
)];

  // Start the prompt
  prompt.start();

  // Get input from the user

  prompt.get(schema, function (err, result) {
    // Log the results.
    console.log(colors.green("Hope you didn't lie :)"));
    
  });
