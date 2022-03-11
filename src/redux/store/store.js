import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { addCarReducer } from '../reducers/addCarReducers';
import { AllProducts } from '../reducers/AllProductsReducers';
import { listOpinionReducer } from '../reducers/listOpinionReducers';
import { listReducers } from '../reducers/listReducers';
import { listRelatedReducer } from '../reducers/listRelatedReducers';
import { loginReducers } from '../reducers/loginReducers'
import { registerReducers } from '../reducers/registerReducers';
import { searchReducers } from '../reducers/searchReducers';

const composeEnhancers = (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    login: loginReducers,
    register: registerReducers,
    list: listReducers,
    listOpinion: listOpinionReducer,
    listRelated: listRelatedReducer,
    listAllProducts: AllProducts,
    search: searchReducers,
    car: addCarReducer
})

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)

