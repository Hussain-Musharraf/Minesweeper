const rightContainer = document.getElementsByClassName("right")[0];
const bombsArray = [];
let point = 0;
let gameOver = false;
const visitedCell = [];

function createGrid() {
  placeBombs();
  for (let i = 0; i < 9; i++) {
    const row = document.createElement("div");
    rightContainer.appendChild(row);
    row.classList.add("cellRow");
    for (let j = 0; j < 9; j++) {
      const column = document.createElement("div");
      row.appendChild(column);
      column.classList.add("cellColumn");

      const currentIndex = i * 9 + j;
      if (bombsArray.includes(currentIndex)) {
        column.classList.add("bomb");
      }
      column.addEventListener("click", () => {
        if (!gameOver) {
          if (bombsArray.includes(currentIndex)) {
            column.style.background = "red";
            gameOver = true;
            showAllBombs();
          } else {
            column.style.background = "green";
            if (!visitedCell.includes(currentIndex)) {
              incrementScore();
              visitedCell.push(currentIndex);
            }
          }
        }
      });
    }
  }
}

function showAllBombs() {
  const allBombs = document.getElementsByClassName("bomb");
  for (let bomb of allBombs) {
    bomb.style.background = "red";
  }
}

function reload() {
  location.reload()
}

function incrementScore() {
  point++;
  const scoreElement = document.getElementById("score");
  scoreElement.innerText = point;
}

function generateRandomNumber() {
  let randomNumber = Math.random() * 81;
  randomNumber = parseInt(randomNumber);
  return randomNumber;
}
function placeBombs() {
  while (bombsArray.length != 10) {
    const randomNumber = generateRandomNumber();
    if (!bombsArray.includes(randomNumber)) {
      bombsArray.push(randomNumber);
    }
  }
}
createGrid();

//generateRandomNumber();
console.log(bombsArray);
