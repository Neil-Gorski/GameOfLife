import { Matchfield } from "./matchfield.js";
import { sleep, timer } from "./utilis.js";

const startBtn = document.querySelector(".start-game");
const clearBtn = document.querySelector(".clear-field")
const randomBtn = document.querySelector(".random-spreed")
const cyclesInput = document.querySelector(".cycles");
const currentCycleField = document.querySelector(".current-cycle")



async function loop(field, cycles) {
    for (let i = 1; i < cycles +1; i++){
        field.fieldLifeCycle();
        currentCycleField.textContent = `Cycles = ${i}`
        await timer(200);
    }
}


function main(){
    const getCyclesFromHtml = () => cyclesInput.value;
    
    const field = new Matchfield(80,100);
    field.createEmptyField(true);
    
    
    startBtn.addEventListener("click",function (){
        const cyclesHtml = getCyclesFromHtml()
        loop(field, cyclesHtml)        
    });

    randomBtn.addEventListener("click",function (){
        field.createRandomFieldSpreed(1);
    })

    cyclesInput.addEventListener("change", changeCycles)

    clearBtn.addEventListener("click", function (){
        field.createEmptyField(true);
        currentCycleField.textContent = `Cycles = 0`
    });
};


main()


