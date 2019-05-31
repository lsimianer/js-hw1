var selectableWords = 
["tibia",
"ankle",
"femur",
"cocyx",
"pelvis",
"patella",
"hip",
"cranium",
];

const maxTries = 10;

var guessedLetters = [];
var currentWordIndex = [];
var guessingWord = [];
var remainingGuesses = 0;
var gameStarted = false;
var hasFinished = false;
var wins = 0;
var guess = [];

// setting id's and constants


//start game
function startGame(){
    document.getElementById('splashScreen').style.display = 'none';
    document.getElementById('man').src = 'https://i.ibb.co/Pr65Kc0/Logo-Makr-3bkxi-P.png';
}

//attempt to make div fill btns

    // div_guessedLetters;
    // div_puzzle; 
    // div_available; 


function initializeGame(){
    div_guessedLetters = document.getElementById('guessedLetters');
    div_puzzle = document.getElementById('currentWord');
    div_available = document.getElementById('available');

}
    
    
    
        //reset game
    function resetGame() {
        remainingGuesses = maxTries;
        gameStarted = false;
    
        // use math.floor to make a whole number (rounded down)
    
        currentWordIndex = Math.floor(Math.random() * (selectableWords.length));
    
        // clear arrays
        guessedLetters = [];
        guessingWord = [];
    

    //build guessingWord
    for (var i = 0; i < selectableWords[currentWordIndex].length; i++) {
        guessingWord.push("_"); 
    }

    //hide game over/win messages
    document.getElementById("pressKeyTryAgain").style.cssText= "display:none";
    document.getElementById("gameOver-image").style.cssText = "display: none";
    document.getElementById("youWin-image").style.cssText = "display: none";

    // show display
    updateDisplay();
};

// updates diplay on html page
function updateDisplay(){

    document.getElementById("totalWins").innerText = wins;
    document.getElementById("currentWord").innerText = "";
    for (var i = 0; i <guessingWord.length; i++){
        document.getElementById("currentWord").innerText += guessingWord[i];
    }

    document.getElementById("remainingGuesses").innerText = remainingGuesses;
    document.getElementById("guessedLetters").innerText = guessedLetters;
    if(remainingGuesses <= 0){
        document.getElementById("gameOver-Image").style.display = 'block';
        document.getElementById("pressKeyTryAgain").style.display = 'block';
        hasFinished = true;
    }
};

 // OnClick Function
 check = function () {
    button.onclick = function () {
      var guess = (this.innerHTML);
      this.setAttribute("class", "active");
      this.onclick = null;
      for (var i = 0; i < word.length; i++) {
        if (word[i] === guess) {
          guesses[i].innerHTML = guess;
          counter += 1;
        } 
      }
      var j = (word.indexOf(guess));
      if (j === -1) {
        lives -= 1;
      }
    }
    
 };

 function makeGuess(letter) {
    if (remainingGuesses > 0) {
        if (!gameStarted) {
            gamestarted = true;
        }
        if(guessedLetters.indexOf(letter) === -1){
            guessedLetters.push(letter);
            evaluateGuess(letter);
        }
    }
    updateDisplay();
    checkWin();


