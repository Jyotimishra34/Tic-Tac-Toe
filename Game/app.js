
let boxes= document.querySelectorAll(".box");
let resetBtn= document.querySelector("#reset-btn");

let turn0 = true;   //player X,Player 0

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];


boxes.forEach((box) =>{
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if(turn0 === true){  //this is the turn of player 0
            box.innerText = "0";
            turn0 = false;    //it should not be true for the next turn (for player X)
        }
         else{    // This is the turn of player X
            box.innerText = "X";  
            turn0 = true;      //it should not be true for the player 0
        }

        box.disabled = true;  // this box is now disabled. you cannot click it again. once at a time

        checkWinner();

    });

});


//function to check the winner
const checkWinner = () => {
    //for deciding the winner we need to check the winning patterns
    for(pattern of winPatterns){
        console.log(pattern);
    }

}
