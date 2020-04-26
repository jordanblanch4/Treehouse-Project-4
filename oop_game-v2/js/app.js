/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


let game;
const btnRest = document.getElementById('btn__reset');

btnRest.addEventListener('click', (e) => {
    const phraseUL = document.getElementById('phrase').firstElementChild;
    phraseUL.innerHTML = "";
    const buttonEngage = document.getElementsByClassName('key');
    for(i=0; i<buttonEngage.length; i++)
        buttonEngage[i].classList.remove('chosen', 'wrong')
    //reset heart images
    
    let lives = document.getElementsByTagName('img');
    for(i=0; i<lives.length; i++) {
        lives[i].src = "images/liveHeart.png"
    }
    game = new Game();
    game.startGame();
});



const letterSelection = document.getElementById('qwerty');

letterSelection.addEventListener('click', (event) => {
 if(event.target.className === 'key') {
    game.handleInteraction(event.target);
    }
    
});   
