// Losowanie 2h liczb od 0 do 10
// Zapisujemy poprawna odpowiedz i pytamy o wynik
// Czy podany wynik jest poprawny

// 10 pytan
// Ilosc poprawnych odpowiedzi

function between (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let correctAnswersNumb = 0;

for (let i = 0; i < 3; i++) {
    const firstRandomNumb = between(0, 10);
    const secondRandomNumb = between(0, 10);
    const correctResult = firstRandomNumb * secondRandomNumb;
    const userNumb = parseInt(prompt(`How much is ${firstRandomNumb} * ${secondRandomNumb}`));
    if (userNumb === correctResult) {
        correctAnswersNumb++;
    }
}
console.log(`You have ${correctAnswersNumb} correct answers`)



