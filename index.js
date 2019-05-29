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

// Game logic, word bank array, and global data needed listed above ^^



function startGame(){
    document.getElementById('IntroScreen').style.display= 'none';
}

function replay(){
    document.getElementById('endScreen').style.display = 'none';
}

// reset game level variables

function resetGame() {
    remainingGuesses = maxTries;
    gameStarted = false;

    // use math.floor to make a whole number (rounded down)

    currentWordIndex = Math.floor(Math.random() * (selectableWords.length));

    // clear arrays
    guessedLetters = [];
    guessingWord = [];
// clear image     // shits broken, how do I fade the image, how do I keep it fading psuedo > function = fade in, fade out, repeat, hover affects (in css)??
    document.getElementById("hangmanImage").src ="https://i.ibb.co/Pr65Kc0/Logo-Makr-3bkxi-P.png";

  // onkeydown.getElementById("hangmanImage").src ="https://i.ibb.co/Pr65Kc0/Logo-Makr-3bkxi-P.png";

        // button to get new word or start next game



         //   document.getElementById("btn").onclick = resetGame();
   

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
        document.getElementById("gameOver-Image").style.display = 'block';
        document.getElementById("pressKeyTryAgain").style.display = 'block';
        hasFinished = true;
    }
};


//update with images
function updateHangmanImage() {
    document.getElementById("hangmanImage").src = "https://i.ibb.co/Pr65Kc0/Logo-Makr-3bkxi-P.png" + (maxTries - remainingGuesses) + ".png";
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
            makeGuess(event.key.toLowerCase());
        }
    }
};
// 65 is the ky code for "a" 90 is the keycode for "z". this keeps make
//guess from firing unless an a through z input was made.
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
    
};

function evaluateGuess(letter){
    var positions =[];
    for (var i = 0; i < selectableWords[currentWordIndex].length; i++){
        if(selectableWords[currentWordIndex][i] === letter){
            positions.push(i);
            document.getElementById("pressKeyTryAgain").style.cssText= "display:none";

        }
    }
    if(positions.length <= 0){
        remainingGuesses--;
        document.getElementById("pressKeyTryAgain").style.cssText= "display:block";
        
    } else{
        for (var i = 0; i < positions.length; i++) {
            guessingWord[positions[i]] = letter;
        }
    }
};

function checkWin() {
    if (guessingWord.indexOf("_") === -1) {
        wins++;
        document.getElementById("youWin-Image").src= "https://i.ibb.co/rFwwpZn/Logo-Makr-4-FVm3i.png" + ".png";
       
        document.getElementById("youWin-image").style.display= ' block';

        hasFinished = true;
    }
};




        