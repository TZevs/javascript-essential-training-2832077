/**
 * Note: This file is intentionally empty.
 * You can use it to test your skills at traversing the DOM using JavaScript.
 */

const backpackOne = document.querySelector("article");
console.log("The First BackPack:", backpackOne);

const backpackTwo = document.querySelector("article:last-child");
console.log("The Second BackPack:", backpackTwo);

document.querySelectorAll(".backpack:last-child li span").forEach(item => item.style.color = "green");
document.getElementById("pack01").querySelectorAll("li span").forEach(item => item.style.backgroundColor = "lightblue");

