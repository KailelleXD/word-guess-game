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

------------------------------------------------------

What I need to do to finish!

1. Store and display incorrect guesses.
2. Display Number of guesses remaining and set it up to decrement on wrong letters.
3. Create Win state.
4. Create lose state.
5. secondary info panel effects.
6. reset and load next work.


Zoo Animals, 5 facts, 2 pictures (150 x 150)

Monkey
Monkey life spans range from 10 to 50 years, depending on the species.
Most monkeys live in the tropical rain forests.
A group of monkeys is called a troop.
Howler monkeys are the loudest monkeys, and their howl can be heard 2 to 3 miles away.
Patas monkeys are the fastest primates on land, and can run up to 31 miles per hour.

Giant Panda
Giant pandas live in the mountains of southwestern China, in damp, misty forests.
Giant Pandas can live up to 20 years in the wild, and up to 30 years in managed care.
Giant Pandas spend at least 12 hours every day eating bamboo.
Female pandas weigh 155 to 220 lbs, while males weigh 190 to 275 lbs.
Pandas poop up to 50 times a day in the wild.

Elephant
Elephants can live from 30 to over 50 years.
Female elephants are an average 8 ft. in height (at the shoulders), and males are an average 10.5 ft. 
Female elephants can weigh up to 8,000 lbs, and males can weigh up to 15,000 lbs.
The low, resounding calls elephants make can be heard by another elephant up to 5 miles away.
Unlike other mammals, elephants grow throughout their lifetime.

Giraffe
Life span is 15 to 20 years.
Females grow up to 14 ft. tall, males grow up to 18 ft. tall.
Females weigh up to 1,500 lbs, males weigh up to 3,000 lbs.
A giraffe's feet are the size of a dinner plate—12 inches across.
A giraffe’s eyes are the size of golf balls.

Sloth
They live in trees in the tropical and cloud forests of Central and South America.
Live an average of 15 years.
Can weigh 10 to 20 lbs.
With their low-energy diet of leaves and occasional fruit, sloths move slowly and sleep 15 hours a day to conserve energy.
Organs such as the heart, liver, and spleen are placed differently in sloths than in other mammals to accommodate their upside-down lifestyle.

Lion
Can live 15 years in the wild, and up to 30 years in zoos.
Females are 4.6 to 5.7 ft. long, males are 5.6 to 8.3 ft. long.
Females weigh 270 to 400 lbs, males weigh 330 to 570 lbs.
A lion’s roar can be heard up to 3 miles away.
A male lion can eat about a quarter of his body weight (as much as about 140 pounds) in a single meal.

Penguin
There are 17 species, and all are found exclusively in the Southern hemisphere.
Depending on the species, their height can range 16 in. to 4 ft. tall.
Gentoo Penguin is the fastest species, and can swim up to 22 miles per hour.
A penguin's striking coloring is a matter of camouflage; from above, its black back blends into the murky depths of the ocean. From below, its white belly is hidden against the bright surface.
Fossils place the earliest penguin relative at some 60 million years ago, meaning an ancestor of the birds we see today survived the mass extinction of the dinosaurs.

Tiger
They live an average 14 to 18 years.
Depending on gender and location, they can be 4.8 to to 9.5 ft. in length.
Can be 165 to 716 lbs.
Each tiger has its very own stripe pattern.
They can carry something twice their body weight 10 ft. up a tree.

Hippopotamus
They live an average of 36 years.
Females weigh around 3,000 lbs, but males can weigh as much as 9,920 lbs.
An adult hippo can hold its breath underwater for up to 30 minutes.
They can store two days' worth of grass in their stomachs and can go up to three weeks without eating.
A group of hippos is sometimes called a bloat, pod, or siege.

