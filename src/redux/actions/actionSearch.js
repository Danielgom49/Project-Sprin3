import { typesCrud } from "../types/types";
import { db } from '../../firebase/firebaseConfig'
import { collection, getDocs, query, where } from "@firebase/firestore";

export const searchAsync = (search) => {
    return async (dispatch) => {
        const collectionData = collection(db, "article")
        const q = query(collectionData, where("name", "==", search))
        const data = await getDocs(q)

        const product = []
        data.forEach((docu) => {
            product.push(docu.data())
        })
        dispatch(searchSync(product))
    }
}

export const searchSync = (search) => {
    return {
        type: typesCrud.search,
        payload: search
    }
}