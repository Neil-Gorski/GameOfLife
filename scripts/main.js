//Exe 1
//100 - srebrny
//1000 - złoty
//10000 - diamentowy


const userSub = prompt("How many subscribes do You have");
console.log(userSub);
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

