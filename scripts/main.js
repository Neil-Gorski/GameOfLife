// // const testArray = ['Szymon', 'Adrian', 'Kasia', 1, 10, undefined, null, NaN, ['kraków', 'Warszawa']];
// //
// // testArray.sort(function (a, b) {
// //     // console.log("a: ", a);
// //     // console.log("b: ", b)
// //     if (a < b) {
// //         return 1;
// //     } else if (a > b) {
// //         return -1;
// //     } else {
// //         return 0;
// //     }
// // });

// // console.log('testArray', testArray);

// // const newArr = [2, 3, 5].map(function (element) {
// //     console.log('element', element)
// //     return element * 2;
// // });

// // console.log('newArr', newArr);

// // for (i <= 3) {
// //     function (element) {
// //         return element * 2;
// //     }
// // }

// // const test = [];
// //
// // testArray.forEach(function (element) {
// //     if (element === 'jan') {
// //         test.push(true);
// //     }
// // });
// //
// // const a = [1, 2, 3];
// // const b = a;
// //
// // function randomFn(arr){
// //     const arr2 = [...arr];
// //     arr.push('new element');
// // }
// //
// // randomFn(b);

// // b.splice(1, 1);

// // console.log('a: ', a)
// // console.log("b: ", b)

// //----------------------------------------
// //[].sort()
// //[].map()
// // [].forEach()
// // [].filter()

// const testArray = ['Szymon', 'Adrian', 'Kasia', 1, 10, undefined, null, NaN, ['kraków', 'Warszawa'], 'ala', 'basia', 20, 25, 13, 'ola', 'alan', "50", "1", "13"];



// //nowa tablica tylko number
// function filterNumbers(element) {
//     if(typeof element === 'number' && isNaN(element) !== true){
//         return true;
//     }
// }

// let numberArray = testArray.filter(filterNumbers);
// console.log(numberArray);


// //Nowa tablica z numberami do kwadratu

// function squeredNumbers(element) {
//     return element**2;
// };
// let squeredNumbersArr1 = numberArray.map(squeredNumbers);
// console.log(squeredNumbersArr1);

// // let squeredNumbersArr2 = numberArray.map(function(element) {
// //     return element**2
// // });
// // console.log(squeredNumbersArr2);

// //nowa tablica ze wszystkimi elementami typu string + jesli element zaczyna się z małej litery to zmieniamy ją na wielką

// function filterStrings (element) {
//     if (typeof element ==="string"){
//         return true;
//     }
// }

// let stringArray = testArray.filter(filterStrings);
// console.log(stringArray);

// //tu nie wiem jak to wrzucić do jednej funkcji

// stringArray.map(function(el, index, arr){
//     for (let i = index; i < arr.length; i++){
//         arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].substring(1);
//     }
// });

// console.log(stringArray);


// //Nowa tablica z imiona dłuższymi niż 5 znaków
// function filterNameLongerThanFiveChar (element) {
//     if (typeof element ==="string" && isNaN(element)=== true && element.length > 5){
//         return true;
//     }
// }

// let nameLongerThanFiveChar = testArray.filter(filterNameLongerThanFiveChar);
// console.log(nameLongerThanFiveChar);


// //nowa tablica bez wartości negatywnych
// // function filterNonNegativeValue (element) {
// //     if (typeof element !== "undefined" && element !== null)
// //         return true;
// //     }
// // let nonNegativeValueArr = testArray.filter(filterNonNegativeValue);
// // console.log("nonNegativeValueArr", nonNegativeValueArr);

const testArray = ['Szymon', 'Adrian', 'Kasia', 1, 10, undefined, null, NaN, ['kraków', 'Warszawa'], 'ala', 'basia', 20, 25, 13, 'ola', 'alan', "50", "1", "13"];

function filterNonNegativeValue (element) {
    if (element === undefined || element === null || Number.isNaN(element)===true)  {
        return false;
    } else {
        return true;
    }
}

let nonNegativeValueArr = testArray.filter(filterNonNegativeValue);
console.log("nonNegativeValueArr", nonNegativeValueArr);