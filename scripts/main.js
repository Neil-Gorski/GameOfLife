// const testArray = ['Szymon', 'Adrian', 'Kasia', 1, 10, undefined, null, NaN, ['kraków', 'Warszawa']];
//
// testArray.sort(function (a, b) {
//     // console.log("a: ", a);
//     // console.log("b: ", b)
//     if (a < b) {
//         return 1;
//     } else if (a > b) {
//         return -1;
//     } else {
//         return 0;
//     }
// });

// console.log('testArray', testArray);

// const newArr = [2, 3, 5].map(function (element) {
//     console.log('element', element)
//     return element * 2;
// });

// console.log('newArr', newArr);

// for (i <= 3) {
//     function (element) {
//         return element * 2;
//     }
// }

// const test = [];
//
// testArray.forEach(function (element) {
//     if (element === 'jan') {
//         test.push(true);
//     }
// });
//
// const a = [1, 2, 3];
// const b = a;
//
// function randomFn(arr){
//     const arr2 = [...arr];
//     arr.push('new element');
// }
//
// randomFn(b);

// b.splice(1, 1);
// console.log('a: ', a)
// console.log("b: ", b)

//----------------------------------------
//[].sort()
//[].map()
// [].forEach()
// [].filter()

const testArray = ['Szymon', 'Adrian', 'Kasia', 1, 10, undefined, null, NaN, ['kraków', 'Warszawa'], 'ala', 'basia', 20, 25, 13, 'ola', 'alan', "50", "1", "13"];

//nowa tablica bez wartości negatywnych


//nowa tablica tylko number - NumberArray - typ number i string!!!
function filterNumbers(element) {
    if((typeof element === 'number' && isNaN(element) !== true || typeof element === 'string'&& !isNaN(element))){
        return true;
    }
}
const numberArray = testArray.filter(filterNumbers);
//console.log(numberArray);



//Nowa tablica z numberami do kwadratu
function squareNumbers(element){
    return element**2;
}
const numberSquares = numberArray.map(squareNumbers);
//console.log(numberSquares)



//Nowa tablica z imiona dłuższymi niż 5 znaków
function fitlerLongNames(element){
    if(typeof element === 'string' && element.length > 5){
        return true
    }
}
const longNames = testArray.flat().filter(fitlerLongNames)
//console.log(longNames)



//nowa tablica ze wszystkimi elementami typu string + jesli element zaczyna się z małej litery to zmieniamy ją na wielką
function isString(element){
    if(typeof element === 'string'&& !isNaN(element)){
        return true;
    }
}
function upperStrings(element){
    if(typeof element === 'string'){
        return element.charAt(0).toUpperCase() + element.substring(1).toLowerCase();
    }
}
const upperStringsArr = testArray.flat().filter(isString).map(upperStrings)
console.log(upperStringsArr);