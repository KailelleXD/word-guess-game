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

    // console.log("Inside the function wordGuessRefresh: " + currentWord);

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
    // console.log("inside the function winLoseCheck: censoredWord = " + censoredWord);
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
        // console.log("The strings match!(WIN)");
        targetInfoPanel.textContent = "You Won! (Press Any Key to Continue)";
        winCounter++;
        targetWins.textContent = winCounter;
        winLoseStatus = true;
        gameStatus = false;
        secondaryInfo();
    } else if (str1 != str2 && numOfGuess == 0) {
        // console.log("The strings DON'T match!(LOSS)");
        targetInfoPanel.textContent = "You Lost! The animal was a " + str2 + " (Press Any Key to Continue)";
        lossCounter++;
        targetLosses.textContent = lossCounter;
        winLoseStatus = true;
        gameStatus = false;
        secondaryInfo();
    }
}

function gameReset() {
    // console.log("The game is being reset!")
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
    console.log(wordSplit);
    // console.log("There are a total of: " + wordSplit.length + " characters in the word: " + currentWord);
    
    winLoseStatus = false;
    gameStatus = true;

    targetWordGuessArea.textContent = censoredWord;

    wordGuessClear();

    // console.log(currentWord);

    for (var i = 0; i < currentWord.length; i++) {
        if (currentWord[i] == " ") {
            censoredWord.push(" - ");
        } else {
            censoredWord.push(" _ ");
        }
    }

    targetWordGuessArea.textContent = censoredWord.join(' ');

    // console.log(gameStatus);
    // console.log(winLoseStatus);

    // console.log("Inside the function gameReset: censoredWord = " + censoredWord);

    return censoredWord;
}

