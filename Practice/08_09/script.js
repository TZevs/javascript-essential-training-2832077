/**
 * Practice: Pass values between functions
 *
 * Create two functions:
 * - Main function
 *  - Creates new <article> element
 *  - Populates <article> with content (see const content below)
 *  - Returns <article> element to where function is called
 * - Helper image function
 *  - Creates new <figure> element
 *  - Adds <img> markup pointing to frogpack.image
 *  - Adds <figcaption> element with image description
 *  - Returns <figure> element to where function is called
 */

const frogpack = {
  name: "Frog Backpack",
  volume: 8,
  color: "green",
  pocketNum: 3,
  strapLength: {
    left: 10,
    right: 10,
  },
  lidOpen: false,
  image: "../../assets/images/frog.svg",
  description: 
    "A green kids backpack designed to make the lid look like the face of a frog sticking out its tongue.",
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
};

// Baseline HTML output
const content = `
    <h1 class="backpack__name">${frogpack.name}</h1>
    <ul class="backpack__features">
      <li class="packprop backpack__volume">Volume:<span> ${
        frogpack.volume
      }l</span></li>
      <li class="packprop backpack__color">Color:<span> ${
        frogpack.color
      }</span></li>
      <li class="packprop backpack__pockets">Number of pockets:<span> ${
        frogpack.pocketNum
      }</span></li>
      <li class="packprop backpack__strap">Left strap length:<span> ${
        frogpack.strapLength.left
      } inches</span></li>
      <li class="packprop backpack__strap">Right strap length:<span> ${
        frogpack.strapLength.right
      } inches</span></li>
      <li class="feature backpack__lid">Lid status:<span> ${
        frogpack.lidOpen ? "open" : "closed"
      }</span></li>
    </ul>  
`;

const addFigure = (dataObj) => { 
  let newFigure = document.createElement("figure"); // Creates a figure element.
  let newImage = document.createElement("img"); // Creates a img element. 
  newImage.setAttribute("src", dataObj.image);  // Adds the src attribute, sets the value to the image link in the object.
  newImage.setAttribute("alt", "New Image");  // Adds alt attribute, sets value to "new image".
  let newDesc = document.createElement("figcaption"); // Creates a figcaption element.
  newDesc.innerHTML = dataObj.description;  // Puts the description from the object into the HTML of the figcaption. 
  newFigure.append(newImage, newDesc); // Adds the image and descitption elements into the figure, one after the other. 
  return newFigure; // Return the figure with the image and description inside it. 
}

const createArticle = (backpack) => { // Parameter wants the object with data. 
  let newArticle = document.createElement("article"); // Create an article element.
  newArticle.innerHTML = content; // Adds the template literal to the article element HTML.
  newArticle.prepend(addFigure(backpack));  // Adds the figure created in the other function before the article HTML. 
  return newArticle; // Returns the article with the figure.
}

document.querySelector("main").append(createArticle(frogpack));
// Finds the main element, adds the article to the main element with the object created at the top.