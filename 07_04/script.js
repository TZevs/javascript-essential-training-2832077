/**
 * Challenge: Build and modify an array
 * - Build an array with 8 items
 * - Remove the last item
 * - Add the last item as the first item on the array 
 * - Sort the items by alphabetical order
 * - Use the find() method to find a specific item in the array
 * - Remove the item you found using the find method from the array.
 */


let subjects = ["English", "Maths", "Art", "Computing", "Science", "History", "P.E", "Spanish"]; 
console.log("Original List: ", subjects.join(", "));

console.log("Remove Last Item: ", subjects.pop());
console.log("New List: ", subjects.join(", "));

subjects.unshift(subjects.pop());
console.log("New List: ", subjects.join(", "));

subjects.sort();
console.log("Ordered List: ", subjects.join(", "));

console.log("Found:", subjects.find((item) => item == "Computing"));

const foundItem = subjects.find((item) => item == "Computing");
const foundIndex = subjects.indexOf(foundItem);
subjects.splice(foundIndex, 1);

console.log("Without Computing List: ", subjects.join(", "));
