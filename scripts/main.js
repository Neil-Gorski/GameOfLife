class Car {
    constructor(name, maximumSpeed) {
        this.name = this.setStringValue(name, 'Default Name');
        this.maximumSpeed = this.setNumberValue(maximumSpeed, 200);

        this.speed = 0;
        this.numberOfWheels = 4;
        this.numberOfGears = 8;
    }

    setStringValue = (value, defaultValue) => {
        return typeof value !== 'string' || value.length === 0 ? defaultValue : value;
    }

    setNumberValue = (value, defaultValue) => {
        return typeof value !== 'number' || Number.isNaN(value) ? defaultValue : value;
    }

    setColor = (color) =>{
        if (typeof color === 'string') {
            this.color = color;
        } else {
            throw new Error("Color value should be string");
        }
    }

    getColor() {
        // console.log('THIS --> ', this);
        return this.color;
    }

    setSpeed(speed) {
        this.speed = speed > this.maximumSpeed ? this.maximumSpeed : speed; //dorobic minimum
    }

    accelerate(howMuch) {
        const newHowMuch = this.setNumberValue(howMuch, 0);
        this.setSpeed(this.speed + newHowMuch);
    }

    decelerate(howMuch) {
        const howMuchDecelerate = this.setNumberValue(howMuch, 0);
        this.setSpeed(this.speed - howMuchDecelerate <0 ? 0 : this.speed - howMuchDecelerate);
    }

}

const firstCar = new Car("BMW", 180);
firstCar.setColor("black");
firstCar.getColor();


const secCar = new Car("Opel");
secCar.setColor("red");
secCar.getColor();


// const cars = [
//     new Car(),
//     new Car("audi", "180"),
//     new Car(200),
//     new Car("")
// ]
const mojeAuto = new Car("Fiat", 190);
mojeAuto.accelerate(50);
mojeAuto.accelerate(60);
mojeAuto.accelerate(100);
mojeAuto.decelerate(10);
mojeAuto.decelerate(40);
mojeAuto.decelerate(100);
mojeAuto.decelerate(50);

// console.log(cars)




//-----------------------------------------




class Person {
    constructor() {
        this.hitPoints = 0;
        this.strength = 0;
    }

    isAlive() {
        return this.hitPoints > 0;
    }
}


class Character extends Person {
    constructor() {
        super();

        this.isAlive();

    }

    isAlive() {
        return this.hitPoints > 100;
    }

}


const character = new Character();
const hero = new Character();

const firstPerson = new Person();

hero.isAlive();
character.isAlive();


character.isAlive();


function testFun(anyCharacter) {
    if (anyCharacter instanceof Character) {
        return anyCharacter.isAlive();
    }
}


console.log("character instanceof Character:", character instanceof Character);
console.log("hero instanceof Person:", hero instanceof Person);
console.log("firstPerson instanceof Person:", firstPerson instanceof Person);
console.log("firstPerson instanceof Character):", firstPerson instanceof Character);


