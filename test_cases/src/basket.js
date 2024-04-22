import Bagel from "./bagels.js";
export default class Basket { 
    //Properties
    #basket = [];

    //behaviour

    getBasket = () => this.#basket;
    

    addBagel = (bagel) => { 
        if (!(bagel instanceof Bagel)) {
            return;
        } else { 
            this.#basket.push(bagel);
        }
    }
}










// export const basket = {
//   addBagel: function (bagel) {
//         this.items.push(bagel);
// },
//     items: [],
// };

