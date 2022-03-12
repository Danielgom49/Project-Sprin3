import { loginReducers } from "../../../redux/reducers/loginReducers"
import { types } from "../../../redux/types/types"

describe('Pruebas en loginReducers', () => {
    // verficar el login
    test('debe realiza el login', () => {
        const initialState = {}
        const action = {
            type: types.login,
            payload: {
                id: '1',
                displayname: 'Daniel'
            }
        }
        const state = loginReducers(initialState, action)
        expect(state).toEqual({
            id: '1',
            name: 'Daniel'
        })
    })
    // verficar logout
    test('debe cerrar sesión', () => {
        const initialState = {
            id: '1',
            name: 'Daniel'
        }
        const action = {
            type: types.logout
        }
        const state = loginReducers(initialState, action)
        expect(state).toEqual({})
    })
    // verficar por default
    test('state por default', () => {
        const initialState = {
            id: '1',
            name: 'Daniel'
        }
        const action = {
            type: types.not
        }
        const state = loginReducers(initialState, action)
        expect(state).toEqual(initialState)
    })
})