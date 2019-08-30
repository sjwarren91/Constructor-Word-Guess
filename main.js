var Word = require("./word.js");
var inquirer = require("inquirer");

var wordArray = ["Hello", "World"];
var wordToGuess;
var result;
var attempt;
var guesses = [];

start();

function start() {
    guesses = [];
    attempt = 10;
    wordGen(wordArray);
    loop();
}

function loop() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "Guess a letter!",
                name: "guess",
                validate: function(input) {
                    if (typeof input !== "string") {
                        console.log("Please input a letter.");
                        return false;
                    } else {
                        return true;
                    }
                }
            }
        ])
        .then(function(answer) {
            if(guesses.indexOf(answer.guess) < 0) {
                guesses.push(answer.guess);
                var before = wordToGuess.printWord();
                wordToGuess.guessChar(answer.guess.toLowerCase());
    
                if (before === wordToGuess.printWord()) {
                    attempt--;
                    console.log("Incorrect! You have " + attempt + " tries left!");
                } else {
                    console.log("Correct!");
                }

                
    
                if(endGameCheck(wordToGuess)){
                    startAgain();
                } else {
                    console.log(wordToGuess.printWord());
                    loop();
                }
            } else {
                console.log("You've already tried that..");
                console.log(wordToGuess.printWord());
                loop();
            }
        });
}

function endGameCheck(word) {
    if(attempt === 0){
        console.log("You Lose!");
        console.log("The answer was: " + result);
        return true;
    } else {
        var endCount = 0;
        word.array.forEach(element => {
            if (element.check === true) {
                endCount++;
            }
        });

        if (endCount === word.array.length) {
            console.log("You Win!");
            console.log("The answer is: " + result);
            return true;
        } else {
            return false;
        }
    }
}

function wordGen(array) {
    var rand = Math.floor(Math.random() * array.length);
    result = array[rand].toLowerCase()
    wordToGuess = new Word(result);
    console.log("Here's your word! \n");
    console.log(wordToGuess.printWord() + "\n");
}

function startAgain(){
    inquirer.prompt([
        {
            type: "confirm",
            message: "Do you want to play again?",
            name: "play"
        }
    ]).then(function(ans){
        if(ans.play){
            start();
        } else {
            console.log("BYE, HAVE A BEAUTIFUL TIME");
        }
    })
}
