World Guess Game Theme: ???

HW requirements:

- Event listener onKeyUp

Page must display:
    "Press any key to get started!"
    Wins: (# of times user guessed the correct word)
    Format for 'hidden' word to guess: '_ _ _ _ _  _ _ _ _'
    Reveal the correct letters as the player guesses them.
    Number guesses remaining.
    Letters already guessed. (Displayed like: 'L Z Y H')
    After a win/lose the game automatically restarts with a new word.

Bonus:
    When a word is guessed correctly, play a tune.
    Use CSS to make the game fit your theme.

-----

3. **HARD MODE:** Organize your game code as an object, except for the key events to get the letter guessed. This will be a challenge if you haven't coded with JavaScript before, but we encourage anyone already familiar with the language to try this out.
4. Save your whole game and its properties in an object.
5. Save any of your game's functions as methods, and call them underneath your object declaration using event listeners.
6. Don't forget to place your global variables and functions above your object.
   * Remember: global variables, then objects, then calls.
7. Definitely talk with a TA or your instructor if you get tripped up during this challenge.

-----

Smallest components:

Player presses any key then,
Choose a random index from an array to select the word to be guessed.
take that index and separate it into it's indiviual characters in a new array.
Read the number of characters in the string and display the appropriate amount of underscroll bars.
calc the total number of available guesses based on an equation (3 * the total number of characters in the string) <-- start with this and adjust for difficulty.
prompt the user to guess a letter.
user presses a key (makes a guess).
key information is stored into a variable.
that variable is referenced against the answer.
Use a SWITCH STATEMENT to log if the player made correct guess.
If the guess is correct, change the display to reflect the correct choice.
else log the wrong letter guess in an array that is then displayed on the screen.
for each guess decrement the total number of available guesses.
If the number of guesses available reaches 0
then player loses the game.
game increments lossCounter variable and displays the change.
if the player guesses all characters in the chosen string
then player wins the game
game increments the winCounter variable and displays the change.
The game immediately loops and chooses a new random word from the random array.


Zoo Animals:
Monkey
Giant Panda
Elephant
Giraffe
Sloth
Lion
Penguin
Tiger
Hippopotamus
Red Panda
Koala
Polar Bear
Lemurs
Rhinoceros
Zebra
Cheeta
Flamingo
Meerkat
Orangutan
Capybara
Tamarin
Snow Leopard
Sea Lion
Jaguar
Gibbon
North American River Otter
Chimpanzee
Komodo Dragon
Anteater

