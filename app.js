const keyboard = document.querySelector('#qwerty');
const phrase = document.querySelector('#phrase');
const btnReset = document.querySelector('.btn__reset');
const ul = document.querySelector('#phrase');
const missed = 0;

// Array of Phrases
const phrases = [
                "I like you e", 
                "Good Morning e", 
                "Wassup Gangster",
                "Thats what she said",
                "I got my mind on my money and my money on my mind"
                ];

// Start Game, Remove Overlay, Reset
btnReset.addEventListener('click', function(){
  document.querySelector('#overlay').style.display = 'none';
});

// Get a random phrase from phrases arr
function getRandomPhraseArray(arr) {
  let randomNum = Math.floor((Math.random() * 5));
  let randomPhrase = arr[randomNum].split('');
  // returns an array of characters
  return randomPhrase;
};

// Array of characters (["I", " ", "l", "i", "k", "e", " ", "y", "o", "u"])
const phraseArray = getRandomPhraseArray(phrases);

// Add phrase to display
function addPhraseToDisplay(arr) {
  for(let i = 0; i < arr.length; i++) {
    let li = document.createElement('li');
    let letter = arr[i];
    li.appendChild(document.createTextNode(arr[i]));
    if(letter !== " "){
      li.classList.add('letter');
    }
    ul.appendChild(li);
  }
};

// Check if input is correct letter
function checkLetter(event) {
  // if input of ele of class "letter" is correct add 'show' class to <li> store and return letter
  let checkLetters = document.getElementsByClassName('letter');
  let foundLetter = false;
  for(let i = 0; i < checkLetters.length; i++) {
    if(checkLetters[i].textContent === 'e') {
      foundLetter = true;
      if(foundLetter) {
        console.log('hello');
        checkLetters[i].classList.add('show');
      } else {
      return null;
      }
    };
  }
};

keyboard.addEventListener('click', (e) => {
  if(e.target.tagName === "BUTTON") {
    let letter = e.target.textContent;
    if(letter === 'e') {
      checkLetter()
    }
  }
})

addPhraseToDisplay(phraseArray);

