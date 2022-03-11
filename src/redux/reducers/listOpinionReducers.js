import { typesCrud } from '../types/types'

const initialState = {
    listOpinion: []
}

export const listOpinionReducer = (state = initialState, action) => {
    switch (action.type) {
        case typesCrud.listOpinion:

            return {
                listOpinion: [action.payload]
            };

        default:
            return state;
    }
}