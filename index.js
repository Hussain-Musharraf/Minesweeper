const rightContainer= document.getElementsByClassName("right")[0];
const bombs = [];
let score = 0;
let gameOver=false;
const visitedDiv=[];

function createGrid(){
    for(let i=0;i<9;i++){
        const row=document.createElement("div");
        rightContainer.appendChild(row);
        row.classList.add("cellRow");
        for(let j=0;j<9;j++){
            const column=document.createElement("div");
            row.appendChild(column);
            column.classList.add("cellColumn");

            const currentIndex = i*9+j;
            if(bombs.includes(currentIndex))
            {
                column.className = "bomb";
            }
            column.addEventListener("click",()=>{
                if(!gameOver){
                    if(bombs.includes(currentIndex))
                    {
                        column.style.background = "red";
                        gameOver=true;
                        showAllBombs();
                    }
                    else
                    {
                        column.style.background = "green";
                        if(!visitedDiv.includes(currentIndex)){
                            incrementScore();
                            visitedDiv.push(currentIndex);
                        }
                    }
                }
            })
        }
    }
}

function showAllBombs(){
    const allBombs=document.getElementsByClassName("bomb");
    for(let bomb of allBombs){
        bomb.style.background = "red";
    }
}

const resetButton=document.getElementById("reset");
resetButton.addEventListener("click",()=>{
    window.location.reload();
})

function incrementScore(){
    score++;
    const scoreElement=document.getElementById("score");
    scoreElement.innerText = score;
}
function generateRandomNumber(){
    let randomNumber=Math.random();
    randomNumber=randomNumber.toFixed(2);
    randomNumber*=100;
    randomNumber=randomNumber % 81;
    randomNumber=parseInt(randomNumber);
    return randomNumber;
}
function placeBombs(){
    while(bombs.length!=10){
        const randomNumber=generateRandomNumber();
        if(!bombs.includes(randomNumber)){
            bombs.push(randomNumber);
        }
    }
}

placeBombs();
createGrid();
//generateRandomNumber();
console.log(bombs);