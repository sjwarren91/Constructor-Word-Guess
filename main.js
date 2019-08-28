var Word = require("./word.js");
var inquirer = require('inquirer')

var wordArray = ["Hello", "World"];
var wordToGuess = new Word("Hello");

console.log("Here's your word! \n");
console.log(wordToGuess.printWord() + "\n");

inquirer.prompt([
    {
        type: "input",
        message: "Guess a letter!",
        name: "guess",
        validate: function(input){
            if (typeof input !== "string"){
                console.log("Please input a letter.")
                return;
            }
        }
    }
]).then(function(answer){

    var before = wordToGuess.printWord();
    wordToGuess.guessChar(answer);
    
    if(before === wordToGuess.printWord()){
        console.log("Correct!");
    } else {
        console.log("Incorrect!")
    }
    wordToGuess.printWord();
})