class Car {
    constructor(name, maximumSpeed, color="white", mileage=0, fuelTank=60) {
        this.name = this.setStringValue(name, 'Default Name');
        this.maximumSpeed = this.setNumberValue(maximumSpeed, 200);
        this.color = color;
        this.speed = 0;             // km/h
        this.numberOfWheels = 4;
        this.numberOfGears = 8;
        this.fuelTank = fuelTank;   // liter
        this.fuelAmount = this.fuelTank;    //liter
        this.fuelConsum = 0.5;      // l/km
        this.haveFuel = true;
        this.mileage = mileage;     // m
        this.carAcceleration = 3.1    // m/s²
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
            console.log(`The new color of ${this.name} is ${this.color}.`)
        } else {
            throw new Error("Color value should be string");
        }
    }

    getColor = () => {
        console.log(`The color of ${this.name} is ${this.color}.`)
        return this.color;
    }

    setSpeed = (speed) => {
        if (speed > this.maximumSpeed){
            this.speed = this.maximumSpeed;
        }else if(speed < 0){
            this.speed = 0;
        }else{
            this.speed = speed;
        }
        // this.speed = speed > this.maximumSpeed ? this.maximumSpeed : speed;
        // this.speed = speed < 0 ? this.minimumSpeed : speed;
        console.log(`New speed: ${this.speed} km/h.`);
        
    }

    accelerate = (howMuch) => {
        if(this.haveFuel){
            let distance = 0
            const newHowMuch = this.setNumberValue(howMuch, 0);
            newHowMuch < 0 ? 0 : newHowMuch;
            console.log("-----------------------------")
            console.log(`${this.name} is accelerating. The current speed: ${this.speed}.`)
            this.setFuelUsed(howMuch)
            if (this.haveFuel) {distance = this.accelerateDistance(newHowMuch)}; 
            if (this.haveFuel) {this.setSpeed(this.speed + newHowMuch)};
            this.mileage += distance;
            if (this.haveFuel) {console.log(`The car needed ${distance.toFixed(2)} meter for acceleration.`)}
            if (this.haveFuel == false) {console.log(`The car run out of fuel... no accelaration posible.`)};
        }else{
            console.log("-----------------------------")
            console.log(`You try to accelerate.`)
            console.log(`${this.name} is out of fuel, fill up the fuel !!! `)
        }
        console.log(`Current mileage: ${this.getMilage().toFixed(2)} meter.`)
    }

    decelerate = (howMuch) => {
        const newHowMuch = this.setNumberValue(howMuch,0);
        newHowMuch > 0 ? newHowMuch : 0;
        console.log("-----------------------------")
        console.log(`${this.name} is decelerating.`)
        this.setSpeed(this.speed - newHowMuch);
    }

    setFuelUsed = (howMuch) => {
        const fuelUsed = this.fuelConsum * (howMuch > this.maximumSpeed - this.speed ? this.maximumSpeed - this.speed : howMuch)
        this.fuelAmount = this.fuelAmount - fuelUsed;
        if (this.fuelAmount < 0 ){
            this.fuelAmount = 0;
            this.haveFuel = false;
            console.log(`${this.name} is out of fuel`);
        }else{
            console.log(`For this acceleration you used ${fuelUsed} liter fuel.`);
        }
        console.log(`${this.fuelAmount.toFixed(2)} liter fuel left over.`);
    }

    fillUpFuel = (howMuch) => {
        if(howMuch > 0){
            console.log("-----------------------------")
            console.log(`You fill up fuel:`)
            this.haveFuel = true;
            const oldFuelAmount = this.fuelAmount;
            const howMuchFilldUp = howMuch > (this.fuelTank - this.fuelAmount) ? this.fuelTank : howMuch;
            this.fuelAmount += howMuchFilldUp; 
            console.log(`You try to fill ${howMuch}l. But ther is only space for ${howMuchFilldUp}l.`);
            console.log(`${this.name} had ${oldFuelAmount}l and you fill up ${howMuchFilldUp}l, so now are ${this.fuelAmount}l in the tank.`);
        }
    }

    accelerateDistance = (deltaV) => {  //s = 0,5 · a · t2 + vo · t + s.
        const time = (deltaV / 3.6) / this.carAcceleration;
        const distance = (0.5 * this.carAcceleration * time**2) + ((this.speed / 3.6) * time); // speed in m/s 
        return distance   // in meter
    }

    drive = (time) => {
        this.mileage = time * (this.speed / 3.6); 
        console.log("-----------------------------")
        console.log(`Car drives ${time}s with ${this.speed}km/h.`)
        console.log(`Current mileage: ${this.getMilage().toFixed(2)}m`);
    }

    getMilage = () => this.mileage;
};

// const firstCar = new Car("BMW", 180);
// firstCar.setColor("black");
// firstCar.getColor();


// const secCar = new Car("Opel");
// secCar.setColor("red");
// secCar.getColor();


// const cars = [
//     new Car(),
//     new Car("audi", "180"),
//     new Car(200),
//     new Car("")
// ]
const mojeAuto = new Car("Fiat", 190);
mojeAuto.accelerate(50);
mojeAuto.accelerate(50);
mojeAuto.drive(460);
mojeAuto.accelerate(50);
// mojeAuto.accelerate(50);
// mojeAuto.accelerate(50);
// mojeAuto.accelerate(50);
// mojeAuto.accelerate(50);
// mojeAuto.decelerate(40);
// mojeAuto.accelerate(20);
// mojeAuto.fillUpFuel(40);
// mojeAuto.accelerate(40);
// mojeAuto.fillUpFuel(200);
//mojeAuto.getColor();
//mojeAuto.setColor("pink")

// console.log(cars)
