import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { types } from '../types/types'

export const registerAsync = (email, password, name) => {
    return (dispatch) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(async ({ user }) => {
                await updateProfile(auth.currentUser, { displayName: name })
                dispatch(registerSync(user.email, user.uid, user.displayName))
            })
    }
}

export const registerSync = (email, password, name) => {
    return {
        type: types.register,
        payload: {
            email,
            password,
            name
        }
    }

}