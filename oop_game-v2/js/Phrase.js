/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();

    }
    addPhraseToDisplay() { //FIXME: Returning only one element
        const ul = document.querySelector('#phrase ul');
        const li = document.createElement("li");
        for(let i =0; i< this.phrase.length; i++) {
             ul.appendChild(li);
    //         if(this.phrase.charAt(i)===''){
    //             li.className = "space"
    //         } else{
    //             li.className = `hide letter ${this.phrase.charAt(i)}`;
    //             li.textContent = `${this.phrase.charAt(i)}`;
    //         }
   
}

    }
        
    }
 
 