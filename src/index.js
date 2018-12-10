export const orderTotal = (arrayOfOrders) => {
    const preTotal = arrayOfOrders.reduce(
        (reduced, item) => (
            item.quantity !== undefined ?
                reduced + (item.price * item.quantity)
                :
                reduced + item.price
        ),
        0
    )

    const shipping = arrayOfOrders.find(item => item.shipping)

    return (
        shipping ?
            preTotal >= (shipping.freeShipping + shipping.price) ?
                preTotal - shipping.price
                :
                preTotal
            :
            preTotal
    )
}

export const fetchOrdersAndCalculateTotal = () => (
    fetch('https://ad-snadbox.firebaseio.com/jfddl6/orders.json')
        .then(r => r.json())
        .then(data => orderTotal(data))
)

console.log(fetchOrdersAndCalculateTotal())