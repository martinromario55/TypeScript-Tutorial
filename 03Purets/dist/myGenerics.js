"use strict";
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
// identityThree("3")
function identityFour(val) {
    return val;
}
// identityFour<Bottle>({})
// Generic Arrays
function getSearchProducts(products) {
    // do something
    const myIndex = 3;
    return products[myIndex];
}
// Generic Arrow functions
const getSearchProducts2 = (products) => {
    // do something
    const myIndex = 3;
    return products[myIndex];
};
function anotherFunction(valOne, valTwo) {
    return {
        valOne,
        valTwo,
    };
}
class sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
