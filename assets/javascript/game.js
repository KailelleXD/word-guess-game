// Function List!!!
//-----------------             

// Function Declaration to get a random number depending on inputs.
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
} // var randomNumber = getRandomInt(max);

// Function Declaration to change all letters to lowercase.
function arrLower(arr1, Arr2) {
    for(var l = 0; l < arr1.length; l++) {
        Arr2.push(arr1[l].toLowerCase());
    }
} // Make sure to declare an empty array named arrLow

// Function Declaration to change all letters to uppercase.
function arrUpper(arr1, Arr2) {
    for(var u = 0; u < arr1.length; u++) {
       Arr2.push(arr1[u].toUpperCase());
    }
} // Make sure to declare an empty array named arrUp



// Function Declaration to refresh wordGuessArea
function wordGuessRefresh() {
    
    // For loop to replace text inside wordGuessArea with underscroll bars.
    wordGuessClear();

    console.log("Inside the function wordGuessRefresh: " + currentWord);

    for (var i = 0; i < currentWord.length; i++) {
        if (currentWord[i] == " ") {
            censoredWord.push(" - ");
        } else {
            censoredWord.push(" _ ");
        }
    }

    targetWordGuessArea.textContent = censoredWord.join(' ');

}

// Function Declaration to check if key input matches 
function userChoiceCheck(char, lower, upper, display) {

    for (var j = 0; j < lower.length; j++) {
        if (char == lower[j]) {
            display[j] = upper[j];
        }


    targetWordGuessArea.textContent = censoredWord.join(' ');
    }   
} // userChoiceCheck(userChoice, arrLow, arrUp, censoredWord);

function letterCheck(char, charUp, lower, upper, wLetters) {
    var charUp = char.toUpperCase();
    var valCheckWrong = wLetters.includes(charUp);
    var valCheckRight = lower.includes(char);
    var valCheckWrongUp = wLetters.includes(char);

    arrUpper(wLetters, upper);

    if (valCheckWrong == true && valCheckRight == false) { // if either value check is true.
        targetInfoPanel.textContent = "You've already chosen that letter!";
        targetLettersGuessed.textContent = wLetters.join(" ");
    } else if (valCheckWrong == false && valCheckRight == false && gameStatus == true) { // if the value returns false.
        targetInfoPanel.textContent = "You picked a wrong letter!"
        numOfGuess--;
        targetNumOfGuess.textContent = numOfGuess;
        wLetters.push(charUp); // then .push the character to wrongLetters Array.
        targetLettersGuessed.textContent = wLetters.join(" ");  
    } else if (valCheckWrong == false && valCheckRight == true && valCheckWrongUp == true) {
        wLetters.push(charUp);
        targetInfoPanel.textContent = "You found the letter: '" + charUp + "'";
        targetLettersGuessed.textContent = wLetters.join(" "); 
    } else if (valCheckWrong == false && valCheckRight == true && valCheckWrongUp == false) {
        targetInfoPanel.textContent = "You found the letter: '" + charUp + "'";
        wLetters.push(charUp);
        targetLettersGuessed.textContent = wLetters.join(" ");
        valCheckWrong = wLetters.includes(charUp);
    } else if (valCheckWrong == true && valCheckRight == true && valCheckWrongUp == false) {
        targetInfoPanel.textContent = "You already found that letter!";
    }
} // letterCheck(userChoice, userChoiceUp, arrLow, wrongLettersUp, wrongLetters);

// Function Declaration to clear wordGuessArea
function wordGuessClear() {
    targetWordGuessArea.textContent = "";
    censoredWord = [];
}

function infoPanelClear() {
    targetInfoPanel.textContent = "";
}

function lettersGuessedClear() {
    targetLettersGuessed.textContent = "__________";
    wrongLetters = [];
}

