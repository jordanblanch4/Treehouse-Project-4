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
            this.activePhrase = new Phrase(this.getRandomPhrase());
            this.activePhrase.addPhraseToDisplay();
            
        };

        handleInteraction() {




        };

        checkForWin() {
            let hiddenLetter = document.querySelectorAll(".hide");
            if(hiddenLetter.length === 0) {
                return true;
             } else {
                return false;
            }

        };

        removeLife() {
            let lives = document.querySelectorAll(".tries img")
            


            this.missed+=1;
            if(this.missed === 5) {
                return game.gameOver();
            }
        }

        gameOver() {


        }
   
   
   
    }




