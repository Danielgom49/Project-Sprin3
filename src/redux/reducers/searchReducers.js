import { typesCrud } from "../types/types";

const initialState = {
    search: []
}

export const searchReducers = (state = initialState, action) => {
    switch (action.type) {
        case typesCrud.search:

            return {
                search: action.payload
            }

        default:
            return state;
    }
}