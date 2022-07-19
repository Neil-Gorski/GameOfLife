const emptyArr = [];
const arrNotEmpty = [undefined, 'jan', 'andrzej', [43, 'krakow']];
console.log(arrNotEmpty[3][1]);

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
console.log(arrNotEmpty);
console.log(arrNotEmpty.splice(1, 1));
console.log(arrNotEmpty);

//-------------------
arrNotEmpty.indexOf('andrzej')
// arrNotEmpty.indexOf('warszawa') -> return -1



//------------------- Exe LOTTO ----
//stworzyć 49 piłeczek

//losować 6 z 49
//stworzyć kupon z 6 cyframi
//porównać 6 wylosowanych z naszym kuponem
//ilość losowań lotto żeby trafić nasz kupon

