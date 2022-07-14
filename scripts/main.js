const obj = {
    name: 'Andy',
    move: function () {
        return 'up';
    }
}

obj.move()
obj.name


function Car(id, name, type, color) {
    this.id = id;
    this.name = name;
    this.type = type;
}

Car.prototype.getName = function () {return this.name};

var myFirstCar = new Car('1', 'opel', 'sedan', 'black');

myFirstCar.getName();


class Car {
    constructor(id, name, type, color) {
        this.id = id;
        this.name = name;
        this.type = type;
    }

    getName() {
        return this.name;
    }
}

const mySecondCar = new Car('1', 'opel', 'sedan', 'black');

mySecondCar.name = 'bmw';

mySecondCar.getName = 'cool';
