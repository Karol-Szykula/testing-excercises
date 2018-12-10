import { orderTotal } from './index'

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

test('Happy path failed', () => {
    expect(
        orderTotal(orders)
    ).toBe(25)
})

test('Empty order list must equals 0', () => {
    expect(
        orderTotal([])
    ).toBe(0)
})

const ordersWithQuantity = [
    {
        name: 'Lager',
        price: 10,
        quantity: 2,
    },
    {
        name: 'APA',
        price: 15,
        quantity: 1
    }
]

test('Fails to calculate sum with quantity', () => {
    expect(
        orderTotal(ordersWithQuantity)
    ).toBe(35)
})

test('Fails to calculate sum with quantity equal 0', () => {
    expect(
        orderTotal([
            {
                name: 'Lager',
                price: 10,
                quantity: 0,
            }])
    ).toBe(0)
})