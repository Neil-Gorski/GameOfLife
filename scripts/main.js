//Exe 1
//100 - srebrny
//1000 - złoty
//10000 - diamentowy

const userSub = parseInt(prompt("How many subscribes do You have"));
const userMonthlySub = parseInt(prompt("How many subscribiers do you get monthly?"));

if (isNaN(userSub) === false && isNaN(userMonthlySub) === false) {
    
    const userYearlySub = userMonthlySub * 12;
    const userSubNextYear = userSub + userYearlySub;
    console.log(`Your subscriptions number next year will be ${userSubNextYear}`);

    if(userSub >= 100 && userSub < 1000) {
        console.log("You have silver button");

    } else if(userSub >= 1000 && userSub < 10000) {
        console.log("You have gold button");

    } else if(userSub >= 10000) {
        console.log("You have diamond button");

    }  else {
        const needSub = 100 - userSub;
        console.log(`You need ${needSub} to reach the silver button`);
    }

} else {
    console.log('please provide valid number');
}



