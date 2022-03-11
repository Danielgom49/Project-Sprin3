import { typesCrud } from "../types/types";

const initialState = {
    list: []
}

export const listReducers = (state = initialState, action) => {
    switch (action.type) {
        case typesCrud.list:

            return {
                list: [action.payload]
            };
        case typesCrud.addOpinion:
            return {
                list: [action.payload]
            }
        case typesCrud.editOpinion:
            return {
                ...state
            }
        default:
            return state;
    }
}