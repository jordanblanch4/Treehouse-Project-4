/* Treehouse FSJS Techdegree
 * Game Class */

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
       
        //Begins game by selecting a random phrase and displaying it to user 
    
        startGame(){
            const overlay = document.getElementById('overlay');
            overlay.style.display = "none";
            this.activePhrase = new Phrase(this.getRandomPhrase());
            this.activePhrase.addPhraseToDisplay();
            
        };

        /**
        * Handles onscreen keyboard button clicks
        * @param (HTMLButtonElement) button - The clicked button element
        */
        
        handleInteraction(button) {
            if(this.activePhrase.checkLetter(button.textContent)) {
                //console.log(button);
                button.classList.add("chosen");
                this.activePhrase.showMatchedLetter(button.textContent);
                this.checkForWin();
                if(this.checkForWin()) {
                    this.gameOver(true);
                }
                 }
        else {
            //console.log('u sucks')
            button.classList.add('wrong');
            this.removeLife();

        }
        }

        /**
        * Checks for winning move
        * @return {boolean} True if game has been won, false if game wasn't
        won */
        checkForWin() {
            let hiddenLetter = document.querySelectorAll(".hide");
            if(hiddenLetter.length === 0) {
                return true;
             } else {
                return false;
            }

        };
        /**
        * Increases the value of the missed property
        * Removes a life from the scoreboard
        * Checks if player has remaining lives and ends game if player is out 
        * **/
        removeLife() {
            document.getElementsByTagName('img')[this.missed].src = 'images/lostHeart.png'
            
            this.missed+=1;
            if(this.missed === 5) {
                return game.gameOver();
            }
        }

        /**
        * Displays game over message
        * @param {boolean} gameWon - Whether or not the user won the game
        */
        gameOver(gameWon) {
            const overlay = document.getElementById('overlay');
            overlay.style.display = 'block';
            const message = document.getElementById('game-over-message');
            
            if(gameWon) {
                message.textContent = "You WON!! Congratulations!!!";
            } else {
            message.textContent = "You're out of Lives!! That was a tough one. Better luck next time!!!"
            }
        }
   
   
   
    }




