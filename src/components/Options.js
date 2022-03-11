import React from 'react'
import { OptionBg, Option2Bg } from '../styles/StyledComponentsOption'
import { GiHamburgerMenu } from 'react-icons/gi'
import { logoutAsync } from '../redux/actions/actionLogin'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Options = ({ isAuthenticated, setShowCar }) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleLogout = () => {
        dispatch(logoutAsync())
    }

    const handleProducts = () => {
        if (!isAuthenticated) {
            navigate('/login')
        }
        else {
            setShowCar(false)
        }
    }

    return (
        <div>
            <OptionBg>
                <div className="flex flex-row justify-around items-center">
                    <div>
                        <button onClick={handleProducts} className="flex flex-row items-center justify-center">
                            <GiHamburgerMenu className="text-2xl" />
                            <h2 className="font-bold px-2">Todo</h2>
                        </button>
                    </div>
                    <div className="px-5">
                        <button className="font-bold">Tarjetas de regalo</button>
                    </div>
                    <div className="px-5">
                        <button className="font-bold">Prime</button>
                    </div>
                    <div className="px-5">
                        <button className="font-bold">Los Más Vendidos</button>
                    </div>
                    <div className="px-5">
                        <button className="font-bold">AmazonBasics</button>
                    </div>
                    <div className="px-5">
                        <button className="font-bold">Los más regalados</button>
                    </div>
                </div>
                <div>
                    {!isAuthenticated ?
                        <h1 className="hidden">funciona</h1>
                        :
                        <button onClick={() => handleLogout()} className="underline">Sign off</button>
                    }
                </div>
            </OptionBg>

            <Option2Bg >
                <div className="flex flex-row justify-around items-center">
                    <div className="pr-5">
                        <button className="font-bold">Electrónicos</button>
                    </div>
                    <div className="px-5">
                        <button className="">Los Más Vendidos</button>
                    </div>
                    <div className="px-5">
                        <button className="">Televisión y Video</button>
                    </div>
                    <div className="px-5">
                        <button className="">Cómputo y Tabletas</button>
                    </div>
                    <div className="px-5">
                        <button className="">Audio y Equipos de Sonido</button>
                    </div>
                </div>

            </Option2Bg>
        </div>
    )
}

export default Options