Red Panda
They can live 8 to 10 years in the wild, and up to 15 in zoos.
They can weigh 6 to 14 lbs, depending on gender.
The Chinese name for the red panda is "hun-ho," meaning "fire fox."
Almost half of the red panda's total body length is in its tail.
In China, red pandas and giant pandas share the same habitat: bamboo forests.

Koala
They usually live 10 to 15 years.
They are not bears, they are members of a group of pouched animals called marsupials.
Koalas keep their coat clean by using a grooming claw rather than licking the coat.
Koalas eat a little dirt now and then to help them digest their eucalyptus leaf meal.
To conserve energy, koalas sleep 18 to 22 hours a day.

Polar Bear
Females live an average 24.2 years, males only live an average of 20.7 years.
Females weigh 330 to 650 lbs, males weigh 700 to 1,200 lbs.
Built to stay warm in their cold habitat, polar bears sometimes overheat and have to cool off in the chilly water.
To clean their fur, polar bears roll in the snow.
A polar bear can swim at a speed of up to 6 miles per hour.

Lemurs
They live an average 16.7 years.
The blue-eyed black lemur is the only primate besides humans to have blue eyes.
The Madame Berthe’s mouse lemur is thought to be the smallest primate in the world, and can fit in a teacup.
Black-and-white ruffed lemur mothers make a nest for the birth and care of her babies, lining it with her own hair.
The name lemur is from the Latin lemurs, meaning spirits of the dead. This name was selected for the lemur’s silent movement.

Rhinoceros
They have a lifespan of 40 to 45 years.
Depending on species, they can way 1,765 to 5,000 lbs.
A black rhino can run as fast as 40 miles per hour.
White rhino males can be persistent, with courtship lasting 5 to 20 days.
Rhinos roll in mud (called wallowing), and the mud can act as bug repellent and sunscreen.

Zebra
Their lifespan is 25 years.
They weigh 550 to 990 lbs.
Each zebra has a unique stripe pattern—no two are alike.
A zebra's eyesight at night is thought to be about as good as that of an owl.
Zebras have a pad of fat under their mane that keeps it standing straight up.

Cheetah
They live an average of 12 years in the wild, and up to 17 years in zoos.
They weigh 84 to 143 lbs, males weighing more than females.
While running, a cheetah covers 20 to 22 feet in one stride, about the same distance as a racehorse.
They can run up to 70 miles per hour.
Cheetahs don’t need to drink water, as they get the moisture they need from the bodies of their prey.

Flamingo
Their lifespan is 20 to 30 years in the wild; up to 50 years in zoos.
Flamingos have good hearing but little or no sense of smell.
Once shed, flamingo feathers quickly lose their color.
In East Africa, more than one million lesser flamingos may gather together, forming the largest flock known among birds today.
The ancient Egyptians used the silhouette of the flamingo as the hieroglyphic for the color red, and it also represented the reincarnation of Ra, the Sun God.

Meerkat
They live an average of 8 years in the wild, and up to 13 years in zoos.
They grow to 9 to 11.5 inches, and weigh only 1.4 to 2.1 lbs.
They are able to kill and eat venomous snakes and scorpions without being hurt, as they have some immunity to the venom.
Able to survive without drinking water, meerkats get the moisture they need from eating roots and tubers as well as fruit such as tsama melons.
The skeletal structure and teeth of meerkats and other mongooses closely resemble those of the earliest carnivores.

Orangutan
They can live up to 59 years in zoos.
Females weigh an average of 81.5 lbs, males weigh an average of 191 lbs.
They are the largest fruit-eating animals on Earth.
They are the only great ape species with a native habitat outside of Africa.
Their arms stretch out longer than their bodies—over 7 feet from fingertip to fingertip.

Capybara
They can live up to 10 years in the wild, and up to 12 years in zoos.
They grow 3.2 to 4.2 ft. long, and weigh 60 to 174 lbs.
Seventy-five percent of a capybara’s diet is only three to six plant species.
Capybaras are so trainable that in Surinam a blind man once used a capybara as a guide animal.
In the 16th century, the Catholic Church classified the capybara, which can swim, as a fish so that the meat could be eaten on Fridays and during Lent.

