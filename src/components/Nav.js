import React, { useEffect, useState } from 'react'
import { NavBg, ButtonSearched } from '../styles/StyledComponentNav'
import { MdOutlineLocationOn } from 'react-icons/md'
import { HiSearch } from 'react-icons/hi'
import { HiOutlineShoppingCart } from 'react-icons/hi'
import { Link, useNavigate } from 'react-router-dom'
import { IoMdArrowDropdown } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { searchAsync } from '../redux/actions/actionSearch'
import { listCarAsync } from '../redux/actions/actionCar'
import Location from '../modals/Location'


const Nav = ({ isAuthenticated, setShowCar }) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [modal, setModal] = useState(false)
    const [location, setLocation] = useState()
    const formik = useFormik({
        initialValues: {
            search: ""
        },
        validationSchema: Yup.object({
            search: Yup.string().required()
        }),
        onSubmit: ({ search }) => {
            dispatch(searchAsync(search))
        }
    })

    const petition = () => {
        if (!isAuthenticated) {
            navigate('/login')
        }
        else {
            navigate('/*')
        }
    }

    const handleCar = () => {
        if (!isAuthenticated) {
            navigate('/login')
        }
        else {
            setShowCar(true)
        }
    }

    useEffect(() => {
        dispatch(listCarAsync())
    }, [dispatch])
    const { car } = useSelector(store => store.car)

    return (
        <NavBg>
            <Location state={modal} setState={setModal} setLocation={setLocation} />
            <div>
                <Link to="/home">
                    <img src="https://res.cloudinary.com/dvcxyjkko/image/upload/v1646247053/proyecto-sprint3/image_1_jj6o0g.svg" alt="logo" />
                </Link>
            </div>
            <div className="flex flex-col justify-center items-start text-white text-sm">
                <h2 className="px-6">Hola</h2>
                <button onClick={() => setModal(!modal)} className="flex flex-row justify-around items-center"><MdOutlineLocationOn className="text-2xl" /> {location === undefined ? 'Elige tu dirección' : location}</button>
            </div>
            <form onSubmit={formik.handleSubmit} className="flex flex-row justify-center items-center">
                <div>
                    <select className="bg-gray-200 text-gray-800 px-1 py-2 rounded-l-lg text-base  hover:cursor-pointer" >
                        <option>Todos los departamentos</option>
                        <option>Arte y Artesanías</option>
                        <option>Automotriz</option>
                    </select>
                </div>

                <div>
                    <input type="name" name="search" placeholder="Canon EOS R6 - Cámara sin Espejo de Marco" onChange={formik.handleChange} className="text-black text-sm w-12/12" />
                </div>
                <div >
                    <ButtonSearched type="submit"> <HiSearch className="text-2xl" /> </ButtonSearched>
                </div>
            </form>
            <button onClick={petition} className="flex flex-col justify-center items-center text-white text-sm">
                {!isAuthenticated ?
                    <div className="px-1">
                        <h2>Hola, identifícate</h2>
                    </div>

                    :
                    ''
                }
                <div className='font-bold flex flex-row items-center justify-center'>
                    <p>Cuenta y Listas</p>
                    <IoMdArrowDropdown className='text-xl' />
                </div>
            </button>
            <div>
                <button onClick={petition} className="flex flex-col justify-center items-start text-white text-sm">
                    <h2>Devoluciones</h2>
                    <h2 className="font-bold">Y Pedidos</h2>
                </button>
            </div>
            <div>
                <button onClick={handleCar} className="flex flex-row justify-center items-center text-white">
                    <div className="text-4xl">
                        <HiOutlineShoppingCart />
                    </div>
                    <div>
                        {!isAuthenticated ?
                            <h1>0</h1>
                            :
                            car.map((car, index) => (
                                <h1 key={index}>{car.length}</h1>
                            ))
                        }
                        <h2 className="text-sm">Carrito</h2>
                    </div>
                </button>
            </div>
        </NavBg>
    )
}

export default Nav