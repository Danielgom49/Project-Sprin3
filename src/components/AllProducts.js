import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AllProductsAsync } from '../redux/actions/actionAllProducts'

const AllProducts = () => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(AllProductsAsync())
    }, [dispatch])
    const { listAllProducts } = useSelector(store => store.listAllProducts)


    return (
        <div>
            {
                listAllProducts.map((product) => (
                    product.map((p, index) => (
                        <div key={index} className="flex flex-row justify-center items-center my-10">
                            <img src={p.img1} alt="product" width="200" />
                            <div className="flex flex-col justify-center items-start w-3/6 mx-3 text-left">
                                <h1 className="font-medium text-xl hover:text-orange-500 hover:cursor-pointer">{p.name}</h1>
                                <h2 className="font-medium">{p.price}</h2>
                                <p>Envío GRATIS a Colombia</p>
                            </div>
                        </div>
                    ))
                ))
            }
        </div>
    )
}

export default AllProducts