
zooAnimals = ["Monkey","Giant Panda","Elephant","Giraffe","Sloth","Lion","Penguin",
              "Tiger","Hippopotamus","Red Panda","Koala","Polar Bear","Lemurs","Rhinoceros",
              "Zebra","Cheetah","Flamingo","Meerkat","Orangutan","Capybara","Tamarin",
              "Snow Leopard","Sea Lion","Jaguar","Gibbon","River Otter",
              "Chimpanzee","Komodo Dragon","Anteater"];

// zooAnimals = ["This Space","More Spaces","Test This Space"] //To debug issue where space does not show in wordGuessArea.

              console.log("Total number of Animals in zooAnimals: " + zooAnimals.length);

// Function Declaration to get a random number depending on inputs.
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
} // var randomNumber = getRandomInt(max);

var zooAnimalsIndex = getRandomInt(zooAnimals.length)
var currentWord = zooAnimals[zooAnimalsIndex];
var wordSplit = currentWord.split("");
var censoredWord = [];

// I need to take the array wordSplit and for each character replace the text in the wordGuessArea with 'underscroll bars' for each character and spaces where approrpriate.

// probably needs to be in a for loop, with each iteration appending the changed character.
// IF-ELSE statement, IF " " THEN place a space, ELSE place a "_"

for(var i = 0; i < wordSplit.length; i++) {
    if (wordSplit[i] == " ") {
        censoredWord.push(" "); // Can't seem to get this to work! Temporary solution in the for loop below!
    } else {
        censoredWord.push("__ ");
    }
}

// Now I need to replace text content of the <h1> tag with the id of "wordGuessArea" with the array censoredWord.

var targetWordGuessArea = document.getElementById("wordGuessArea");
targetWordGuessArea.textContent = "";


for(var j = 0; j < censoredWord.length; j++) {
    if (censoredWord[j] == " ") {
        var newHeading = document.createElement("br");
        wordGuessArea.appendChild(newHeading);
    } else {
        var newHeading = document.createElement("span");
        newHeading.textContent = censoredWord[j];
        wordGuessArea.appendChild(newHeading);
    }
}

// Need to work on replacing information in spans, adding classes and ids to spans.









// Console.log checks!
console.log("getRandomInt function chose this number: " + zooAnimalsIndex);
console.log("Number " + zooAnimalsIndex + " is " + zooAnimals[zooAnimalsIndex] + " in zooAnimals");
console.log("Variable currentWord contains: " + currentWord);
console.log(wordSplit);
console.log("There are a total of: " + wordSplit.length + " characters in the word: " + currentWord);
console.log(censoredWord);


document.onkeyup = function (event) {
      
    var userChoice = event.key;

    console.log(userChoice);
}


  