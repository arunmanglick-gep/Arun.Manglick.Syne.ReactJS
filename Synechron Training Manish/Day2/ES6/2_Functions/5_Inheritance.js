class Vehicle {
    constructor(m) {
        this.make = m;
    }

    start() {
        return this.make + ", engine started....";
    }
}

class FourWheeler extends Vehicle {
    constructor(make = "Honda", model = "City") {
        super(make);
        this.model = model;
    }
    start() {
        return super.start() + ", model is: " + this.model;
    }

    move() {
        return "Moving like a car."
    }
}

let v1 = new FourWheeler("Ford", "Mustang");
console.log(v1.start());

let v2 = new FourWheeler();
console.log(v2.start());