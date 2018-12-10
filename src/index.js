export const orderTotal = (arrayOfOrders) => (
    arrayOfOrders.reduce((reduced, item) => {
        if (item.quantity || item.quantity === 0) { reduced = reduced + (item.price * item.quantity) }
        else if (!item.quantity && !item.shipping) { reduced = reduced + item.price }
        if (item.shipping && item.freeShipping >= reduced) { reduced += item.price }
        return reduced
    }, 0)
)