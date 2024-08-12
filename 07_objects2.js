const price = 20000;
const color = "red";

const product = {
    description  : "dell laptop",
    price : 30000,
    color,
}

const {description} = product;
console.log(description)
console.log(product.price)

const array = [1,2]
const [arrayFirstElement, arraySecondElement] = array;
console.log(arrayFirstElement,arraySecondElement)