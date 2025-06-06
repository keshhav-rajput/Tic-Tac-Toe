let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset");
let newGame = document.querySelector(".newGame");
let msgContainer = document.querySelector(".winMsg");
let msg = document.querySelector("#msg");

let turn0 = true;

const winPatterns = [[0, 1, 2],
                     [0, 3, 6],
                     [0, 4, 8],
                     [1, 4, 7], 
                     [2, 5, 8], 
                     [2, 4, 6], 
                     [3, 4, 5], 
                     [6, 7, 8] 
        ];




boxes.forEach((box) => {
    box.addEventListener("click", () => {

        if(turn0){
            box.innerText = "O";
            turn0 = false;
        }
        else{
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;

        checkWinner();
    
    });
});

const resetGame = () => {
    enableBoxes();
    msgContainer.classList.add("hide");
};

const disableBoxes = () => {
    for(let box of boxes){
    box.disabled = true;
    }
}


const enableBoxes = () => {
    for(let box of boxes){
    box.disabled = false;
    box.innerText = "";
    }
}


const showWinner = (winner) => {
    msg.innerText = `Winner - Player ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}


const checkWinner = () => {
    for(let pattern of winPatterns){
        
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                showWinner(pos1Val);

            }
        }
    }
}

newGame.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);