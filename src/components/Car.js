import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCarAsync, listCarAsync } from '../redux/actions/actionCar'

const Car = () => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(listCarAsync())
    }, [dispatch])
    const { car } = useSelector(store => store.car)

    const handleDelete = (name) => {
        console.log(name);
        dispatch(deleteCarAsync(name))
    }

    return (
        <div>
            {
                car.map((car) => (
                    car.map((c, index) => (
                        <div key={index} className="flex flex-row justify-center items-center mb-10">
                            <img src={c.img1} alt="product" width="200" />
                            <div className="flex flex-col justify-center items-start w-3/6 mx-3 text-left">
                                <h1 className="font-medium text-xl hover:text-orange-500 hover:cursor-pointer">{c.name}</h1>
                                <h2 className="font-medium">{c.price}</h2>
                                <p>Envío GRATIS a Colombia</p>
                            </div>
                            <button onClick={() => handleDelete(c.name)} className="mx-10 border-solid border-2 border-orange-300 bg-orange-300 rounded px-5 py-2">Eliminar</button>
                        </div>
                    ))
                ))
            }
        </div>
    )
}

export default Car