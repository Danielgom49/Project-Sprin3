import PrivateRoute from "../../routes/PrivateRoute";
import PublicRoute from "../../routes/PublicRoute";

describe('pruebas a routes', () => {
    // verificar rutas publicas
    test('valdidar ruta publica', () => {
        const isAuthenticated = <PublicRoute isAuthenticated />
        const props = !isAuthenticated.props

        if (!props.isAuthenticated) {
            console.log('Redigirir a ruta publica');
        } else {
            console.log('redirigir a ruta privada');
        }
    })
    // verificar rutas privadas
    test('validar ruta privada', () => {
        const isAuthenticated = <PrivateRoute isAuthenticated />
        const props = isAuthenticated.props

        if (props.isAuthenticated) {
            console.log('Redigirir a ruta privada');
        } else {
            console.log('redirigir a ruta publica');
        }
    })
})