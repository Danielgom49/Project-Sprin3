import { typesCrud } from "../types/types";

const initialState = {
    listAllProducts: []
}

export const AllProducts = (state = initialState, action) => {
    switch (action.type) {

        case typesCrud.listProducts:

            return {
                listAllProducts: [action.payload]
            }

        default:
            return state;
    }
}