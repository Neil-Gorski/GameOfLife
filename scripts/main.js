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

function fillArrayByNumbers(count) {
    const tempArr = [];
    for (let i = 1; i <= count; i++ ) {
        tempArr.push(i);
    }

    return tempArr;
}

function drawNumbers(lottoArray){
    const numbersDrawn = [];
    for (let i = 1; i <= 6; i++ ) {
        //wylosować cyfrę z zakresu 0-lottoArray.lenght,
        const randomIndex = between(0, lottoArray.length - 1);
        //wyciągamy wylosowany indeks z lottoArray za pomocą splice
        const randomBall = lottoArray.splice(randomIndex,1)[0];
        numbersDrawn.push(randomBall);
    }
    return numbersDrawn;
}

function compareArrays(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }

    arr1.sort(sortNum);
    arr2.sort(sortNum);

    let isEq = true;

    for(let i = 0; i < arr1.length; i++){
        if (arr1[i] !== arr2[i]) {
            isEq = false;
        }
    }
    return isEq;
}


function main() {
    let jackpot = false;
    let ticketsCount = 0;
    const myTicket = [3,5,4,7,1,9];

    while (jackpot === false) {
        const lottoArray = fillArrayByNumbers(49);
        const numbersDrawn = drawNumbers(lottoArray);
        jackpot = compareArrays(myTicket, numbersDrawn);
        ticketsCount++;
    }

    return ticketsCount;
}

console.log(main());

