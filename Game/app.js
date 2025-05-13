
let boxes= document.querySelectorAll(".box");
let resetBtn= document.querySelector("#resetBtn");
let newGameBtn= document.querySelector("#newGameBtn");
let msgContainer= document.querySelector(".msg-container");
let msg= document.querySelector("#msg");

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

//function to reset the game
const resetGame = () => {
    turn0= true;  
    enableBoxes();
    msgContainer.classList.add("hide");  // when the game is reset, the message container should be hidden 

};

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

//function to disable the boxes after getting a winner
const disableBoxes = () => {
    for(box of boxes){
        box.disabled = true;
    }

};

const enableBoxes = () => {
    for(box of boxes){
        box.disabled = false;
        box.innerText = "";  // clear the text
    }

};

//function to show the winner
const showWinner = (winner) => {
    msg.innerText = `Congratulations! Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();  //disable all the boxes after getting a winner
};


//function to check the winner
const checkWinner = () => {
    //for deciding the winner we need to check the winning patterns
    for(pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        //if all the three values are same then we have a winner
        if(pos1Val !== "" && pos2Val !== "" && pos3Val !== ""){  //if all the three values are not empty}
        if(pos1Val === pos2Val && pos2Val === pos3Val)  {        // if all the three values are same then we have a winner
            console.log("winner is " + pos1Val);
            showWinner(pos1Val);

        }        
        
    }
    }
};


newGameBtn.addEventListener("click", resetGame);  
//when the reset button is clicked, the game should be reset
resetBtn.addEventListener("click", resetGame);


