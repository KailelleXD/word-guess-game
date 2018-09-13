// Function List!!!
//-----------------             

// Function Declaration to get a random number depending on inputs.
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
} // var randomNumber = getRandomInt(max);

// Function Declaration to change all letters to lowercase.
function arrLower(arr1) {
    for(var l = 0; l < arr1.length; l++) {
        arrLow.push(arr1[l].toLowerCase());
    }
} // Make sure to declare an empty array named arrLow

// Function Declaration to change all letters to uppercase.
function arrUpper(arr1) {
    for(var u = 0; u < arr1.length; u++) {
        arrUp.push(arr1[u].toUpperCase());
    }
} // Make sure to declare an empty array named arrUp

// Function Declaration to refresh wordGuessArea
function wordGuessRefresh() {
    
    // For loop to replace text inside wordGuessArea with underscroll bars.
    wordGuessClear();

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

    // censoredWord.length = 0;

    for (var j = 0; j < lower.length; j++) {
        if (char == lower[j]) {
            display[j] = upper[j];
        }

    targetWordGuessArea.textContent = censoredWord.join(' ');
    }   
} // userChoiceCheck(userChoice, arrLow, arrUp, censoredWord);


// Function Declaration to clear wordGuessArea
function wordGuessClear() {
    targetWordGuessArea.textContent = "";
}



//-----------------


// Arrays with initialized content.
//---------------------------------

zooAnimals = ["Monkey","Giant Panda","Elephant","Giraffe","Sloth","Lion","Penguin",
              "Tiger","Hippopotamus","Red Panda","Koala","Polar Bear","Lemurs","Rhinoceros",
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
var winCounter = 0; // Counter for <span id="wins">
var lossCounter = 0; // Counter for <span id="losses">
var zooAnimalsIndex = getRandomInt(zooAnimals.length) // Initializes a random number between 0 and the max length of the zooAnimals array.
var currentWord = zooAnimals[zooAnimalsIndex]; // Locates the currentWord within the zooAnimals array and initializes it in currentWord.
var wordSplit = currentWord.split(""); // Method that splits the string found in currentWord into an array of individual characters.
var censoredWord = []; // Array to store the converted censored word.
var wrongLetter = []; // Array to store all wrong letter chosen by user.
var arrLow = []; // Array to store the currentWord in lowercase form.
var arrUp = []; // Array to store the currentWord in uppercase form.
var userChoiceCorrect = [];

var targetWordGuessArea = document.getElementById("wordGuessArea");
var targetInfoPanel = document.getElementById("infoPanel");



// Call-back functions to create arrays with characters in both lower and uppercase.
arrLower(wordSplit);
arrUpper(wordSplit);
//-----------------------


// Console.log checks!
console.log("Total number of Animals in zooAnimals: " + zooAnimals.length);
console.log("getRandomInt function chose this number: " + zooAnimalsIndex);
console.log("Number " + zooAnimalsIndex + " is " + zooAnimals[zooAnimalsIndex] + " in zooAnimals");
console.log("Variable currentWord contains: " + currentWord);
console.log(wordSplit);
console.log("There are a total of: " + wordSplit.length + " characters in the word: " + currentWord);
console.log(censoredWord); // Should be blank since Main Game Code has yet to run.
console.log(arrLow);
console.log(arrUp);
console.log(alphaAllCase);

// Start of Main Game Code!!!
//---------------------------

document.onkeyup = function (event) {
      
    var userChoice = event.key;

    if (gameStatus == false && winCounter == 0 && lossCounter == 0) { // Sets up initial game state.
        gameStatus = true;

        // Clears initial texxt content, "PRESS ANY KEY TO START!"
        wordGuessClear();

        // Call-back function to refresh wordGuessArea
        wordGuessRefresh(); 

    } else if (gameStatus == true) { // All main game code AFTER player presses any key to start.
        
        if (alphaAllCase.indexOf(userChoice) == -1) {
        targetInfoPanel.textContent = "You pressed an incorrect key!";
        } else {
            userChoiceCheck(userChoice, arrLow, arrUp, censoredWord);
            console.log(userChoice);
           
        }
    }
}















    



  