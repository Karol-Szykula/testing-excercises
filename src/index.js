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
    throw new Error('Simple sum failed')
}

if (
    orderTotal([]) !== 0
) {
    throw new Error('Empty order list must equals 0')
}


// try {
//     throw new Error('Whoops!');
//   } catch (e) {
//     alert(e.name + ': ' + e.message);
//   }