Tamarin
Tamarins are small New World monkeys, which live in the forests of South America.
They are roughly the size of squirrels.
They usually give birth to twins, and it’s the father who carries the babies the most.
Lion tamarins get their name from the mane of fine hair around their face.
Pied tamarins are the most endangered Amazonian primates. 

Snow Leopard
They live up to 22 years in zoos.
Snow leopards are almost impossible to locate and study in the wild because they blend in with their surroundings so well.
They are sure-footed climbers, and have been seen at altitudes as high as 18,000 feet in summer.
They can jump and pounce on prey as far as six times their body length. 
It’s long, thick, and luxurious tail acts as a built-in comforter when the cat wraps it around its body for added warmth.

Sea Lion
They live 20 to 30 years.
Depending on species and gender, they can weigh from 110 to 2,200 lbs.
A group of sea lions in the water is called a raft.
Even though they have teeth, sea lions like to swallow their food whole if they can. Their sharp canine teeth are used mostly to protect themselves.
They don’t need to drink water—they get all the water they need from the food they eat.

Jaguar
They can live 12 to 15 years in the wild, and up to 20 in zoos.
Depending on gender and location, they can weigh from 70 to 249 lbs.
They are the largest cats in the Western Hemisphere and the third largest overall. Only lions and tigers are bigger.
They go "fishing" by waving its tail over the water to attract hungry fish.
The South American native word for jaguar, yaguara, means "animal that kills in a single bound."

Gibbon
They can live up to 25 years in the wild.
They are monogamous (a rare trait among primates) and live in family groups consisting of an adult pair and their young offspring.
They are the animals we think of when we picture primates swinging gracefully through the rain forest.
They avoid water because they can’t swim.
They are highly intelligent, and can even recognize themselves in a mirror!

North American River Otter
They have a median life expectancy of 11.7 years.
Otters are the only serious swimmers in the weasel family.
They can close off their ears and nose as they dive and swim underwater.
They have been known to share dens with beavers—but the beavers do all the building.
They can stay submerged for up to eight minutes.

Chimpanzee
Females live an average of 38.7 years, males live around 31.7 years.
Chimpanzees and humans share 98 percent of their genes, according to researchers.
They don’t like to be in water and usually can’t swim.
Unlike most other animals, chimpanzees can recognize themselves in a mirror.
When they are happy, they make a grunting sound. A toothy "grin" actually indicates fear or anxiety.

Komodo Dragon
They live about 30 years.
Females grow about 6 ft. long, males grow about 10 ft. long, and they can weigh up to 176 lbs.
They have about 60 short, sharp, teeth. They look like shark teeth, and have been compared to those of an extinct saber-tooth cat.
In the wild, there are four times as many male Komodo dragons as there are females.
They eat extremely fast. They have been seen consuming 5.5 pounds of meat in one minute.

Anteater
They can live 15 years in the wild, and up to 25 years in zoos.
They weigh 39 to 85 lbs.
Their tongues start at the breastbone and can extend up to 2 feet long.
They swallow their food whole, and have no teeth.
All species have claws so long and sharp that they have to walk on their knuckles or wrists to avoid stabbing themselves.



















------------------------------------------------------

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

MONKEY
GIANT PANDA
ELEPHANT
GIRAFFE
SLOTH
LION
PENGUIN
TIGER
HIPPOPOTAMUS
RED PANDA
KOALA
POLAR BEAR
LEMURS
RHINOCEROS
ZEBRA
CHEETAH
FLAMINGO
MEERKAT
ORANGUTAN
CAPYBARA
TAMARIN
SNOW LEOPARD
SEA LION
JAGUAR
GIBBON
RIVER OTTER
CHIMPANZEE
KOMODO DRAGON
ANTEATER

