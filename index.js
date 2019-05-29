var wordbank = 
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

// Game logic, word bank array, and global data needed listed above ^^

// reset game level variables

function resetGame() {
    remainingGuesses = maxTries;
    gameStarted = false;

    // use math.floor to make a whole number (rounded down)

    currentWordIndex = Math.floor(Math.random() * (selectableWords.length));

    // clear arrays
    guessedLetters = [];
    guessingWord = [];
// clear image
    document.getElementById("hangmanImage").src ="#";
//build guessing word and clear it
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
        document.getElementById("gameOver-Image").style.cssText = "display:block";
        document.getElementById("pressKeyTryAgain").style.cssText = "display:block";
        hasFinished = true;
    }
};


//update with images
function updateHangmanImage() {
    document.getElementById("hangmanImage").src = "assets/images/" + (maxTries - remainingGuesses) + ".png";
};

// capture keystrokes
document.onkeydown = function(event){
    //dump keystroke if game finished and reset
    if(hasFinished) {
        resetGame();
        hasFinished = false;
    } else {
        //make sure a-z was pressed
        if(event.keyCode >= 65 && event.keyCode <= 90){
            makeGuess(event.key.toLocaleLowerCase());
        }
    }
};
// 65 is the ky code for "a" 90 is the keycode for "z". this keeps make
//guess from firing unless an a through z input was made.



        