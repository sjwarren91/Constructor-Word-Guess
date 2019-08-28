var Word = require("./word.js");
var inquirer = require('inquirer')

var wordArray = ["Hello", "World"];
var wordToGuess = new Word("hello");

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
                return false;
            } else {
                return true;
            }
        }
    }
]).then(function(answer){

    var before = wordToGuess.printWord();
    wordToGuess.guessChar(answer.guess.toLowerCase());
    
    if(before === wordToGuess.printWord()){
        console.log("Incorrect!");
    } else {
        console.log("Correct!")
    }

    console.log(wordToGuess.printWord());
})