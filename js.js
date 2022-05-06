const gridTop = document.querySelector(".gridTop");


function gridSize() {
     do {
        sizeNo = Number(prompt("What size do you want from 1-100"));
      } while (isNaN(sizeNo)||!sizeNo||sizeNo<1||sizeNo>100)
      clearGrid();
      makeGrid(sizeNo);
      return sizeNo
};//create grid size

let color = "black";

function makeGrid(size) {
    const grid = document.createElement("div");
    grid.classList = "grid";
    gridTop.appendChild(grid);
    //create grid box
    for (i=1; i<=size; i++){
        this["gridContainer"+i]  = document.createElement('div');
        this["gridContainer"+i].classList = "grid-container";
        grid.appendChild(this["gridContainer"+i]);
        //cell flex conatiners
        for (j=1; j<=size; j++){
         this["grid"+j]  = document.createElement('div');
         this["grid"+j].classList = "grid-item";
         this["gridContainer"+i].appendChild(this["grid"+j]);
         //create cells
         this["grid"+j].addEventListener('mouseover', 
          e => e.target.style.backgroundColor = color  
     )//Change background color on hover
}}}

function clearGrid(){
        gridTop.textContent='';
}//clear grid

function random(number) {
    return Math.floor(Math.random()*number);
} //get random number

function bgChangeRand() {
    const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    return rndCol;
} //random colors

let sizeNo = 50;
makeGrid(sizeNo);

const size = document.querySelector("#gridSize");
size.addEventListener("click", gridSize);
//resize grid button

const reset = document.querySelector("#reset");
reset.addEventListener("click", () => {
    clearGrid();
    makeGrid(sizeNo);
})

//reset grid to white button

const black = document.querySelector("#black");
black.addEventListener("click", e => color = "black" );
//change pen to black

const rainbow = document.querySelector("#rainbow");
rainbow.addEventListener("click", e => 
    {color = bgChangeRand();})
//change pen to random number

const eraser = document.querySelector("#eraser");
eraser.addEventListener("click", e => color = "white" );
//change pen to white