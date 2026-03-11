alert("Welcome to the Adventure Realm! Let's create your hero!");

const characterName = prompt("What is your character's name?");

const heroAge = prompt("How old is your character?");

let newAge = parseInt(heroAge) + 20;

const pet = prompt(`What kind of pet does ${characterName} have? (dragon, 
wolf, robot, unicorn, phoenix, etc.)`, "dragon");

const superPower = prompt(`What superpower does ${characterName} have?`);

const likesFighting = confirm(`Does ${characterName} like 
fighting monsters? 
 Click OK for YES
 Click Cancel for NO`);

alert(`Gathering magic for ${characterName}... almost ready!`);

alert(`====================================\n
Name: ${characterName}\n
Pet: ${pet}\n
Superpower: ${superPower}\n
Fighting Status: ${likesFighting ? "Yes" : "No"}\n
Once upon a time there was a young, noble hero of ${heroAge} years known as ${characterName} who dispensed justice alongside a ${pet}. ${characterName} was able to subdue evildoers with ${superPower}. The future awaits this legend...`);


alert(`Lo, the forces of evil that ${characterName} faced were seemingly insurmountable, and the trials and tribulations took over 7300 moons to vanquish. By the time the forces of evil had been vanquished from the realm, the age of ${characterName} was ${newAge} years.`);


