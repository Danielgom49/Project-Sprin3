import { addCarSync, listCarSync } from "../../redux/actions/actionCar"
import { typesCar } from "../../redux/types/types"

describe('verificar action', () => {
    // verificar add carrito
    test('agregar al carrito', () => {
        const car = {
            displayname: 'Camara',
            price: '1000',
            img: ''
        }
        const actionCar = addCarSync(car)

        expect(actionCar).toEqual({
            type: typesCar.addCar,
            payload: { displayname: 'Camara', price: '1000', img: '' }
        })
    })
    // verificar list car
    test('listar en el carrito', () => {
        const car = {
            displayname: 'Camara',
            price: '1000',
            img: ''
        }
        const listCar = listCarSync(car)

        expect(listCar).toEqual({
            type: typesCar.listCar,
            payload: { displayname: 'Camara', price: '1000', img: '' }
        })
    })
})