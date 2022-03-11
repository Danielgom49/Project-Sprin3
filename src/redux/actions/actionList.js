import { collection, getDocs } from "firebase/firestore"
import { db } from "../../firebase/firebaseConfig"
import { typesCrud } from "../types/types"



// Listar historial
export const listAsync = () => {
    return async (dispatch) => {
        const data = await getDocs(collection(db, "history"))
        const list = []
        data.forEach((doc) => {
            list.push({
                ...doc.data()
            })
        })
        dispatch(listSync(list))
    }
}

export const listSync = (list) => {
    return {
        type: typesCrud.list,
        payload: list
    }
}