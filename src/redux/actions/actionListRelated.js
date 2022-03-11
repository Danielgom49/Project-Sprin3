import { collection, getDocs } from "firebase/firestore"
import { db } from "../../firebase/firebaseConfig"
import { typesCrud } from "../types/types"

export const listRelatedAsync = () => {
    return async (dispatch) => {
        const data = await getDocs(collection(db, "related"))
        const listRelated = []
        data.forEach((doc) => {
            listRelated.push({
                ...doc.data()
            })
        })
        dispatch(listRelatedSync(listRelated))
    }
}

export const listRelatedSync = (listRelated) => {
    return {
        type: typesCrud.listRelated,
        payload: listRelated
    }
}