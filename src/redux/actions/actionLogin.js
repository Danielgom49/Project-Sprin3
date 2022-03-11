import { getAuth, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import { types } from '../types/types'
import { facebook, google } from '../../firebase/firebaseConfig'

// -------- Log in con correo y contraseña
export const loginEmailPassword = (email, password) => {
    return (dispatch) => {
        const auth = getAuth()
        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                dispatch(loginSync(user.uid, user.displayName))
                console.log('Bienvenido');
            })
            .catch(error => {
                console.log(error);
                console.log('Usuario no registrado');
            })

    }
}

// ---------- log in con Google
export const loginGoogle = () => {
    return (dispatch) => {
        const auth = getAuth();
        signInWithPopup(auth, google)
            .then(({ user }) => {
                dispatch(loginSync(user.uid, user.displayName))
            })
            .catch(error => {
                console.log(error);
            })
    }
}

// ----------- log in con Facebook
export const loginFacebook = () => {
    return (dispatch) => {
        const auth = getAuth()
        signInWithPopup(auth, facebook)
            .then(({ user }) => {
                dispatch(loginSync(user.uid, user.displayName))
                console.log('bienvenido');
            })
            .catch(error => {
                console.log(error);
            })
    }
}

// ---------- log out
export const logoutAsync = () => {
    return (dispatch) => {
        const auth = getAuth()
        signOut(auth)
            .then(user => {
                dispatch(loginSync())
            }).catch(error => {
                console.log(error);
            })
    }
}

export const loginSync = (id, displayname) => {
    return {
        type: types.login,
        payload: {
            id,
            displayname
        }
    }
}