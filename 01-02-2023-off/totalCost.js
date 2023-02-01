/* // Practice - 1
function totalCost (products){
    // console.log(products);
// console.log(products[0].price);
let cost = 0;
for (let i = 0; i< products.length; i++){
    let product = products[i].price;
    cost += product;
}
return cost;
}

let products = [
        { name: "Dano Milk", price: 500 }, 
        { name: "Taaza Tea", price: 200}, 
        { name: 'Fresh Sugar', price:300}
    ];

const cost = totalCost(products);
console.log(cost);


// Output: 1000 */


