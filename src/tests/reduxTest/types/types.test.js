import { types, typesCar, typesCrud } from "../../../redux/types/types"

describe('Verificar types', () => {
    // verficar types
    test('comparar objeto types', () => {
        expect(types).toEqual({
            login: 'login',
            logout: 'logout',
            register: 'register',
        })
    })
    // verificar typesCrud
    test('comparar objeto typesCrud', () => {
        expect(typesCrud).toEqual({
            list: 'list',
            addOpinion: 'addOpinion',
            listOpinion: 'listOpinion',
            listRelated: 'listRelated',
            listProducts: 'listProducts',
            editOpinion: 'editOpinion',
            search: 'search'
        })
    })
    // verificar typesCar
    test('comparar objeto typesCar', () => {
        expect(typesCar).toEqual({
            addCar: 'addCar',
            listCar: 'listCar',
            deleteCar: 'deleteCar',
        })
    })
})