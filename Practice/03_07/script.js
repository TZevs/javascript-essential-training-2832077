/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const backpack = {
    name: "Uni Backpack",
    colour: "Navy",
    numOfPockets: 3,
    wallet: {
        numOfCards: 7,
        notesAmount: 5,
        coinsAmount: 1.16,
    },
    inUse: false,
};  

console.log("My Uni BackPack:", backpack);

