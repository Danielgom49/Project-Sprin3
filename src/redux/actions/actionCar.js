import { typesCar } from "../types/types"
import { addDoc, collection, deleteDoc, doc, getDocs, query, where } from "firebase/firestore"
import { db } from "../../firebase/firebaseConfig"

// ELIMINAR
export const deleteCarAsync = (name) => {
    return async (dispatch) => {
        const data = collection(db, "car")
        const q = query(data, where("name", "==", name))
        const dataQ = await getDocs(q)
        dataQ.forEach((docu) => {
            deleteDoc(doc(db, "car", docu.id))
        })
        dispatch(deleteCarSync(name))
    }
}

export const deleteCarSync = (name) => {
    return {
        type: typesCar.deleteCar,
        payload: name
    }
}


// LISTAR
export const listCarAsync = () => {
    return async (dispatch) => {
        const data = await getDocs(collection(db, "car"))
        const car = []
        data.forEach((doc) => {
            car.push({
                ...doc.data()
            })
        })
        dispatch(listCarSync(car))
    }
}

export const listCarSync = (car) => {
    return {
        type: typesCar.listCar,
        payload: car
    }
}


// AGREGAR
export const addCarAsycn = (car) => {
    return (dispatch) => {
        addDoc(collection(db, "car"), car)
            .then(resp => {
                dispatch(addCarSync(car))
                dispatch(listCarAsync())
            })
    }
}

export const addCarSync = (car) => {
    return {
        type: typesCar.addCar,
        payload: car
    }
}