/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

import Bra from "./clothing.js";

const NewBra = new Bra (
    "bra",
    "green",
    "sport", 
    "32 D",
    true,
    "GymShark",
    "Criss-crossed",
);

console.log("Before Bra:", NewBra);
NewBra.addItem("bra", "purple", "bralette", "36F", "M&S", false, "Halter");
console.log("After Bra:", NewBra);