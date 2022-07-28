class Car {
    constructor(name, maximumSpeed = 230) {
        if (typeof name === 'string') {
            this.name = name
        }
        this.color = null;

        if (typeof maximumSpeed === 'number') {
            this.maximumSpeed = maximumSpeed;
        }
        this.speed = 0;
        this.numberOfWheels = 4;
        this.numberOfGears = 8;
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

    }

    accelerate(howMuch) {

    }

    decelerate(howMuch) {

    }

}

const firstCar = new Car( "BMW", 180);
firstCar.setColor("black");
firstCar.getColor();


const secCar = new Car("Opel");
secCar.setColor("red");
secCar.getColor();


const cars = [
    new Car(),
    new Car("audi", 200),
    new Car(200),
    new Car("")
]

console.log(cars)
