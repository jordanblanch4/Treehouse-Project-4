/* Phrase Class */

 class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();

    }
    
    /**
    * Display phrase on game board
    */
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
  
    /**
* Checks if passed letter is in phrase
* @param (string) letter - Letter to check
*/
   checkLetter(letter) {
        if (this.phrase.indexOf(letter)>-1) {
            return true;
        } else {
            return false;
        }
} 

    
/**
* Displays passed letter on screen after a match is found
* @param (string) letter - Letter to display */
    showMatchedLetter(letter) {
    const li = document.querySelectorAll("#phrase li");
    for (let i = 0; i< li.length; i++) {
    if(li[i].textContent === letter) {
        li[i].classList.remove("hide");
        li[i].classList.add("show");
       }
     }
   }
  }

 
 