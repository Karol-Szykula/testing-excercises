const orders = [
    {
        name: 'Lager',
        price: 10
    },
    {
        name: 'APA',
        price: 15
    }
]

const orderTotal = (arrayOfOrders) => {
    return arrayOfOrders.reduce((reduced, item, index, array) => {
        return reduced += item.price
    }, 0)
}

console.log(orderTotal(orders))

if (
    orderTotal(orders) !== 25
) {
    throw new Error('Wrong value')
}


// try {
//     throw new Error('Whoops!');
//   } catch (e) {
//     alert(e.name + ': ' + e.message);
//   }
