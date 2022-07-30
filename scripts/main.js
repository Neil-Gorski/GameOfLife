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
    //     return typeof color === 'string' ? this.color = color : throw new Error("Color value should be string");
    // }
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
        console.log(this.speed);
    }

    //ponizej podzło coś nie tak
    accelerate(howMuch) {
        const newHowMuch = this.setNumberValue(howMuch, 0);
        this.setSpeed(this.speed + newHowMuch);
    }

    decelerate(howMuch) {
        const howMuchDecelerate = this.setNumberValue(howMuch, 0);
        this.setSpeed(this.speed - howMuchDecelerate <0 ? 0 : this.speed - howMuchDecelerate);

//dorobić trzeba odejmowac predkosc i dorobic set speed nie moze byc ponizej zera
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
