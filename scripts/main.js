const emptyArr = [];
const arrNotEmpty = [undefined, 'jan', 'andrzej', [43, 'krakow']];
// console.log(arrNotEmpty[3][1]);
const arrWithFiv = new Array(10).fill('1');
for (let i = 0; i < arrNotEmpty.length; i++ ) {
    arrNotEmpty[i];
}
//-------------------
// push(), pop()
// console.log(arrNotEmpty);
arrNotEmpty.push('kamil');
// console.log(arrNotEmpty);
const lastElem = arrNotEmpty.pop();
// console.log(arrNotEmpty);
//-------------------
// unshift(), shift()
arrNotEmpty.unshift('daniel');
// console.log(arrNotEmpty);
const firstElem = arrNotEmpty.shift();
//-------------------
// console.log(arrNotEmpty);
// console.log(arrNotEmpty.splice(1, 1));
// console.log(arrNotEmpty);
//-------------------
arrNotEmpty.indexOf('andrzej')
// arrNotEmpty.indexOf('warszawa') -> return -1
//------------------- Exe LOTTO ----


//stworzyć 49 piłeczek
//losować 6 z 49
//stworzyć kupon z 6 cyframi
//porównać 6 wylosowanych z naszym kuponem
//ilość losowań lotto żeby trafić nasz kupon

function between (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function sortNum (a, b) {
    return a - b;
  }

const lottoArray = [];
for (let i = 1; i <= 49; i++ ) {
    lottoArray.push(i);
}


//tworzę moją tablice liczb i ją sortuję
const myArray = [3,5,4,7,1,9]; //zmienić zmienną
let numbersDrawn = [];

//petla ma sie wykonywac dopoki dwie tablice sa rozne

function randomBall(){
    numbersDrawn = [];
    for (let i = 1; i <= 6; i++ ) {
        //wylosować cyfrę z zakresu 0-lottoArray.lenght,
        const randomIndex = between(0, lottoArray.length - 1);
        //wyciągamy wylosowany indeks z lottoArray za pomocą splice
        const randomBall = lottoArray.splice(randomIndex,1)[0];
        numbersDrawn.push(randomBall);
    }
    console.log(numbersDrawn)
    // return numbersDrawn; //można usunąć
}
// let result;

let result=false;
let counter = 0;


function compareArrays(arr1, arr2) {
    arr1.sort(sortNum);
    arr2.sort(sortNum);
    for(let i = 0; i < arr1.length; i++){
        if (arr1[i] !== arr2[i]) {
            counter = counter;
        } else counter = counter+1;
        if (counter === arr1.length){
        result = true;
        }
    }
    return result;
}

// let testArr1 =[1,2,3,4];
// let testArr2 = [1,2,3,4];
// randomBall();
// compareArrays(testArr1,testArr2);
// compareArrays(myArray, numbersDrawn);
let counterLotto=0;

do{
    randomBall();
    compareArrays(myArray, numbersDrawn);
    counterLotto = counterLotto+1;
}while (counterLotto < 10);


// while (result!==true){
//     randomBall();
//     compareArrays(myArray, numbersDrawn)
// }
// //teraz losowanie randomBall ma się wykonywać dopoki wynik funkcji compareArrays nie bedzie true

/*  while(result!==true){
     randomBall();
     compareArrays(myArray, numbersDrawn);
 }
 */

// let finalArr=[];

// for(let i = 0; i < numbersDrawn.length; i++ ) {
//     for (let y =0; y<myArray.length; y++)
//     if (numbersDrawn[i]===myArray[y]){
//         finalArr.push(myArray[i]);
//     }
// }

console.log("numbersDrawn", numbersDrawn);
console.log("myArray", myArray);
// console.log("counter", counter);
// console.log("posortowane numberDrawn", numbersDrawn);
console.log(result);

//