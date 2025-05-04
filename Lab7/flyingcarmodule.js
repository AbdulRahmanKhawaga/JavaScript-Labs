import Car from "./carmodule.js";

export default class FlyingCar extends Car {
    constructor(model, year) {
        super(model, year);
        this.canFly = true;
    }

    toString() {
        return `${super.toString()}, I can Fly`;
    }
}

