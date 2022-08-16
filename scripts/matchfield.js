import { between,sleep } from "./utilis.js";

export class Matchfield{
    constructor(fieldSizeY, fieldSizeX){
        this.fieldSizeY = fieldSizeY;
        this.fieldSizeX = fieldSizeX;
        this.field = [];
        this.fieldEmpty = [];
        this.fieldTmp = [];
    }

    createRandomFieldSpreed(randomSpreed) {
        this.field = []
        const random = Math.floor(15 / randomSpreed) 
        for(let y = 0; y < this.fieldSizeY ; y++ ){
            this.field.push([]);
            for(let x = 0; x < this.fieldSizeX; x++ ){
                // this.field[y].push(false);
                between(0,random) === 1 ? this.field[y].push(true): this.field[y].push(false);
            }
        }
        this.createEmptyField()
        // this.field[0][0] = true;
        // console.log(this.field);
        this.renderField();
        
    }

    createEmptyField(start=false){
        let tempField = [];
        for(let y = 0; y < this.fieldSizeY ; y++ ){
            tempField.push([]);
            for(let x = 0; x < this.fieldSizeX; x++ ){
                tempField[y].push(false);
            }
        }

        this.fieldTmp = tempField;
        if(start === true){
            this.field = tempField;
            this.fieldEmpty = tempField;
        }

         this.renderField()
    }

    fieldLifeCycle(){
        let tmpField = [...this.fieldEmpty]
        for(let y = 0; y < this.fieldSizeY ; y++ ){
            for(let x = 0; x < this.fieldSizeX; x++ ){
                const neighbours = this.countFieldsAround(y,x);

                if(neighbours === 0 || neighbours === 1){
                    tmpField[y][x] = false;
                }else if(neighbours >= 4){
                    tmpField[y][x] = false;
                }else if(this.field[y][x] === true && neighbours === 2){
                    tmpField[y][x] = true;
                }else if(this.field[y][x] === false && neighbours === 2){
                    tmpField[y][x] = false;
                }else if(this.field[y][x] === false && neighbours === 3){
                    tmpField[y][x] = true;
                }else if(this.field[y][x] === true && neighbours === 3){
                    tmpField[y][x] = true;
                }

            }
        }
        this.field = tmpField;
        // console.log(this.field)
        this.renderField()
        

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
    countFieldsAround(y,x){
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
}

