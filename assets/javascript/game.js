// Variables and Arrays

var zooAnimalsIndex = getRandomInt(zooAnimals.length)
var currentWord = zooAnimals[zooAnimalsIndex];
var wordSplit = currentWord.split("");

zooAnimals = ["Monkey","Giant Panda","Elephant","Giraffe","Sloth","Lion","Penguin",
              "Tiger","Hippopotamus","Red Panda","Koala","Polar Bear","Lemurs","Rhinoceros",
              "Zebra","Cheetah","Flamingo","Meerkat","Orangutan","Capybara","Tamarin",
              "Snow Leopard","Sea Lion","Jaguar","Gibbon","North American River Otter",
              "Chimpanzee","Komodo Dragon","Anteater"];

              console.log("Total number of Animals in zooAnimals: " + zooAnimals.length);

// Functions

// Function Declaration to get a random number depending on inputs.
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
} // var randomNumber = getRandomInt(2);

// Console.log checks!
console.log("getRandomInt function chose this number: " + zooAnimalsIndex);
console.log("Number " + zooAnimalsIndex + " is " + zooAnimals[zooAnimalsIndex] + " in zooAnimals");
console.log("Variable currentWord contains: " + currentWord);
console.log(wordSplit);
console.log("There are a total of: " + wordSplit.length + " characters in the word: " + currentWord);

document.onkeyup = function (event) {
      
    var userChoice = event.key;

    console.log(userChoice);
}
  