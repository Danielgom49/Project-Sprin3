import { addDoc, collection, doc, getDocs, query, updateDoc, where } from "firebase/firestore"
import { db } from "../../firebase/firebaseConfig"
import { typesCrud } from "../types/types"

// EDITAR 
export const editOpinionAsync = (name, opinion) => {
    return async (dispatch) => {
        const data = collection(db, "opinions")
        const q = query(data, where("nameUser", "==", name))
        const dataQ = await getDocs(q)
        let id
        dataQ.forEach(async (docu) => {
            id = docu.id
        })
        const docRef = doc(db, "opinions", id)
        await updateDoc(docRef, opinion)
            .then(() => listOpinionSync(opinion))
        dispatch(listOpinionSync(opinion))
    }
}

export const editOpinionSycn = (opinion) => {
    return {
        type: typesCrud.editOpinion,
        payload: opinion
    }
}


// LISTAR
export const listOpinionAsync = () => {
    return async (dispatch) => {
        const data = await getDocs(collection(db, "opinions"))
        const listOpinion = []
        data.forEach((doc) => {
            listOpinion.push({
                ...doc.data()
            })
        })
        dispatch(listOpinionSync(listOpinion))
    }
}

export const listOpinionSync = (listOpinion) => {
    return {
        type: typesCrud.listOpinion,
        payload: listOpinion
    }
}

// AGREGAR

export const addOpinionAsync = (opinion) => {
    return (dispatch) => {
        addDoc(collection(db, "opinions"), opinion)
            .then(resp => {
                dispatch(addOpinionSync(opinion))
                dispatch(listOpinionAsync())
            })
    }
}

export const addOpinionSync = (opinion) => {
    return {
        type: typesCrud.addOpinion,
        payload: opinion
    }
}