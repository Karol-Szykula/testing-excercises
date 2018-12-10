export const orderTotal = (arrayOfOrders) => {
    let preTotal = arrayOfOrders.reduce((reduced, item) => {

        if (item.quantity || item.quantity === 0) { reduced = reduced + (item.price * item.quantity) }
        else if (!item.quantity && !item.shipping) { reduced = reduced + item.price }

        return reduced

    }, 0)

    // const shipping = arrayOfOrders.find((item => item.shipping))

    // return (
    //     (
    //         shipping &&
    //         preTotal >= (shipping.freeShipping + shipping.price)
    //     ) ?
    //         preTotal - shipping.price
    //         :
    //         preTotal
    // )

    arrayOfOrders.forEach(item => {
        if (item.shipping && item.freeShipping + item.price >= preTotal) {

            preTotal += item.price
        }
    })

    return preTotal
}