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