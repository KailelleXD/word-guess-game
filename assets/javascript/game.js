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

function winLoseCheck(animal) {
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
        playAudio();
        targetInfoPanel.textContent = "You Won! (Press Any Key to Continue)";
        winCounter++;
        targetWins.textContent = winCounter;
        winLoseStatus = true;
        gameStatus = false;
        secondaryInfo(arrUp);

        var animal = str2;

        return animal;

    } else if (str1 != str2 && numOfGuess == 0) {
        // console.log("The strings DON'T match!(LOSS)");
        targetInfoPanel.textContent = "You Lost! The animal was a " + str2 + " (Press Any Key to Continue)";
        lossCounter++;
        targetLosses.textContent = lossCounter;
        winLoseStatus = true;
        gameStatus = false;
        secondaryInfo(arrUp);
    }
}

function gameReset() {
    // console.log("The game is being reset!")
    // What do I need to do in this function?

    wordGuessClear();
    infoPanelClear();
    lettersGuessedClear();
    numOfGuess = 10;

    var roundTotal = winCounter + lossCounter + 1;

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
    console.log("The animal is a " + arrUp.join(""));
    
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

function secondaryInfo(animalCaps) {
    // When the winLoseStatus == true. we create a switch statement with the var zooAnimalsIndex. Each case will manip the Secondary info panel to provide info on each animal.
    // console.log("The function secondaryInfo() has been called");
    // console.log("censoredWord: " + censoredWord);
    targetAnimalName.textContent = animalCaps.join("");


    if(winLoseStatus == true) {
        switch(animalCaps.join("")) {
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
                document.getElementById("aniPic1").src="assets/images/elephant1.jpg";
                document.getElementById("aniPic2").src="assets/images/elephant2.jpg";
                targetAniInfo1.textContent = "They can live from 30 to over 50 years.";
                targetAniInfo2.textContent = "Female elephants are an average 8 ft. in height (at the shoulders), and males are an average 10.5 ft. ";
                targetAniInfo3.textContent = "Female elephants can weigh up to 8,000 lbs, and males can weigh up to 15,000 lbs.";
                targetAniInfo4.textContent = "The low, resounding calls elephants make can be heard by another elephant up to 5 miles away.";
                targetAniInfo5.textContent = "Unlike other mammals, elephants grow throughout their lifetime.";
                break;

            case "GIRAFFE":
                document.getElementById("aniPic1").src="assets/images/giraffe1.jpg";
                document.getElementById("aniPic2").src="assets/images/giraffe2.jpg";
                targetAniInfo1.textContent = "Life span is 15 to 20 years.";
                targetAniInfo2.textContent = "Females grow up to 14 ft. tall, males grow up to 18 ft. tall.";
                targetAniInfo3.textContent = "Females weigh up to 1,500 lbs, males weigh up to 3,000 lbs.";
                targetAniInfo4.textContent = "A giraffe's feet are the size of a dinner plate—12 inches across.";
                targetAniInfo5.textContent = "A giraffe’s eyes are the size of golf balls.";
                break;

            case "SLOTH":
                document.getElementById("aniPic1").src="assets/images/sloth1.jpg";
                document.getElementById("aniPic2").src="assets/images/sloth2.png";
                targetAniInfo1.textContent = "They live in trees in the tropical and cloud forests of Central and South America.";
                targetAniInfo2.textContent = "Live an average of 15 years.";
                targetAniInfo3.textContent = "Can weigh 10 to 20 lbs.";
                targetAniInfo4.textContent = "With their low-energy diet of leaves and occasional fruit, sloths move slowly and sleep 15 hours a day to conserve energy.";
                targetAniInfo5.textContent = "Organs such as the heart, liver, and spleen are placed differently in sloths than in other mammals to accommodate their upside-down lifestyle.";
                break;

            case "LION":
                document.getElementById("aniPic1").src="assets/images/lion1.jpg";
                document.getElementById("aniPic2").src="assets/images/lion2.jpg";
                targetAniInfo1.textContent = "Can live 15 years in the wild, and up to 30 years in zoos.";
                targetAniInfo2.textContent = "Females are 4.6 to 5.7 ft. long, males are 5.6 to 8.3 ft. long.";
                targetAniInfo3.textContent = "Females weigh 270 to 400 lbs, males weigh 330 to 570 lbs.";
                targetAniInfo4.textContent = "A lion’s roar can be heard up to 3 miles away.";
                targetAniInfo5.textContent = "A male lion can eat about a quarter of his body weight (as much as about 140 pounds) in a single meal.";
                break;

            case "PENGUIN":
                document.getElementById("aniPic1").src="assets/images/penguin1.jpg";
                document.getElementById("aniPic2").src="assets/images/penguin2.jpg";
                targetAniInfo1.textContent = "There are 17 species, and all are found exclusively in the Southern hemisphere.";
                targetAniInfo2.textContent = "Depending on the species, their height can range 16 in. to 4 ft. tall.";
                targetAniInfo3.textContent = "Gentoo Penguin is the fastest species, and can swim up to 22 miles per hour.";
                targetAniInfo4.textContent = "A penguin's striking coloring is a matter of camouflage; from above, its black back blends into the murky depths of the ocean. From below, its white belly is hidden against the bright surface.";
                targetAniInfo5.textContent = "Fossils place the earliest penguin relative at some 60 million years ago, meaning an ancestor of the birds we see today survived the mass extinction of the dinosaurs.";
                break;

            case "TIGER":
                document.getElementById("aniPic1").src="assets/images/tiger1.jpg";
                document.getElementById("aniPic2").src="assets/images/tiger2.jpg";
                targetAniInfo1.textContent = "They live an average 14 to 18 years.";
                targetAniInfo2.textContent = "Depending on gender and location, they can be 4.8 to to 9.5 ft. in length.";
                targetAniInfo3.textContent = "Can be 165 to 716 lbs.";
                targetAniInfo4.textContent = "Each tiger has its very own stripe pattern.";
                targetAniInfo5.textContent = "They can carry something twice their body weight 10 ft. up a tree.";
                break;

            case "HIPPOPOTAMUS":
                document.getElementById("aniPic1").src="assets/images/hippo1.jpg";
                document.getElementById("aniPic2").src="assets/images/hippo2.jpg";
                targetAniInfo1.textContent = "They live an average of 36 years.";
                targetAniInfo2.textContent = "Females weigh around 3,000 lbs, but males can weigh as much as 9,920 lbs.";
                targetAniInfo3.textContent = "An adult hippo can hold its breath underwater for up to 30 minutes.";
                targetAniInfo4.textContent = "They can store two days' worth of grass in their stomachs and can go up to three weeks without eating.";
                targetAniInfo5.textContent = "A group of hippos is sometimes called a bloat, pod, or siege.";
                break;

            case "RED - PANDA":
                document.getElementById("aniPic1").src="assets/images/redpanda1.jpg";
                document.getElementById("aniPic2").src="assets/images/redpanda2.jpg";
                targetAniInfo1.textContent = "They can live 8 to 10 years in the wild, and up to 15 in zoos.";
                targetAniInfo2.textContent = "They can weigh 6 to 14 lbs, depending on gender.";
                targetAniInfo3.textContent = "The Chinese name for the red panda is 'hun-ho,' meaning 'fire fox.'";
                targetAniInfo4.textContent = "Almost half of the red panda's total body length is in its tail.";
                targetAniInfo5.textContent = "In China, red pandas and giant pandas share the same habitat: bamboo forests.";
                break;

            case "KOALA":
                document.getElementById("aniPic1").src="assets/images/koala1.jpg";
                document.getElementById("aniPic2").src="assets/images/koala2.jpg";
                targetAniInfo1.textContent = "They usually live 10 to 15 years.";
                targetAniInfo2.textContent = "They are not bears, they are members of a group of pouched animals called marsupials.";
                targetAniInfo3.textContent = "Koalas keep their coat clean by using a grooming claw rather than licking the coat.";
                targetAniInfo4.textContent = "Koalas eat a little dirt now and then to help them digest their eucalyptus leaf meal.";
                targetAniInfo5.textContent = "To conserve energy, koalas sleep 18 to 22 hours a day.";
                break;

            case "POLAR - BEAR":
                document.getElementById("aniPic1").src="assets/images/polarbear1.jpg";
                document.getElementById("aniPic2").src="assets/images/polarbear2.png";
                targetAniInfo1.textContent = "Females live an average 24.2 years, males only live an average of 20.7 years.";
                targetAniInfo2.textContent = "Females weigh 330 to 650 lbs, males weigh 700 to 1,200 lbs.";
                targetAniInfo3.textContent = "Built to stay warm in their cold habitat, polar bears sometimes overheat and have to cool off in the chilly water.";
                targetAniInfo4.textContent = "To clean their fur, polar bears roll in the snow.";
                targetAniInfo5.textContent = "A polar bear can swim at a speed of up to 6 miles per hour.";
                break;

            case "LEMUR":
                document.getElementById("aniPic1").src="assets/images/lemur1.jpg";
                document.getElementById("aniPic2").src="assets/images/lemur2.jpg";
                targetAniInfo1.textContent = "They live an average 16.7 years.";
                targetAniInfo2.textContent = "The blue-eyed black lemur is the only primate besides humans to have blue eyes.";
                targetAniInfo3.textContent = "The Madame Berthe’s mouse lemur is thought to be the smallest primate in the world, and can fit in a teacup.";
                targetAniInfo4.textContent = "Black-and-white ruffed lemur mothers make a nest for the birth and care of her babies, lining it with her own hair.";
                targetAniInfo5.textContent = "The name lemur is from the Latin lemurs, meaning spirits of the dead. This name was selected for the lemur’s silent movement.";
                break;

            case "RHINOCEROS":
                document.getElementById("aniPic1").src="assets/images/rhino1.jpg";
                document.getElementById("aniPic2").src="assets/images/rhino2.jpg";
                targetAniInfo1.textContent = "They have a lifespan of 40 to 45 years.";
                targetAniInfo2.textContent = "Depending on species, they can way 1,765 to 5,000 lbs.";
                targetAniInfo3.textContent = "A black rhino can run as fast as 40 miles per hour.";
                targetAniInfo4.textContent = "White rhino males can be persistent, with courtship lasting 5 to 20 days.";
                targetAniInfo5.textContent = "Rhinos roll in mud (called wallowing), and the mud can act as bug repellent and sunscreen.";
                break;

            case "ZEBRA":
                document.getElementById("aniPic1").src="assets/images/zebra1.jpg";
                document.getElementById("aniPic2").src="assets/images/zebra2.png";
                targetAniInfo1.textContent = "Their lifespan is 25 years.";
                targetAniInfo2.textContent = "They weigh 550 to 990 lbs.";
                targetAniInfo3.textContent = "Each zebra has a unique stripe pattern—no two are alike.";
                targetAniInfo4.textContent = "A zebra's eyesight at night is thought to be about as good as that of an owl.";
                targetAniInfo5.textContent = "Zebras have a pad of fat under their mane that keeps it standing straight up.";
                break;

            case "CHEETAH":
                document.getElementById("aniPic1").src="assets/images/cheetah1.jpg";
                document.getElementById("aniPic2").src="assets/images/cheetah2.jpg";
                targetAniInfo1.textContent = "They live an average of 12 years in the wild, and up to 17 years in zoos.";
                targetAniInfo2.textContent = "They weigh 84 to 143 lbs, males weighing more than females.";
                targetAniInfo3.textContent = "While running, a cheetah covers 20 to 22 feet in one stride, about the same distance as a racehorse.";
                targetAniInfo4.textContent = "They can run up to 70 miles per hour.";
                targetAniInfo5.textContent = "Cheetahs don’t need to drink water, as they get the moisture they need from the bodies of their prey.";
                break;

            case "FLAMINGO":
                document.getElementById("aniPic1").src="assets/images/flamingo1.jpg";
                document.getElementById("aniPic2").src="assets/images/flamingo2.jpg";
                targetAniInfo1.textContent = "Their lifespan is 20 to 30 years in the wild; up to 50 years in zoos.";
                targetAniInfo2.textContent = "Flamingos have good hearing but little or no sense of smell.";
                targetAniInfo3.textContent = "Once shed, flamingo feathers quickly lose their color.";
                targetAniInfo4.textContent = "In East Africa, more than one million lesser flamingos may gather together, forming the largest flock known among birds today.";
                targetAniInfo5.textContent = "The ancient Egyptians used the silhouette of the flamingo as the hieroglyphic for the color red, and it also represented the reincarnation of Ra, the Sun God.";
                break;

            case "MEERKAT":
                document.getElementById("aniPic1").src="assets/images/meerkat1.jpg";
                document.getElementById("aniPic2").src="assets/images/meerkat2.jpg";
                targetAniInfo1.textContent = "They live an average of 8 years in the wild, and up to 13 years in zoos.";
                targetAniInfo2.textContent = "They grow to 9 to 11.5 inches, and weigh only 1.4 to 2.1 lbs.";
                targetAniInfo3.textContent = "They are able to kill and eat venomous snakes and scorpions without being hurt, as they have some immunity to the venom.";
                targetAniInfo4.textContent = "Able to survive without drinking water, meerkats get the moisture they need from eating roots and tubers as well as fruit such as tsama melons.";
                targetAniInfo5.textContent = "The skeletal structure and teeth of meerkats and other mongooses closely resemble those of the earliest carnivores.";
                break;

            case "ORANGUTAN":
                document.getElementById("aniPic1").src="assets/images/orangutan1.jpg";
                document.getElementById("aniPic2").src="assets/images/orangutan2.png";
                targetAniInfo1.textContent = "They can live up to 59 years in zoos.";
                targetAniInfo2.textContent = "Females weigh an average of 81.5 lbs, males weigh an average of 191 lbs.";
                targetAniInfo3.textContent = "They are the largest fruit-eating animals on Earth.";
                targetAniInfo4.textContent = "They are the only great ape species with a native habitat outside of Africa.";
                targetAniInfo5.textContent = "Their arms stretch out longer than their bodies—over 7 feet from fingertip to fingertip.";
                break;

            case "CAPYBARA":
                document.getElementById("aniPic1").src="assets/images/capybara1.jpg";
                document.getElementById("aniPic2").src="assets/images/capybara2.jpg";
                targetAniInfo1.textContent = "They can live up to 10 years in the wild, and up to 12 years in zoos.";
                targetAniInfo2.textContent = "They grow 3.2 to 4.2 ft. long, and weigh 60 to 174 lbs.";
                targetAniInfo3.textContent = "Seventy-five percent of a capybara’s diet is only three to six plant species.";
                targetAniInfo4.textContent = "Capybaras are so trainable that in Surinam a blind man once used a capybara as a guide animal.";
                targetAniInfo5.textContent = "In the 16th century, the Catholic Church classified the capybara, which can swim, as a fish so that the meat could be eaten on Fridays and during Lent.";
                break;

            case "TAMARIN":
                document.getElementById("aniPic1").src="assets/images/tamarin1.jpg";
                document.getElementById("aniPic2").src="assets/images/tamarin2.jpg";
                targetAniInfo1.textContent = "Tamarins are small New World monkeys, which live in the forests of South America.";
                targetAniInfo2.textContent = "They are roughly the size of squirrels.";
                targetAniInfo3.textContent = "They usually give birth to twins, and it’s the father who carries the babies the most.";
                targetAniInfo4.textContent = "Lion tamarins get their name from the mane of fine hair around their face.";
                targetAniInfo5.textContent = "Pied tamarins are the most endangered Amazonian primates.";
                break;

            case "SNOW - LEOPARD":
                document.getElementById("aniPic1").src="assets/images/snowleopard1.jpg";
                document.getElementById("aniPic2").src="assets/images/snowleopard2.jpg";
                targetAniInfo1.textContent = "They live up to 22 years in zoos.";
                targetAniInfo2.textContent = "Snow leopards are almost impossible to locate and study in the wild because they blend in with their surroundings so well.";
                targetAniInfo3.textContent = "They are sure-footed climbers, and have been seen at altitudes as high as 18,000 feet in summer.";
                targetAniInfo4.textContent = "They can jump and pounce on prey as far as six times their body length.";
                targetAniInfo5.textContent = "It’s long, thick, and luxurious tail acts as a built-in comforter when the cat wraps it around its body for added warmth.";
                break;

            case "SEA - LION":
                document.getElementById("aniPic1").src="assets/images/sealion1.jpg";
                document.getElementById("aniPic2").src="assets/images/sealion2.jpg";
                targetAniInfo1.textContent = "They live 20 to 30 years.";
                targetAniInfo2.textContent = "Depending on species and gender, they can weigh from 110 to 2,200 lbs.";
                targetAniInfo3.textContent = "A group of sea lions in the water is called a raft.";
                targetAniInfo4.textContent = "Even though they have teeth, sea lions like to swallow their food whole if they can. Their sharp canine teeth are used mostly to protect themselves.";
                targetAniInfo5.textContent = "They don’t need to drink water—they get all the water they need from the food they eat.";
                break;

            case "JAGUAR":
                document.getElementById("aniPic1").src="assets/images/jaguar1.jpg";
                document.getElementById("aniPic2").src="assets/images/jaguar2.jpg";
                targetAniInfo1.textContent = "They can live 12 to 15 years in the wild, and up to 20 in zoos.";
                targetAniInfo2.textContent = "Depending on gender and location, they can weigh from 70 to 249 lbs.";
                targetAniInfo3.textContent = "They are the largest cats in the Western Hemisphere and the third largest overall. Only lions and tigers are bigger.";
                targetAniInfo4.textContent = "They go 'fishing' by waving its tail over the water to attract hungry fish.";
                targetAniInfo5.textContent = "The South American native word for jaguar, yaguara, means 'animal that kills in a single bound.'";
                break;

            case "GIBBON":
                document.getElementById("aniPic1").src="assets/images/gibbon1.jpg";
                document.getElementById("aniPic2").src="assets/images/gibbon2.jpg";
                targetAniInfo1.textContent = "They can live up to 25 years in the wild.";
                targetAniInfo2.textContent = "They are monogamous (a rare trait among primates) and live in family groups consisting of an adult pair and their young offspring.";
                targetAniInfo3.textContent = "They are the animals we think of when we picture primates swinging gracefully through the rain forest.";
                targetAniInfo4.textContent = "They avoid water because they can’t swim.";
                targetAniInfo5.textContent = "They are highly intelligent, and can even recognize themselves in a mirror!";
                break;

            case "RIVER - OTTER":
                document.getElementById("aniPic1").src="assets/images/riverotter1.jpg";
                document.getElementById("aniPic2").src="assets/images/riverotter2.jpg";
                targetAniInfo1.textContent = "They have a median life expectancy of 11.7 years.";
                targetAniInfo2.textContent = "Otters are the only serious swimmers in the weasel family.";
                targetAniInfo3.textContent = "They can close off their ears and nose as they dive and swim underwater.";
                targetAniInfo4.textContent = "They have been known to share dens with beavers—but the beavers do all the building.";
                targetAniInfo5.textContent = "They can stay submerged for up to eight minutes.";
                break;

            case "CHIMPANZEE":
                document.getElementById("aniPic1").src="assets/images/chimpanzee1.jpg";
                document.getElementById("aniPic2").src="assets/images/chimpanzee2.jpg";
                targetAniInfo1.textContent = "Females live an average of 38.7 years, males live around 31.7 years.";
                targetAniInfo2.textContent = "Chimpanzees and humans share 98 percent of their genes, according to researchers.";
                targetAniInfo3.textContent = "They don’t like to be in water and usually can’t swim.";
                targetAniInfo4.textContent = "Unlike most other animals, chimpanzees can recognize themselves in a mirror.";
                targetAniInfo5.textContent = "When they are happy, they make a grunting sound. A toothy 'grin' actually indicates fear or anxiety.";
                break;

            case "KOMODO - DRAGON":
                document.getElementById("aniPic1").src="assets/images/komododragon1.jpg";
                document.getElementById("aniPic2").src="assets/images/komododragon2.jpg";
                targetAniInfo1.textContent = "They live about 30 years.";
                targetAniInfo2.textContent = "Females grow about 6 ft. long, males grow about 10 ft. long, and they can weigh up to 176 lbs.";
                targetAniInfo3.textContent = "They have about 60 short, sharp, teeth. They look like shark teeth, and have been compared to those of an extinct saber-tooth cat.";
                targetAniInfo4.textContent = "In the wild, there are four times as many male Komodo dragons as there are females.";
                targetAniInfo5.textContent = "They eat extremely fast. They have been seen consuming 5.5 pounds of meat in one minute.";
                break;

            case "ANTEATER":
                document.getElementById("aniPic1").src="assets/images/anteater1.jpg";
                document.getElementById("aniPic2").src="assets/images/anteater2.jpg";
                targetAniInfo1.textContent = "They can live 15 years in the wild, and up to 25 years in zoos.";
                targetAniInfo2.textContent = "They weigh 39 to 85 lbs.";
                targetAniInfo3.textContent = "Their tongues start at the breastbone and can extend up to 2 feet long.";
                targetAniInfo4.textContent = "They swallow their food whole, and have no teeth.";
                targetAniInfo5.textContent = "All species have claws so long and sharp that they have to walk on their knuckles or wrists to avoid stabbing themselves.";
                break;

        }
    }
    
    
}

var sfx = document.getElementById("winsfx"); 

function playAudio() { 
    sfx.play(); 
} 

//-----------------


// Arrays with initialized content.
//---------------------------------

zooAnimals = ["Monkey","Giant Panda","Elephant","Giraffe","Sloth","Lion","Penguin",
              "Tiger","Hippopotamus","Red Panda","Koala","Polar Bear","Lemur","Rhinoceros",
              "Zebra","Cheetah","Flamingo","Meerkat","Orangutan","Capybara","Tamarin",
              "Snow Leopard","Sea Lion","Jaguar","Gibbon","River Otter",
              "Chimpanzee","Komodo Dragon","Anteater"];

// zooAnimals = ["Capybara"] //To debug issues relating to the zooAnimals Array.

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
var str2 = "";

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
// console.log(wordSplit);
// console.log("There are a total of: " + wordSplit.length + " characters in the word: " + currentWord);
// console.log(censoredWord); // Should be blank since Main Game Code has yet to run.
// console.log(arrLow);
// console.log(arrUp);
// console.log(alphaAllCase);
console.log("The animal is a " + wordSplit.join(""));


// Call-back functions to run at initialization.
arrLower(wordSplit, arrLow);
arrUpper(wordSplit, arrUp);

//-----------------------


// Start of Main Game Code!!!
//---------------------------

document.onkeyup = function (event) {
      
    var userChoice = event.key;

    // console.log(censoredWord);

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















    



  