function winLoseCheck() {
    console.log("inside the function winLoseCheck: censoredWord = " + censoredWord);
    censoredWordCheckStatus = censoredWord.slice(0);
    for (var k = 0; k < censoredWordCheckStatus.length; k++) {
        if (censoredWordCheckStatus[k] == " - ") {
            censoredWordCheckStatus[k] = " ";
        }
    }
        
    var str1 = censoredWordCheckStatus.join('');
    var str2 = arrUp.join('');
    // console.log("str1: " + str1, "str2: " + str2);

    if (str1 == str2) {
        console.log("The strings match!(WIN)");
        targetInfoPanel.textContent = "You Won! (Press Any Key to Continue)";
        winCounter++;
        targetWins.textContent = winCounter;
        winLoseStatus = true;
        gameStatus = false; 
    } else if (str1 != str2 && numOfGuess == 0) {
        console.log("The strings DON'T match!(LOSS)");
        targetInfoPanel.textContent = "You Lost! The animal was a " + str2 + " (Press Any Key to Continue)";
        lossCounter++;
        targetLosses.textContent = lossCounter;
        winLoseStatus = true;
        gameStatus = false;
    }
}

function gameReset() {
    console.log("The game is being reset!")
    // What do I need to do in this function?

    wordGuessClear();
    infoPanelClear();
    lettersGuessedClear();
    numOfGuess = 10;

    var roundTotal = winCounter + lossCounter;

    targetInfoPanel.textContent = "Round: " + roundTotal + "! Here's your next word!";

    var zooAnimalsIndex = getRandomInt(zooAnimals.length) // Initializes a random number between 0 and the max length of the zooAnimals array.
    var currentWord = zooAnimals[zooAnimalsIndex]; // Locates the currentWord within the zooAnimals array and initializes it in currentWord.
    var wordSplit = currentWord.split(""); // Method that splits the string found in currentWord into an array of individual characters.

    arrLow = [];
    arrUp = [];

    arrLower(wordSplit, arrLow);
    arrUpper(wordSplit, arrUp);

    // console.log("inside gameReset function: arrLow = " + arrLow);
    // console.log("inside gameReset function: arrUp = " + arrUp);
    // console.log("Total number of Animals in zooAnimals: " + zooAnimals.length);
    // console.log("getRandomInt function chose this number: " + zooAnimalsIndex);
    // console.log("Number " + zooAnimalsIndex + " is " + zooAnimals[zooAnimalsIndex] + " in zooAnimals");
    // console.log("Variable currentWord contains: " + currentWord);
    // console.log(wordSplit);
    // console.log("There are a total of: " + wordSplit.length + " characters in the word: " + currentWord);
    
    winLoseStatus = false;
    gameStatus = true;

    targetWordGuessArea.textContent = censoredWord;

    wordGuessClear();

    console.log(currentWord);

    for (var i = 0; i < currentWord.length; i++) {
        if (currentWord[i] == " ") {
            censoredWord.push(" - ");
        } else {
            censoredWord.push(" _ ");
        }
    }

    targetWordGuessArea.textContent = censoredWord.join(' ');

    console.log(gameStatus);
    console.log(winLoseStatus);

    console.log("Inside the function gameReset: censoredWord = " + censoredWord);

    return censoredWord;


     
        
}

function secondaryInfo() {
    // When the 
}

//-----------------


// Arrays with initialized content.
//---------------------------------

zooAnimals = ["Monkey","Giant Panda","Elephant","Giraffe","Sloth","Lion","Penguin",
              "Tiger","Hippopotamus","Red Panda","Koala","Polar Bear","Lemur","Rhinoceros",
              "Zebra","Cheetah","Flamingo","Meerkat","Orangutan","Capybara","Tamarin",
              "Snow Leopard","Sea Lion","Jaguar","Gibbon","River Otter",
              "Chimpanzee","Komodo Dragon","Anteater"];

// zooAnimals = ["This Space","More Spaces","Test This Space"] //To debug issue where space does not show in wordGuessArea.

alphaAllCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
                "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
//---------------------------------

// Variable/Array List!!!
//-----------------------

var gameStatus = false; // Bool Varible to determine primary game state.
var winLoseStatus = false;
var winCounter = 0; // Counter for <span id="wins">
var lossCounter = 0; // Counter for <span id="losses">
var numOfGuess = 10;
var zooAnimalsIndex = getRandomInt(zooAnimals.length) // Initializes a random number between 0 and the max length of the zooAnimals array.
var currentWord = zooAnimals[zooAnimalsIndex]; // Locates the currentWord within the zooAnimals array and initializes it in currentWord.
var wordSplit = currentWord.split(""); // Method that splits the string found in currentWord into an array of individual characters.

var censoredWord = []; // Array to store the converted censored word.
var censoredWordCheckStatus = [];

var wrongLetters = []; // Array to store all wrong letter chosen by user.
var wrongLettersUp = [];
var userChoiceUp = [];
var arrLow = []; // Array to store the currentWord in lowercase form.
var arrUp = []; // Array to store the currentWord in uppercase form.
var userChoiceCorrect = [];

var targetWordGuessArea = document.getElementById("wordGuessArea");
var targetInfoPanel = document.getElementById("infoPanel");
var targetWins = document.getElementById("wins");
var targetLosses = document.getElementById("losses");
var targetNumOfGuess = document.getElementById("numOfGuess");
var targetLettersGuessed = document.getElementById("lettersGuessed");

// Secondary Info Panel targets!
var targetAniPic1 = document.getElementById("aniPic1");
var targetAniPic2 = document.getElementById("aniPic2");
var targetAnimalName = document.getElementById("animalName");
var targetAniInfo1 = document.getElementById("aniInfo1");
var targetAniInfo2 = document.getElementById("aniInfo2");
var targetAniInfo3 = document.getElementById("aniInfo3");
var targetAniInfo4 = document.getElementById("aniInfo4");
var targetAniInfo5 = document.getElementById("aniInfo5");

// Console.log checks!
// console.log("Total number of Animals in zooAnimals: " + zooAnimals.length);
// console.log("getRandomInt function chose this number: " + zooAnimalsIndex);
// console.log("Number " + zooAnimalsIndex + " is " + zooAnimals[zooAnimalsIndex] + " in zooAnimals");
// console.log("Variable currentWord contains: " + currentWord);
console.log(wordSplit);
// console.log("There are a total of: " + wordSplit.length + " characters in the word: " + currentWord);
console.log(censoredWord); // Should be blank since Main Game Code has yet to run.
// console.log(arrLow);
// console.log(arrUp);
// console.log(alphaAllCase);

// Call-back functions to run at initialization.
arrLower(wordSplit, arrLow);
arrUpper(wordSplit, arrUp);

//-----------------------


// Start of Main Game Code!!!
//---------------------------

document.onkeyup = function (event) {
      
    var userChoice = event.key;

    if (gameStatus == false && winCounter == 0 && lossCounter == 0) { // Sets up initial game state.
        gameStatus = true;
        targetNumOfGuess.textContent = numOfGuess;

        

        // Clears initial text content, "PRESS ANY KEY TO START!"
        wordGuessClear();

        // Call-back function to refresh wordGuessArea
        wordGuessRefresh(); 

    } else if (gameStatus == true) { // All main game code AFTER player presses any key to start.
        
        if (alphaAllCase.indexOf(userChoice) == -1) {
        targetInfoPanel.textContent = "You pressed an incorrect key!";
        } else {
            userChoiceCheck(userChoice, arrLow, arrUp, censoredWord);
            letterCheck(userChoice, userChoiceUp, arrLow, wrongLettersUp, wrongLetters);
            winLoseCheck();
        }
    } else if (gameStatus == false && winLoseStatus == true) {
        gameReset();
    }
}















    



  