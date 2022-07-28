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

    setColor(color) {
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
        this.speed = speed > this.maximumSpeed ? this.maximumSpeed : speed;
        console.log(this.speed);
    }

    accelerate(howMuch) {
        const newHowMuch = this.setNumberValue(howMuch, 0);
        newHowMuch < 0 ? 0 : newHowMuch;
        this.setSpeed(this.speed + newHowMuch);
    }

    decelerate(howMuch) {

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


// console.log(cars)
