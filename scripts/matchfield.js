import { between } from "./utilis.js";


export class Matchfield{
    constructor(fieldSizeX, fieldSizeY){
        this.fieldSizeX = fieldSizeX;
        this.fieldSizeY = fieldSizeY;
        this.field = [];
        this.fieldTmp = [];
    }

    createField() {
        for(let y = 0; y < this.fieldSizeY ; y++ ){
            this.field.push([]);
            for(let x = 0; x < this.fieldSizeX; x++ ){
                // this.field[y].push(false);
                between(0,1) === 1 ? this.field[y].push(true): this.field[y].push(false);
            }
        }
        // this.field[0][0] = true;
        console.log(this.field);
    }

    createEmptyField(){
        let tempField = [];
        for(let y = 0; y < this.fieldSizeY ; y++ ){
            tempField.push([]);
            for(let x = 0; x < this.fieldSizeX; x++ ){
                tempField[y].push();
            }
        }
        return tempField;
    }

    fieldLifeCycle(){
        this.fieldTmp = this.createEmptyField()
        for(let y = 0; y < this.fieldSizeY ; y++ ){
            for(let x = 0; x < this.fieldSizeX; x++ ){
                const neighbours = this.countFieldsAround(y,x);
                if(neighbours <= 1 || neighbours > 3){
                    this.fieldTmp[y][x] = false;
                }else if(this.field[y][x] === true || neighbours === 3){
                    this.fieldTmp[y][x] = true;
                }else{
                    this.fieldTmp[y][x] = this.field[y][x];
                }

            }
        }
        this.field = [...this.fieldTmp];
        console.log(this.field)
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
}