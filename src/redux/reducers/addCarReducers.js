import { typesCar } from '../types/types'

const initialState = {
    car: []
}

export const addCarReducer = (state = initialState, action) => {
    switch (action.type) {
        case typesCar.addCar:

            return {
                car: [action.payload]
            };

        case typesCar.listCar:
            return {
                car: [action.payload]
            }

        case typesCar.deleteCar:
            return {
                car: state.car.filter(car => car.name !== action.payload)
            }

        default:
            return state;
    }
}