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

// Function Declaration to check if key input matches 
function userChoiceCheck(char, lower, upper, display) {
    for ( var m = 0; m < lower.length; m++) {
        if (char == lower[m]) { // If userChoice matches any character in the array, replace that character in the <h1 id="wordGuessArea">
            var targetInfoPanel = document.getElementById("infoPanel"); // Change msg in infoPanel to: "You found the letter " + userChoice;
            targetInfoPanel.textContent = "You found the letter " + "'" + upper[m] + "'";
            // var targetLetters = document.getElementsByClassName(lower[m]); // Change the corresponding underscroll bar to the correct/userchosen letter/s.
            // console.log(targetLetters);
            // targetLetters[m].textContent = upper[m];
            var index = lower.indexOf(lower[m]);
                console.log(display);
                console.log(index);
                if (index !== -1) {
                    display[index] = upper[m];
                    wordGuessRefresh();                    
                }
        } else { // If userChoice does not match any character in the array, add that character to <div id="lettersGuessed">
            // Decrement numOfGuess.
            // Change msg in infoPanel to: "You chose an incorrect letter!
            // .push arr1[m] to wrongLetter array.
            // refresh msg in lettersGuessed to add any changes to wrongLetter array.
        }
    }
}

// Function Declaration to refresh wordGuessArea
function wordGuessRefresh() {
    
    // For loop to replace text inside <h1 id="wordGuessArea"> with the censoredWord.
    wordGuessClear();
    for(var j = 0; j < censoredWord.length; j++) {
        if (censoredWord[j] == " ") {
        var newHeading = document.createElement("br"); // Temporary solution since I can't figure out how to add more whitespace.
        wordGuessArea.appendChild(newHeading);
        } else {
            var newHeading = document.createElement("span");
            newHeading.setAttribute("class",arrLow[j]);
            newHeading.textContent = censoredWord[j];
            wordGuessArea.appendChild(newHeading);

            // Replace text inside <div id="infoPanel"> with, "Please choose a letter between A-Z!"
            var targetInfoPanel = document.getElementById("infoPanel");
            targetInfoPanel.textContent = "Please choose a letter between A-Z!";
        }
    }  
} // STOPPED HERE FOR THE NIGHT. CAN'T GET REPEAT LETTERS TO WORK!!!

// Function Declaration to clear wordGuessArea
function wordGuessClear() {
    var targetWordGuessArea = document.getElementById("wordGuessArea");
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

        // For loop to convert answer into "hidden" dashes (censoredWord)
        for(var i = 0; i < wordSplit.length; i++) {
            if (wordSplit[i] == " ") {
                censoredWord.push(" "); // Can't seem to get this to work! Temporary solution in the for loop below!
            } else {
                censoredWord.push("__ ");
            }
        }

        // Clears initial texxt content, "PRESS ANY KEY TO START!"
        wordGuessClear();

        // Call-back function to refresh wordGuessArea
        wordGuessRefresh(); 

    } else if (gameStatus == true) { // All main game code AFTER player presses any key to start.
        
        if (alphaAllCase.indexOf(userChoice) == -1) {
        var targetInfoPanel = document.getElementById("infoPanel");
        targetInfoPanel.textContent = "You pressed an incorrect key!";

        var newDiv = document.createElement("div");
        newDiv.textContent = "(Please choose a letter between A-Z)";
        targetInfoPanel.appendChild(newDiv);
        } else {
            userChoiceCheck(userChoice, arrLow, arrUp, censoredWord)
            console.log(userChoice);
           
        }
    }
}















    



  