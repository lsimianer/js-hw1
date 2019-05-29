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

// setting id's and constants

function startGame(){
    document.getElementById('splashScreen').style.display = 'none';
    document.getElementById('man').src = 'https://i.ibb.co/Pr65Kc0/Logo-Makr-3bkxi-P.png';
}

//attempt to make div fill btns
var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

//start game
function initializeGame(){
    div_used = document.getElementById('guessedLetters');
    div_puzzle = document.getElementById('currentWord');
    div_available = document.getElementById('available');
    
    for(var i=0; i < alphabet.length; i++){
        var l = document.createElement('div');
        l.innerHTML = alphabet[i];
        l.className = 'btnLetter';
        div_available.appendChild(l);
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
    }

    for (var i = 0; i < selectableWords[currentWordIndex].length; i++) {
        guessingWord.push("_"); 
    }
}
