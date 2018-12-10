export const orderTotal = (arrayOfOrders) => (
    arrayOfOrders.reduce((reduced, item) => {
        if (item.quantity) { reduced = reduced + (item.price * item.quantity) }
        else if (!item.quantity) { reduced = reduced + item.price }
        return reduced
    }, 0)
)