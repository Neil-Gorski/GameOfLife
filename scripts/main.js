import { Matchfield } from "./matchfield.js";
import { getCordinateFromString } from "./utilis.js";

const startBtn = document.querySelector(".start-game");
const stopBtn = document.querySelector(".stop-game");
const clearBtn = document.querySelector(".clear-field")
const randomBtn = document.querySelector(".random-spreed")
export const cyclesInput = document.getElementById("cycles");
const currentCycleField = document.querySelector(".current-cycle")
const square = document.querySelector(".field-square")


function main(){
    
    const field = new Matchfield(80,100);
    
    const onClick = (event) => {
        let cordinates = getCordinateFromString(event.target.className);
        if(cordinates !== null){
            field.toggleSquare(cordinates[0], cordinates[1])
        }
      }

    
    startBtn.addEventListener("click",function (){
        field.stopLifeCycle = false;
        field.limitForLifeCycle = cyclesInput.value;
        field.lifeCycleLoop()   
    });
    
    stopBtn.addEventListener("click", () => field.stopLifeCycle = true);
    
    randomBtn.addEventListener("click",function (){
        field.createRandomFieldSpreed();
        field.currentLifeCycle = 0;
        
    })
    
    clearBtn.addEventListener("click", function (){
        field.clearField()
        field.stopLifeCycle = true;
        field.currentLifeCycle = 0;
        currentCycleField.textContent = `Cycles = ${field.currentLifeCycle}`
    });

    window.addEventListener('click', onClick);
};

main()


