import { collection, getDocs } from "firebase/firestore"
import { db } from "../../firebase/firebaseConfig"
import { typesCrud } from "../types/types"



// Listar productos
export const AllProductsAsync = () => {
    return async (dispatch) => {
        const data = await getDocs(collection(db, "article"))
        const listProducts = []
        data.forEach((doc) => {
            listProducts.push({
                ...doc.data()
            })
        })
        dispatch(AllProductsSync(listProducts))
    }
}

export const AllProductsSync = (products) => {
    return {
        type: typesCrud.listProducts,
        payload: products
    }
}
