import { between, timer, clone } from "./utilis.js";
import{ cyclesInput } from "./main.js"


export class Matchfield{
    constructor(fieldSizeY, fieldSizeX){
        this.fieldSizeY = fieldSizeY;
        this.fieldSizeX = fieldSizeX;
        this.field = this.createEmptyField();
        this.fieldEmpty = this.createEmptyField();
        this.currentLifeCycle = 0;
        this.limitForLifeCycle =  cyclesInput.value;
        this.stopLifeCycle = false;
        this.finishCycles = false;
        this.currentlyRuning = false;
        this.renderField()
    }

    
    createRandomFieldSpreed(randomSpreed = 1) {
        const random = Math.floor(15 / randomSpreed) 
        let tempField = clone(this.fieldEmpty)

        for(let y = 0; y < this.fieldSizeY ; y++ ){
            for(let x = 0; x < this.fieldSizeX; x++ ){
                between(0,random) === 1 ? tempField[y][x] = true: tempField[y][x] = false;
            }
        }
        this.field = clone(tempField);
        
        this.renderField();
    }

    createEmptyField(){
        let tempField = [];
        for(let y = 0; y < this.fieldSizeY ; y++ ){
            tempField.push([]);
            for(let x = 0; x < this.fieldSizeX; x++ ){
                tempField[y].push(false);
            }
        }
        return tempField
    }

    checkFieldLeft(y,x){
        return this.field[y][x-1 < 0 ? x + this.fieldSizeX - 1: x-1] == true ? 1 : 0;
    }
    checkFieldRight(y,x){
        return this.field[y][x+1 > this.fieldSizeX - 1 ? x - this.fieldSizeX + 1: x+1] === true ? 1 : 0;
    }
    checkFieldUp(y,x){
        return this.field[y-1 < 0 ? y + this.fieldSizeY - 1: y-1][x] === true ? 1 : 0;
    }
    checkFieldDown(y,x){
        return this.field[y+1 > this.fieldSizeY - 1 ? y - this.fieldSizeY + 1: y+1][x] === true ? 1 : 0;
    }
    checkFieldLeftUp(y,x){
        return this.field[y-1 < 0 ? y + this.fieldSizeY - 1: y-1][x-1 < 0 ? x + this.fieldSizeX - 1: x-1] === true ? 1 : 0;
    }
    checkFieldRightUp(y,x){
        return this.field[y-1 < 0 ? y + this.fieldSizeY - 1: y-1][x+1 > this.fieldSizeX - 1 ? x - this.fieldSizeX + 1: x+1] === true ? 1 : 0;
    }
    checkFieldLeftDown(y,x){
        return this.field[y+1 > this.fieldSizeY - 1 ? y - this.fieldSizeY + 1: y+1][x-1 < 0 ? x + this.fieldSizeX - 1: x-1] === true ? 1 : 0;
    }
    checkFieldRightDown(y,x){
        return this.field[y+1 > this.fieldSizeY - 1 ? y - this.fieldSizeY + 1: y+1][x+1 > this.fieldSizeX - 1 ? x - this.fieldSizeX + 1: x+1] === true ? 1 : 0;
    }
    countLivingFieldsAround(y,x){
        let res = 0;
        res += this.checkFieldLeft(y,x);
        res += this.checkFieldLeftUp(y,x);
        res += this.checkFieldUp(y,x);
        res += this.checkFieldRightUp(y,x);
        res += this.checkFieldRight(y,x);
        res += this.checkFieldRightDown(y,x);
        res += this.checkFieldDown(y,x);
        res += this.checkFieldLeftDown(y,x);
        return res;
    }

    oneLifeCycleStep(){
        let tempField = clone(this.fieldEmpty);

        for(let y = 0; y < this.fieldSizeY ; y++ ){
            for(let x = 0; x < this.fieldSizeX; x++ ){
                const neighbours = this.countLivingFieldsAround(y,x);

                if(neighbours === 0 || neighbours === 1){
                    tempField[y][x] = false;
                }else if(neighbours >= 4){
                    tempField[y][x] = false;
                }else if(this.field[y][x] === true && neighbours === 2){
                    tempField[y][x] = true;
                }else if(this.field[y][x] === false && neighbours === 2){
                    tempField[y][x] = false;
                }else if(this.field[y][x] === false && neighbours === 3){
                    tempField[y][x] = true;
                }else if(this.field[y][x] === true && neighbours === 3){
                    tempField[y][x] = true;
                }

            }
        }
        this.field = clone(tempField);
    }

    renderField(){
        const mainWindow =  document.querySelector(".main-window");
        mainWindow.innerHTML = "";
        for(let y=0 ; y<this.fieldSizeY ; y++){
            const line = document.createElement("div");
            line.classList.add(`field-line`);
            for(let x = 0 ; x < this.fieldSizeX; x++){
                const square = document.createElement("div");
                square.classList.add("field-square", `${y}-${x}`);
                if(this.field[y][x] === true){
                    square.classList.add("alive")
                }else{
                    square.classList.remove("alive")
                }
                line.appendChild(square);
            }
            mainWindow.appendChild(line)
        }
    }
    
    async lifeCycleLoop(){
        const currentCycleField = document.querySelector(".current-cycle");

        this.currentlyRuning = true;
        while (!this.stopLifeCycle && this.currentLifeCycle <= this.limitForLifeCycle && this.currentlyRuning){
            this.currentlyRuning = true;
            this.oneLifeCycleStep();
            this.renderField();
            currentCycleField.textContent = `Cycles = ${this.currentLifeCycle} / ${this.limitForLifeCycle}`
            this.currentLifeCycle ++;
            await timer(200);
        }
        this.currentlyRuning = false;
    }

    clearField(){
        this.field = clone(this.fieldEmpty)
        this.renderField()
    }

    toggleSquare(y,x){
        const tempField = clone(this.field);
        
        tempField[y][x] === false ? tempField[y][x] = true : tempField[y][x] = false;
        this.field = clone(tempField) 
        this.renderField()
        
    }
}