function secondaryInfo() {
    // When the winLoseStatus == true. we create a switch statement with the var zooAnimalsIndex. Each case will manip the Secondary info panel to provide info on each animal.
    console.log("The function secondaryInfo() has been called");
    console.log("censoredWord: " + censoredWord);
    animalWord = censoredWord.join("");
    console.log("animalWord: " + animalWord);
    targetAnimalName.textContent = animalWord;


    if(winLoseStatus == true) {
        switch(animalWord) {
            case "MONKEY":
                document.getElementById("aniPic1").src="assets/images/monkey1.jpg";
                document.getElementById("aniPic2").src="assets/images/monkey2.jpg";
                targetAniInfo1.textContent = "A monkey's life spans range from 10 to 50 years, depending on the species.";
                targetAniInfo2.textContent = "Most monkeys live in the tropical rain forests.";
                targetAniInfo3.textContent = "A group of monkeys is called a troop.";
                targetAniInfo4.textContent = "Howler monkeys are the loudest monkeys, and their howl can be heard 2 to 3 miles away.";
                targetAniInfo5.textContent = "Patas monkeys are the fastest primates on land, and can run up to 31 miles per hour.";
                break;

            case "GIANT - PANDA":
                document.getElementById("aniPic1").src="assets/images/giantpanda1.jpg";
                document.getElementById("aniPic2").src="assets/images/giantpanda2.jpg";
                targetAniInfo1.textContent = "Live in the mountains of southwestern China, in damp, misty forests.";
                targetAniInfo2.textContent = "Can live up to 20 years in the wild, and up to 30 years in managed care.";
                targetAniInfo3.textContent = "They spend at least 12 hours every day eating bamboo.";
                targetAniInfo4.textContent = "Female pandas weigh 155 to 220 lbs, while males weigh 190 to 275 lbs.";
                targetAniInfo5.textContent = "Pandas poop up to 50 times a day in the wild.";
                break;

            case "ELEPHANT":
                document.getElementById("aniPic1").src="assets/images/elephant.jpg";
                document.getElementById("aniPic2").src="assets/images/elephant.jpg";
                targetAniInfo1.textContent = "They can live from 30 to over 50 years.";
                targetAniInfo2.textContent = "Female elephants are an average 8 ft. in height (at the shoulders), and males are an average 10.5 ft. ";
                targetAniInfo3.textContent = "Female elephants can weigh up to 8,000 lbs, and males can weigh up to 15,000 lbs.";
                targetAniInfo4.textContent = "The low, resounding calls elephants make can be heard by another elephant up to 5 miles away.";
                targetAniInfo5.textContent = "Unlike other mammals, elephants grow throughout their lifetime.";
                break;

            case "GIRAFFE":
                document.getElementById("aniPic1").src="assets/images/giraffe1.jpg";
                document.getElementById("aniPic2").src="assets/images/giraffe2.jpg";
                targetAniInfo1.textContent = "";
                targetAniInfo2.textContent = "";
                targetAniInfo3.textContent = "";
                targetAniInfo4.textContent = "";
                targetAniInfo5.textContent = "";
                break;

            case "SLOTH":
                document.getElementById("aniPic1").src="assets/images/sloth1.jpg";
                document.getElementById("aniPic2").src="assets/images/sloth2.jpg";
                targetAniInfo1.textContent = "";
                targetAniInfo2.textContent = "";
                targetAniInfo3.textContent = "";
                targetAniInfo4.textContent = "";
                targetAniInfo5.textContent = "";
                break;

            case "LION":
                document.getElementById("aniPic1").src="assets/images/lion1.jpg";
                document.getElementById("aniPic2").src="assets/images/lion2.jpg";
                targetAniInfo1.textContent = "";
                targetAniInfo2.textContent = "";
                targetAniInfo3.textContent = "";
                targetAniInfo4.textContent = "";
                targetAniInfo5.textContent = "";
                break;

            case "PENGUIN":
                document.getElementById("aniPic1").src="assets/images/penguin1.jpg";
                document.getElementById("aniPic2").src="assets/images/penguin2.jpg";
                targetAniInfo1.textContent = "";
                targetAniInfo2.textContent = "";
                targetAniInfo3.textContent = "";
                targetAniInfo4.textContent = "";
                targetAniInfo5.textContent = "";
                break;

            case "TIGER":
                document.getElementById("aniPic1").src="assets/images/tiger1.jpg";
                document.getElementById("aniPic2").src="assets/images/tiger2.jpg";
                targetAniInfo1.textContent = "";
                targetAniInfo2.textContent = "";
                targetAniInfo3.textContent = "";
                targetAniInfo4.textContent = "";
                targetAniInfo5.textContent = "";
                break;

            case "HIPPOPOTAMUS":
                document.getElementById("aniPic1").src="assets/images/hippo1.jpg";
                document.getElementById("aniPic2").src="assets/images/hippo2.jpg";
                targetAniInfo1.textContent = "";
                targetAniInfo2.textContent = "";
                targetAniInfo3.textContent = "";
                targetAniInfo4.textContent = "";
                targetAniInfo5.textContent = "";
                break;

            case "RED - PANDA":
                document.getElementById("aniPic1").src="assets/images/redpanda1.jpg";
                document.getElementById("aniPic2").src="assets/images/redpanda2.jpg";
                targetAniInfo1.textContent = "";
                targetAniInfo2.textContent = "";
                targetAniInfo3.textContent = "";
                targetAniInfo4.textContent = "";
                targetAniInfo5.textContent = "";
                break;

            case "KOALA":
                document.getElementById("aniPic1").src="assets/images/koala1.jpg";
                document.getElementById("aniPic2").src="assets/images/koala2.jpg";
                targetAniInfo1.textContent = "";
                targetAniInfo2.textContent = "";
                targetAniInfo3.textContent = "";
                targetAniInfo4.textContent = "";
                targetAniInfo5.textContent = "";
                break;

            case "POLAR - BEAR":
                document.getElementById("aniPic1").src="assets/images/polarbear1.jpg";
                document.getElementById("aniPic2").src="assets/images/polarbear2.jpg";
                targetAniInfo1.textContent = "";
                targetAniInfo2.textContent = "";
                targetAniInfo3.textContent = "";
                targetAniInfo4.textContent = "";
                targetAniInfo5.textContent = "";
                break;

            case "LEMURS":
                document.getElementById("aniPic1").src="assets/images/lemur1.jpg";
                document.getElementById("aniPic2").src="assets/images/lemur2.jpg";
                targetAniInfo1.textContent = "";
                targetAniInfo2.textContent = "";
                targetAniInfo3.textContent = "";
                targetAniInfo4.textContent = "";
                targetAniInfo5.textContent = "";
                break;

            case "RHINOCEROS":
                document.getElementById("aniPic1").src="assets/images/rhino1.jpg";
                document.getElementById("aniPic2").src="assets/images/rhino2.jpg";
                targetAniInfo1.textContent = "";
                targetAniInfo2.textContent = "";
                targetAniInfo3.textContent = "";
                targetAniInfo4.textContent = "";
                targetAniInfo5.textContent = "";
                break;

            case "ZEBRA":
                document.getElementById("aniPic1").src="assets/images/zebra1.jpg";
                document.getElementById("aniPic2").src="assets/images/zebra2.jpg";
                targetAniInfo1.textContent = "";
                targetAniInfo2.textContent = "";
                targetAniInfo3.textContent = "";
                targetAniInfo4.textContent = "";
                targetAniInfo5.textContent = "";
                break;

            case "CHEETAH":
                document.getElementById("aniPic1").src="assets/images/cheetah1.jpg";
                document.getElementById("aniPic2").src="assets/images/cheetah2.jpg";
                targetAniInfo1.textContent = "";
                targetAniInfo2.textContent = "";
                targetAniInfo3.textContent = "";
                targetAniInfo4.textContent = "";
                targetAniInfo5.textContent = "";
                break;

            case "FLAMINGO":
                document.getElementById("aniPic1").src="assets/images/flamingo1.jpg";
                document.getElementById("aniPic2").src="assets/images/flamingo2.jpg";
                targetAniInfo1.textContent = "";
                targetAniInfo2.textContent = "";
                targetAniInfo3.textContent = "";
                targetAniInfo4.textContent = "";
                targetAniInfo5.textContent = "";
                break;

            case "MEERKAT":
                document.getElementById("aniPic1").src="assets/images/meerkat1.jpg";
                document.getElementById("aniPic2").src="assets/images/meerkat2.jpg";
                targetAniInfo1.textContent = "";
                targetAniInfo2.textContent = "";
                targetAniInfo3.textContent = "";
                targetAniInfo4.textContent = "";
                targetAniInfo5.textContent = "";
                break;

            case "ORANGUTAN":
                document.getElementById("aniPic1").src="assets/images/orangutan1.jpg";
                document.getElementById("aniPic2").src="assets/images/orangutan2.jpg";
                targetAniInfo1.textContent = "";
                targetAniInfo2.textContent = "";
                targetAniInfo3.textContent = "";
                targetAniInfo4.textContent = "";
                targetAniInfo5.textContent = "";
                break;

            case "CAPYBARA":
                document.getElementById("aniPic1").src="assets/images/capybara1.jpg";
                document.getElementById("aniPic2").src="assets/images/capybara2.jpg";
                targetAniInfo1.textContent = "";
                targetAniInfo2.textContent = "";
                targetAniInfo3.textContent = "";
                targetAniInfo4.textContent = "";
                targetAniInfo5.textContent = "";
                break;

            case "TAMARIN":
                document.getElementById("aniPic1").src="assets/images/tamarin1.jpg";
                document.getElementById("aniPic2").src="assets/images/tamarin2.jpg";
                targetAniInfo1.textContent = "";
                targetAniInfo2.textContent = "";
                targetAniInfo3.textContent = "";
                targetAniInfo4.textContent = "";
                targetAniInfo5.textContent = "";
                break;

            case "SNOW - LEOPARD":
                document.getElementById("aniPic1").src="assets/images/snowleopard1.jpg";
                document.getElementById("aniPic2").src="assets/images/snowleopard2.jpg";
                targetAniInfo1.textContent = "";
                targetAniInfo2.textContent = "";
                targetAniInfo3.textContent = "";
                targetAniInfo4.textContent = "";
                targetAniInfo5.textContent = "";
                break;

            case "SEA - LION":
                document.getElementById("aniPic1").src="assets/images/sealion1.jpg";
                document.getElementById("aniPic2").src="assets/images/sealion2.jpg";
                targetAniInfo1.textContent = "";
                targetAniInfo2.textContent = "";
                targetAniInfo3.textContent = "";
                targetAniInfo4.textContent = "";
                targetAniInfo5.textContent = "";
                break;

            case "JAGUAR":
                document.getElementById("aniPic1").src="assets/images/jaguar1.jpg";
                document.getElementById("aniPic2").src="assets/images/jaguar2.jpg";
                targetAniInfo1.textContent = "";
                targetAniInfo2.textContent = "";
                targetAniInfo3.textContent = "";
                targetAniInfo4.textContent = "";
                targetAniInfo5.textContent = "";
                break;

            case "GIBBON":
                document.getElementById("aniPic1").src="assets/images/gibbon1.jpg";
                document.getElementById("aniPic2").src="assets/images/gibbon2.jpg";
                targetAniInfo1.textContent = "";
                targetAniInfo2.textContent = "";
                targetAniInfo3.textContent = "";
                targetAniInfo4.textContent = "";
                targetAniInfo5.textContent = "";
                break;

            case "RIVER - OTTER":
                document.getElementById("aniPic1").src="assets/images/riverotter1.jpg";
                document.getElementById("aniPic2").src="assets/images/riverotter2.jpg";
                targetAniInfo1.textContent = "";
                targetAniInfo2.textContent = "";
                targetAniInfo3.textContent = "";
                targetAniInfo4.textContent = "";
                targetAniInfo5.textContent = "";
                break;

            case "CHIMPANZEE":
                document.getElementById("aniPic1").src="assets/images/chimpanzee1.jpg";
                document.getElementById("aniPic2").src="assets/images/chimpanzee2.jpg";
                targetAniInfo1.textContent = "";
                targetAniInfo2.textContent = "";
                targetAniInfo3.textContent = "";
                targetAniInfo4.textContent = "";
                targetAniInfo5.textContent = "";
                break;

            case "KOMODO - DRAGON":
                document.getElementById("aniPic1").src="assets/images/komododragon1.jpg";
                document.getElementById("aniPic2").src="assets/images/komododragon2.jpg";
                targetAniInfo1.textContent = "";
                targetAniInfo2.textContent = "";
                targetAniInfo3.textContent = "";
                targetAniInfo4.textContent = "";
                targetAniInfo5.textContent = "";
                break;

            case "ANTEATER":
                document.getElementById("aniPic1").src="assets/images/anteater1.jpg";
                document.getElementById("aniPic2").src="assets/images/anteater2.jpg";
                targetAniInfo1.textContent = "";
                targetAniInfo2.textContent = "";
                targetAniInfo3.textContent = "";
                targetAniInfo4.textContent = "";
                targetAniInfo5.textContent = "";
                break;

        }
    }
    
    
}

//-----------------


// Arrays with initialized content.
//---------------------------------

// zooAnimals = ["Monkey","Giant Panda","Elephant","Giraffe","Sloth","Lion","Penguin",
//               "Tiger","Hippopotamus","Red Panda","Koala","Polar Bear","Lemur","Rhinoceros",
//               "Zebra","Cheetah","Flamingo","Meerkat","Orangutan","Capybara","Tamarin",
//               "Snow Leopard","Sea Lion","Jaguar","Gibbon","River Otter",
//               "Chimpanzee","Komodo Dragon","Anteater"];

zooAnimals = ["Monkey", "Giant Panda", "Elephant"] //To debug issue where space does not show in wordGuessArea.

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
// console.log(currentWord);
// console.log("Variable currentWord contains: " + currentWord);
console.log(wordSplit);
// console.log("There are a total of: " + wordSplit.length + " characters in the word: " + currentWord);
// console.log(censoredWord); // Should be blank since Main Game Code has yet to run.
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

    console.log(censoredWord);

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















    



  