// Losowanie 2h liczb od 0 do 10
// Zapisujemy poprawna odpowiedz i pytamy o wynik
// Czy podany wynik jest poprawny

// 10 pytan
// Ilosc poprawnych odpowiedzi

//Ile  ma być pytań
//Pytamy tyle razy aż  użytkownik poda odpowiednią wartość

function between (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


function getNumberOfQuestions() {
    
    const answer = prompt('How many questions do you want?');
    if(answer === null){
        return null
    }
    return parseInt(answer);

}

function isNumberOfQuestionIncorrect(count){

    return isNaN(count) || count == 1;
}

let numberOfQuestions;
let correctAnswersNumb = 0;


do {
    numberOfQuestions = getNumberOfQuestions();
    if (numberOfQuestions === null) break;
}while (isNumberOfQuestionIncorrect(numberOfQuestions));



if(numberOfQuestions !== null){
    for (let i = 0; i < numberOfQuestions; i++) {
        const firstRandomNumb = between(0, 10);
        const secondRandomNumb = between(0, 10);
        const correctResult = firstRandomNumb * secondRandomNumb;
        const userNumb = parseInt(prompt(`How much is ${firstRandomNumb} * ${secondRandomNumb}`));
        if (userNumb === correctResult) {
         correctAnswersNumb++;
     }
    }
    console.log(`You have ${correctAnswersNumb} correct answers`);
    console.log(`You had ${correctAnswersNumb} of ${numberOfQuestions}`);
    const rightAnswerRatio = correctAnswersNumb / numberOfQuestions;
    if(rightAnswerRatio >= 0.5){
        console.log("You have pass!");
    }else{
        console.log("You have faild!");
    }
    console.log(`You have ${Math.round(rightAnswerRatio * 100)}% right!`);
}




//komentarz