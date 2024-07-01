/**
 * Practice: Making methods
 *
 * - Create a method for each object property.
 * - The method receives a value to match the property to be changed.
 * - Create a simple function to replace the current property value with the received value.
 * - Test the method by sending new values and checking the properties in the console.
 */

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
  updateBag: function (newName, newVol, newColor, newNum) {
    this.name = newName;
    this.volume = newVol;
    this.color = newColor;
    this.pocketNum = newNum;
  },
};

console.log("Bag Before:", backpack);
backpack.updateBag("Handbag", 10, "Cream", 2);
console.log("Bag After:", backpack);
