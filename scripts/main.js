//------------------- Exe LOTTO ----
//stworzyć 49 piłeczek
//losować 6 z 49
//stworzyć kupon z 6 cyframi
//porównać 6 wylosowanych z naszym kuponem
//ilość losowań lotto żeby trafić nasz kupon


function between (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


// Generate an array of all lotto numbers 
function getLottoArray(){
    const lottoArray = [];
    for (let i = 1; i <= 49; i++ ) {
        lottoArray.push(i);
    }
    return lottoArray
}


// Get drown lotto numbers and return an array of 6 numbers
function getLottoNumbers(){
    let numbers = getLottoArray();
    let numbersDrawn = [];
    for (let i = 1; i <= 6; i++ ) {
        //wylosować cyfrę z zakresu 0-lottoArray.lenght,
        const randomIndex = between(0, numbers.length - 1);
        //wyciągamy wylosowany indeks z lottoArray za pomocą splice
        const randomBall = numbers.splice(randomIndex,1)[0];
        numbersDrawn.push(randomBall);
    }
    return numbersDrawn
}


// Compair my lotto numbers with drown lotto numbers and return the amount of corrct numbers.
function compareNumbers(myLottoNumbers, lottoNumbers){
    let correctLottoNumbers = 0;
    for (let i=0; i < myLottoNumbers.length; i++){
        if(lottoNumbers.includes(myLottoNumbers[i])){
            correctLottoNumbers ++;
        }
    }
    return correctLottoNumbers;
}

// while loop for check how many trys you need to get 6 correct lotto numbers and console.log them.
function howManyTrysForLottoNeeded(){
    let highestHit = 0;
    let trys = 0;
    let currentHit;
    console.log(`Let's play Lotto!`)

    while(highestHit < 6){
        trys ++;
        currentHit = compareNumbers(myLottoNumbers, getLottoNumbers());
        if (highestHit < currentHit){
            highestHit = currentHit;
            console.log(`You got a new heighest correct Lotto hit with ${highestHit} correct numbers on ${Intl.NumberFormat('en-US').format(trys)}th try.`);
        }
        if(trys % 1000000 === 0){
            console.log(`You had now ${trys / 1000000} million trys.`)
        }
    }
    console.log(`You got Lotto on ${Intl.NumberFormat('en-US').format(trys)}th try.`)
}


// my Lotto Numbers
const myLottoNumbers = [4, 19, 23, 7, 40, 33];

howManyTrysForLottoNeeded()
