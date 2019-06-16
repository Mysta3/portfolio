
var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColors;
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButton = document.querySelectorAll(".mode");

//initial page load

init();

function init(){
setupModeButtons();
setupSquares();
reset();
}

function setupModeButtons(){
    
//refactoring easy and hard buttons
for(var i = 0; i < modeButton.length; i++){
    modeButton[i].addEventListener("click", function(){
   //removes selected class from buttons
    modeButton[0].classList.remove("selected"); 
    modeButton[1].classList.remove("selected");

     //adds selected class to button that is clicked.
     this.classList.add("selected");
    /*

    ternary expression. Does same as if statement code below
    this.textContent === "Easy" ? numSquares = 3: numSquares =6;
    */

    if(this.textContent === "Easy"){
        numSquares = 3;
    } else{
        numSquares = 6;
    }
    reset();
    });

}
};

function setupSquares(){
    for(var i = 0; i < squares.length; i++){
        //add initial colors
        squares[i].style.backgroundColor = colors[i];
    
        //add click listeners to square
       squares[i].addEventListener("click", function(){
           //grab color of picked sqaure
           var clickedColor = this.style.backgroundColor;
           //compare if picked color mataches given random color
            if(clickedColor === pickedColors){
                messageDisplay.textContent = "Correct!"
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
                resetButton.textContent = "Play Again?";
            }else{
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again...";
            }
        });
    }
};



function reset(){
     
    //generate all new colors
    colors = generateRandomColors(numSquares);

    //pick a new random
    pickedColors = pickColor();

    //change color display to match picked color
    colorDisplay.textContent = pickedColors;

    //reset Play Again to New Colors after player wins
    resetButton.textContent = "New Colors";

    //erases Correct from Span
    messageDisplay.textContent = "";

    //change colors of squares
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }else {
            squares[i].style.display = "none";
        }
        
    }
    //change h1 color back to normal state
    h1.style.backgroundColor = "steelblue";
}

/*
easyBtn.addEventListener("click", function(){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numSquares = 3;
    //generate new colors
    colors = generateRandomColors(numSquares);
    //pick a new color
    pickedColors = pickColor();
    colorDisplay.textContent = pickedColors;
    //loops through first 3 
    for(var i = 0; i < squares.length; i++){
    if(colors[i]){
        squares[i].style.background = colors[i]; //changes colors
    } else{
        squares[i].style.display = "none"; //hides bottom row
    }
  }
});


hardBtn.addEventListener("click", function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");

    numSquares = 6;
    //generate new colors
    colors = generateRandomColors(numSquares);
    //pick a new color
    pickedColors = pickColor();
    colorDisplay.textContent = pickedColors;
    //loops through ALL 6 sqaures
    for(var i = 0; i < squares.length; i++){
        squares[i].style.background = colors[i]; //changes colors
        squares[i].style.display = "block"; //shows bottom row
  }
});

*/

resetButton.addEventListener("click", function(){
  reset();
})


colorDisplay.textContent = pickedColors;

/*
for(var i = 0; i < squares.length; i++){
    //add initial colors
    squares[i].style.backgroundColor = colors[i];

    //add click listeners to square
   squares[i].addEventListener("click", function(){
       //grab color of picked sqaure
       var clickedColor = this.style.backgroundColor;
       //compare if picked color mataches given random color
        if(clickedColor === pickedColors){
            messageDisplay.textContent = "Correct!"
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
            resetButton.textContent = "Play Again?";
        }else{
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again...";
        }
    });
}
*/
function changeColors(color){
//loop through all squares
for(var i = 0; i < squares.length; i++){
    squares[i].style.background = color;
}
//Change each color to match given color
}
//generating random numbers
function pickColor(){
    var random = Math.floor(Math.random() * colors.length) ;
    return colors[random];
}

//Generate Random Mumber of Colors 
function generateRandomColors(num){
    //make array
    var arr =[]
    //repeat num times
    for(var i = 0; i < num; i++){
        //get random color and push into array
        arr.push(randomColor())
    }
    //return array
    return arr; 
    }

    //Grab RandomColors to fill array
    function randomColor(){
    //pick a "red" from 0 - 255
    var r = Math.floor(Math.random() * 256);

    //pick a "green" from 0 - 255
    var g = Math.floor(Math.random() * 256);

    //pick a "blue" from 0 - 255
    var b = Math.floor(Math.random() * 256);

    //return rgb(r, g, b)
    //CSS auto adds space between the strings of the output.
    return "rgb(" + r + ", " + g + ", " + b + ")";
    }



