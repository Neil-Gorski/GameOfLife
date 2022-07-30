const btnAccelerate = document.querySelector(".controlPanel__Accelerate");
const btnDecelerate = document.querySelector(".controlPanel__Decelerate");
const btnDrive = document.querySelector(".controlPanel__Drive");
const btnRefuel = document.querySelector(".controlPanel__Refuel");
const btnInfo = document.querySelector(".controlPanel__Info");

class Car {
    constructor(name, maximumSpeed, color="white", mileage=0, fuelTank=60) {
        this.name = this.setStringValue(name, 'Default Name');
        this.maximumSpeed = this.setNumberValue(maximumSpeed, 200);
        this.color = color;
        this.speed = 0;                // km/h
        this.numberOfWheels = 4;
        this.numberOfGears = 8;
        this.fuelTank = fuelTank;      // liter
        this.fuelAmount = this.fuelTank;    //liter
        this.fuelConsum = 0.08;         // l/km
        this.haveFuel = true;
        this.mileage = mileage;        // m
        this.carAcceleration = 3.1;    // m/s²
        this.carDeceleration = 6;      // m/s²
        this.carInfo()
    }

    carInfo = () => console.log(`###############\nInfo\nName : ${this.name} \nColor: ${this.color} \nFuel: ${this.fuelAmount.toFixed(2)} \nMileage: ${this.mileage.toFixed(2)}\nSpeed: ${this.speed}\n###############`)

    setStringValue = (value, defaultValue) => {
        return typeof value !== 'string' || value.length === 0 ? defaultValue : value;
    }

    setNumberValue = (value, defaultValue) => {
        return typeof value !== 'number' || Number.isNaN(value) ? defaultValue : value;
    }

    setColor(color) {
        if (typeof color === 'string') {
            this.color = color;
            console.log(`The new color of ${this.name} is ${this.color}.`);
        } else {
            throw new Error("Color value should be string");
        }
    }

    getColor = () => {
        console.log(`The color of ${this.name} is ${this.color}.`);
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
            let distance = 0;
            const newHowMuch = this.setNumberValue(howMuch, 0);
            newHowMuch < 0 ? 0 : newHowMuch;
            console.log("-----------------------------");
            console.log(`${this.name} is accelerating. The current speed: ${this.speed} km/h.`);
            if (this.speed === this.maximumSpeed){
                console.log("Car drive already with top speed!")
            }else{
                this.setFuelUsed(howMuch, false);
                if (this.haveFuel) {distance = this.accelerateDistance(newHowMuch, this.carAcceleration)}; 
                if (this.haveFuel) {this.setSpeed(this.speed + newHowMuch)};
                this.mileage += distance;
                if (this.haveFuel) {console.log(`The car needed ${distance.toFixed(2)} meter for acceleration.`)};
                if (this.haveFuel == false) {console.log(`The car run out of fuel... no accelaration posible.`)};
                this.getMilage();
            }
        }else{
            console.log("-----------------------------");
            console.log(`You try to accelerate.`);
            console.log(`${this.name} is out of fuel, fill up the fuel !!! `);
        }
    }

    decelerate = (howMuch) => {
        const newHowMuch = this.setNumberValue(howMuch,0);
        newHowMuch > 0 ? newHowMuch : 0;
        let distance = 0;
        console.log("-----------------------------");
        if(this.speed === 0){
            console.log("Car is already standing!")
        }else{
            console.log(`${this.name} is decelerating. The current speed: ${this.speed} km/h.`);
            distance = this.accelerateDistance(newHowMuch, this.carDeceleration)
            this.setSpeed(this.speed - newHowMuch);
            this.mileage += distance;
            console.log(`The car needed ${distance.toFixed(2)} meter for deceleration.`)
            this.getMilage();  
        }
    }

    setFuelUsed = (howMuch, drive) => {
        const fuelMultiplikator = drive ?  1/30 * ((this.speed + 1)**0.5) : 1/80 * ((this.speed + 1)**0.5); 
        
        const fuelUsed = (this.fuelConsum * fuelMultiplikator) * (howMuch > this.maximumSpeed - this.speed ? this.maximumSpeed - this.speed : howMuch);
        this.fuelAmount = this.fuelAmount - fuelUsed;
        if (this.fuelAmount < 0 ){
            this.fuelAmount = 0;
            this.haveFuel = false;
            console.log(`${this.name} is out of fuel`);
        }else{
            console.log(`Car used ${fuelUsed.toFixed(2)} liter fuel.`);
        }
        console.log(`${this.fuelAmount.toFixed(2)} liter fuel left over.`);
    }

    fillUpFuel = (howMuch) => {
        if(howMuch > 0 && this.speed === 0){
            console.log("-----------------------------");
            console.log(`You fill up fuel:`);
            this.haveFuel = true;
            const oldFuelAmount = this.fuelAmount;
            const howMuchFilldUp = howMuch > (this.fuelTank - this.fuelAmount) ? this.fuelTank - this.fuelAmount : howMuch;
            this.fuelAmount += howMuchFilldUp; 
            console.log(`You try to fill ${howMuch}l.`);
            console.log(`${this.name} had ${oldFuelAmount.toFixed(2)}l and you fill up ${howMuchFilldUp.toFixed(2)}l, so now are ${this.fuelAmount.toFixed(2)}l in the tank.`);
        }else{
            console.log("-----------------------------");
            console.log("You need first stop the car to fuel up.")
        }
    }

    accelerateDistance = (deltaV, accelaration) => {  //s = 0,5 · a · t2 + vo · t + s.
        const time = (deltaV / accelaration) / this.carAcceleration;
        const distance = (0.5 * this.carAcceleration * time**2) + ((this.speed / 3.6) * time); // speed in m/s 
        return distance;   // in meter
    }

    drive = (time) => {
        if (this.speed === 0){
            console.log("You need first speed up to drive.)")
        }else{
            const distance = time * (this.speed / 3.6);
            this.mileage += distance; 
            console.log("-----------------------------");
            console.log(`Car drives ${time}s with ${this.speed}km/h.`);
            this.setFuelUsed(distance, true);
            console.log(`Current mileage: ${this.mileage.toFixed(2)}m`);
        }
    }

    getMilage = () => console.log(`Current mileage: ${this.mileage.toFixed(2)} meter.`); 
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
const mojeAuto = new Car("Camaro SS", 190, "Blue");
// mojeAuto.accelerate(50);
// mojeAuto.accelerate(50);
// mojeAuto.drive(460);
// mojeAuto.accelerate(50);
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
btnAccelerate.addEventListener("click", function (){mojeAuto.accelerate(20)});
btnDecelerate.addEventListener("click", function (){mojeAuto.decelerate(40)});
btnDrive.addEventListener("click", function () {mojeAuto.drive(600)});
btnRefuel.addEventListener("click", function () {mojeAuto.fillUpFuel(15)});
btnInfo.addEventListener("click", function () {mojeAuto.carInfo()})