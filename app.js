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

// Check if input is correct letter and reveals letter
function checkLetter(guess) {
  // if input of ele of class "letter" is correct add 'show' class to <li> store and return letter
  let checkLetters = document.querySelectorAll('.letter');
  let foundLetter = false;
  for(let i = 0; i < checkLetters.length; i++) {
    if(checkLetters[i].textContent === guess) {
      foundLetter = true;
      checkLetters[i].classList.add('show');
    };
  };
  if(foundLetter) {
    return guess;
  } else {
    return null;
  };
};

keyboard.addEventListener('click', (e) => {
  if(e.target.tagName === "BUTTON") {
    let match = false;
    let guess = e.target.textContent;
    checkLetter(guess);
    if(guess === checkLetter(guess)){
      match = true;
      e.target.classList.add('chosen');
      e.target.setAttribute('disabled', true);
      console.log('match');
    } else {
      e.target.classList.add('chosen');
      e.target.setAttribute('disabled', true);
      console.log('no match');
    }
    // let guessLetter = e.target.textContent;
    // if(guessLetter === correctLetter) {
    //   clickedEle.classList.add('chosen');
    //   console.log(correctLetter);
    // }
  }
})

addPhraseToDisplay(phraseArray);

