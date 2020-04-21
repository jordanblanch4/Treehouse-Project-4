/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
    constructor() {
        this.missed = 0;
        this.phrases = ['Geez Louise','Party Hardy','small computer book club','Good morning Vietnam','Air trip'];
        this.activePhrase = null;
    }
        
    /**
* Selects random phrase from phrases property
* @return {Object} Phrase object chosen to be used
*/
     getRandomPhrase() {
            let randNumber = Math.floor(Math.random() * 5)
            return this.phrases[randNumber];
    };
        startGame(){
            const overlay = document.getElementById('overlay');
            overlay.style.display = "none";
            this.activePhrase = this.getRandomPhrase();
            const phrase = new Phrase(this.activePhrase);
            phrase.addPhraseToDisplay();
            
        };

        handleInteraction() {
            



        };

    }



