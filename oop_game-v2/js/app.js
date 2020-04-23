/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


let game;
const btnRest = document.getElementById('btn__reset');

btnRest.addEventListener('click', (e) => {
    game = new Game();
    game.startGame();
});



const letterSelection = document.getElementById('qwerty');

letterSelection.addEventListener('click', (event) => {
 if(event.target.className === 'key') {
    game.handleInteraction(event.target);
    }
    
});   