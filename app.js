const qwerty = document.querySelector('#qwerty');
const phrase = document.querySelector('#phrase');
const btnReset = document.querySelector('.btn__reset');
const ul = document.querySelector('#phrase');
const missed = 0;

// Array of Phrases
const phrases = [
                "I like you", 
                "Good Morning", 
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
  let correctLetter = document.getElementsByClassName('letter');
  for(let i = 0; i < correctLetter.length; i++) {
    if(correctLetter[i].textContent === 'e') {
      console.log('hello');
      correctLetter[i].classList.add('show');
    }
  };
}

addPhraseToDisplay(phraseArray);

