// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

// split method on a string to convert it into an array
// join method on an array to convert it into a string

inp.on("close", () => {
    console.log(userInput[0].split('').join(' '));
});