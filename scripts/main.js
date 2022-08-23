import { between } from "./utilis.js";
class PlayField{
    constructor(cellsX,cellsY){
        this.cellsX = cellsX;
        this.cellsY = cellsY;
        this.cell ={
            x : 0,
            y : 0,
            alive : false,
            neighbours :0
        }
        this.field = this.createDeadField();
    }
    createCell(){
        const cell = {
            x : 0,
            y : 0,
            alive : false,
            neighbours :0
        }
        return cell
    }

    createDeadField(){
        let tempField = [];   
        for(let i = 0 ; i < (this.cellsX * this.cellsY) ;i++){
            tempField.push(this.createCell());
            tempField[i].x = i % this.cellsX;
            tempField[i].y = Math.floor(i / this.cellsY);
            between(1,2)=== 1 ? tempField[i].alive = true: tempField[i].alive = false;
        }
        return tempField
    }
    
    checkAmountOfNeighours(cell){
        const x = cell.x;
        const y = cell.y;
        let sum = 0;

        const above = this.cellsX * (y - 1 < 0 ? y + this.cellsY - 1: y - 1);
        const below = this.cellsX * (y + 1 > this.cellsY - 1 ? y - this.cellsY + 1: y + 1)
        const left = (x - 1 < 0 ? x + this.cellsX - 1: x - 1)
        const right = (x + 1 > this.cellsX - 1? x - this.cellsX+ 1: x + 1)

        const indexOfAbove      = (above + x);
        const indexOfAboveLeft  = (above + left);
        const indexOfAboveRight = (above + right);
        const indexOfBelow      = (below + x);
        const indexOfBelowLeft  = (below + left);
        const indexOfBelowRight = (below + right);
        const indexOfLeft       = (this.cellsY * y) + left;
        const indexOfRight      = (this.cellsY * y) + right;
        
        if(this.field[indexOfAbove].alive === true) sum++; 
        if(this.field[indexOfAboveLeft].alive === true) sum++; 
        if(this.field[indexOfAboveRight].alive === true) sum++; 
        if(this.field[indexOfBelow].alive === true) sum++;
        if(this.field[indexOfBelowLeft].alive === true) sum++;
        if(this.field[indexOfBelowRight].alive === true) sum++; 
        if(this.field[indexOfLeft].alive === true) sum++;
        if(this.field[indexOfRight].alive === true) sum++;
        return sum;
        
    }

    oneCycle(){
        let tempField = JSON.parse(JSON.stringify(this.field));
        for(let i = 0 ; i < (this.cellsX * this.cellsY) ;i++){
            const neighbours = this.checkAmountOfNeighours(this.field[i])
            if (neighbours < 2) tempField[i].alive = false;
            if (neighbours === 3) tempField[i].alive = true;
            if (neighbours > 3) tempField[i].alive = false;
        }
        this.field = JSON.parse(JSON.stringify(tempField));
    }

}

function main(){
    const field = new PlayField(10,10);
    console.log(field.field);
    field.oneCycle();
    console.log(field.field);
}

main()