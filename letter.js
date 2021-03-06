function Letter(letter){
    this.letter = letter;
    this.check = false;
}

Letter.prototype.guessCheck = function(){
    if (this.check){
        return this.letter;
    } else {
        return "_";
    }
}

Letter.prototype.charCheck = function(char){
    if(char === this.letter){
        this.check = true;
    } else {
        this.check = false;
    }
}

module.exports = Letter;