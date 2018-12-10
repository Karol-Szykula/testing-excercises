export const orderTotal = (arrayOfOrders) => {
    let sum = arrayOfOrders.reduce((reduced, item) => {

        if (item.quantity || item.quantity === 0) { reduced = reduced + (item.price * item.quantity) }
        else if (!item.quantity && !item.shipping) { reduced = reduced + item.price }

        return reduced

    }, 0)

    arrayOfOrders.forEach(item => {
        if (item.shipping && item.freeShipping >= sum) {

            sum += item.price
        }
    })

    return sum
}