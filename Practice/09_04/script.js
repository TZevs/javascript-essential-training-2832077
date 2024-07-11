/**
 * Practice: Play with event listeners
 * - Use an event listener and CSS either inline or through an added class to draw a highlight around the entire grid when you hover over it with your mouse.
 * - Add an event listener to each grid cell to highlight that cell when you hover your mouse over it.
 * - Add an event listener to each grid cell to change its background color when it is clicked.
 * - Add an event listener to a specific key on the keyboard to change the background color of the whole page - from dark to light and back again.
 */

const gridContainer = document.querySelector(".container");
const gridOutline = document.querySelector(".grid");
const cells = document.querySelectorAll(".cell");

const randColor = () => {
    let hexColor = Math.floor(Math.random() * 16777215).toString(16);
    return hexColor;
};

gridContainer.addEventListener("mouseenter", () => {
    gridContainer.style.border = "5px solid black";
});

gridContainer.addEventListener("mouseleave", () => {
    gridContainer.style.border = "";
    cells.forEach((cell) => {
        cell.style.backgroundColor = "";
    })
});

cells.forEach((cell) => {
    cell.addEventListener("click", () => {
        if (cell.style.backgroundColor == "") {
            cell.style.backgroundColor = `#${randColor()}`;
        } else {
            cell.style.backgroundColor = "";
        }
    })
})

const body = document.body;
const firstColumn = document.querySelectorAll(".cell01, .cell08, .cell15, .cell22");
const secondColumn = document.querySelectorAll(".cell02, .cell09, .cell16, .cell23");
const thirdColumn = document.querySelectorAll(".cell03, .cell10, .cell17, .cell24");
const fourthColumn = document.querySelectorAll(".cell04, .cell11, .cell18, .cell25");
const fifthColumn = document.querySelectorAll(".cell05, .cell12, .cell19, .cell26");
const sixthColumn = document.querySelectorAll(".cell06, .cell13, .cell20, .cell27");
const seventhColumn = document.querySelectorAll(".cell07, .cell14, .cell21, .cell28");
const topHalf = document.querySelectorAll(".cell01, .cell02, .cell03, .cell04, .cell05, .cell06, .cell07, .cell08, .cell09, .cell10, .cell11, .cell12, .cell13, .cell14");
const bottomHalf = document.querySelectorAll(".cell15, .cell16, .cell17, .cell18, .cell19, .cell20, .cell21, .cell22, .cell23, .cell24, .cell25, .cell26, .cell27, .cell28");

window.addEventListener("keydown", (event) => {
    switch (event.key) {
        case "1":
            firstColumn.forEach((columnCell) => {
                columnCell.style.backgroundColor = `#${randColor()}`;
            })
            break;
        case "2":
            secondColumn.forEach((columnCell) => {
                columnCell.style.backgroundColor = `#${randColor()}`;
            })
            break;
        case "3":
            thirdColumn.forEach((columnCell) => {
                columnCell.style.backgroundColor = `#${randColor()}`;
            })
            break;
        case "4":
            fourthColumn.forEach((columnCell) => {
                columnCell.style.backgroundColor = `#${randColor()}`;
            })
            break;
        case "5":
            fifthColumn.forEach((columnCell) => {
                columnCell.style.backgroundColor = `#${randColor()}`;
            })
            break; 
        case "6":
            sixthColumn.forEach((columnCell) => {
                columnCell.style.backgroundColor = `#${randColor()}`;
            })
            break;
        case "7":
            seventhColumn.forEach((columnCell) => {
                columnCell.style.backgroundColor = `#${randColor()}`;
            })
            break;
        case "ArrowUp":
            topHalf.forEach((top) => {
                top.style.backgroundColor = "black";
            })
            bottomHalf.forEach((bottom) => {
                bottom.style.backgroundColor = "";
            })
            break;
        case "ArrowDown":
            bottomHalf.forEach((bottom) => {
                bottom.style.backgroundColor = "black";
            })
            topHalf.forEach((top) => {
                top.style.backgroundColor = "";
            })
            break;
        case "c": 
            cells.forEach((allCells) => {
                allCells.style.backgroundColor = "";
            })
            break;
        case "d":
            body.style.backgroundColor = "black";
            break;
        case "l":
            body.style.backgroundColor = "";
            break;
        default: 
            return;
    }
})
