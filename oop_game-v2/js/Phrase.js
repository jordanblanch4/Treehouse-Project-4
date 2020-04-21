/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();

    }
    addPhraseToDisplay() { 
        const ul = document.querySelector('#phrase ul');
        for(let i =0; i < this.phrase.length; i++) {
            const li = document.createElement("li");
            ul.appendChild(li);
        if(this.phrase.charAt(i)===' '){
        li.className = "space"
    } else{
        li.className = `hide letter ${this.phrase.charAt(i)}`;
        li.textContent = `${this.phrase.charAt(i)}`;
            }
    
}
    }
    checkLetter(letter) {
        if (this.phrase.indexOf(letter)>-1) {
            return true;
        } else {
            return false;
        }
} 

    showMatchedLetter(letter) {
        const lis = document.getElementById('phrase').firstElementChild.children;
        for(let i = 0; i <lis.length; i++)
        if(lis[i].textConent === letter) {
            li.classList.add('show');
            li.classList.remove('hide');

        }


    }
     }
 
 