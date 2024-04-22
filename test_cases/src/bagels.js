export default class Bagel {

    #price;
    #name;

    constructor(name, price = 1) {
        this.#name = name;
        this.#price = price;
    }

    getName = () => this.#name;
    getPrice = () => this.#price;
}