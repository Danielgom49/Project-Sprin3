import { loginSync } from "../../../redux/actions/actionLogin"
import { types } from "../../../redux/types/types"

describe('verificar acciones de login', () => {
    // verficar login sincronico
    test('verificar login sincronico', () => {
        const id = '1'
        const displayname = 'Daniel'

        const actionLogin = loginSync(id, displayname)
        expect(actionLogin).toEqual({
            type: types.login,
            payload: {
                id,
                displayname
            }
        })
    })
})