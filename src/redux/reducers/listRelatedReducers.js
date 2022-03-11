import { typesCrud } from '../types/types'

const initialState = {
    listRelated: []
}

export const listRelatedReducer = (state = initialState, action) => {
    switch (action.type) {
        case typesCrud.listRelated:

            return {
                listRelated: [action.payload]
            };

        default:
            return state;
    }
}