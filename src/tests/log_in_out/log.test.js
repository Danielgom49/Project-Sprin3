import PrivateRoute from "../../routes/PrivateRoute";
import PublicRoute from "../../routes/PublicRoute";

describe('verficiar login y logout', () => {
    // verificar el login
    test('verficar login', () => {
        const isAuthenticated = <PrivateRoute isAuthenticated />
        const props = isAuthenticated.props
        if (props) {
            console.log('Usuario autenticado');
        }
    })
    // verificar logout
    test('verificar logout', () => {
        const isAuthenticated = <PublicRoute isAuthenticated />
        const props = !isAuthenticated.props
        if (!props) {
            console.log('Usuario no autenticado');
        }
    })
})