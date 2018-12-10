export const orderTotal = (arrayOfOrders) => (
    arrayOfOrders.reduce((reduced, item) => reduced += item.price, 0)
)