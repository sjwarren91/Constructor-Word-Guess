var Letter = require("./letter.js");

function Word(word){
    this.word = word.split("");
    this.array = [];
    this.word.forEach(element => {
        var letter = new Letter(element);
        this.array.push(letter);
    });
}

Word.prototype.printWord = function(){
    var string ="";

    this.array.forEach(letter => {
        string = string + letter.guessCheck() + " ";
    });

    return string;
}

Word.prototype.guessChar = function(char) {
    
    this.array.forEach(letter => {
        if(letter.check === false){
            letter.charCheck(char);
        }
    });

}

module.exports = Word;