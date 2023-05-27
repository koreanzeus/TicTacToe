const gameboard = document.querySelector("#gameboard");
const info = document.querySelector("#info");
const startCells = ["","","","","","","","",""];

let turn = "circle";

info.innerHTML="Circle goes first";
info.style.fontSize= "x-large";
var restart = false;

function createBoard(){
    document.getElementById("reset").style.display = "none";

    startCells.forEach((cell,index)=>{
        const cellElement = document.createElement("div")
        cellElement.classList.add("square")
        cellElement.id = index
        cellElement.addEventListener("click", takeTurn)
        gameboard.append(cellElement)
    })
};

createBoard();

function takeTurn(event)
{
    const currentTurn = document.createElement("div");
    const c = event.currentTarget;
    if(checkItem(c, turn) && !restart){
        currentTurn.classList.add(turn);
        event.target.append(currentTurn);
        if(checkState(turn)){
            info.innerHTML= turn + "'s is the winner";
            restart=true;
            document.getElementById("reset").style.display = "inline";
        }
        else{
            if(turn=="circle"){
                turn="x";
            }
            else{
                turn="circle";
            }
            info.innerHTML= "It is now " + turn +"'s turn";
        }
    }
};

function checkState(turn)
{
    let retValue = false;
    let checkArray = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    checkArray.forEach(function(a){
        if(startCells[a[0]] == turn && startCells[a[1]] == turn && startCells[a[2]] == turn){
            retValue = true;
        }
    });
    return retValue;
};
function checkItem(element, turn)
{
    id = element.id;
    if(startCells[id] == "")
    {
        startCells[id]=turn;
        return true;
    }
    return false;

};