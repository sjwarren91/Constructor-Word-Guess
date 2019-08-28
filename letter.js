function Letter(letter, check=false){
    this.letter = letter;
    this.check = check;
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