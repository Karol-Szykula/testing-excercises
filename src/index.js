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
        return reduced = reduced + item.price
    }, 0)
}

console.log(orderTotal(orders))