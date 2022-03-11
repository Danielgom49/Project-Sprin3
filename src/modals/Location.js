import React, { useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import styled from 'styled-components'

const Modal = styled.div`
    width: 100vw;
    height: 100vh;
    position:fixed;
    top:0;
    left:0;
    background-color: rgba(0, 0, 0, .5);
    display: flex;
    justify-content: center;
    align-items: flex-start;

    `

const Location = ({ children, state, setState, setLocation }) => {

    const [search, setSearch] = useState({
        location: ''
    })
    const { location } = search

    const handleSubmit = (e) => {
        e.preventDefault()
        setState(false)
        setLocation(search.location)
    }

    const handleOnchange = ({ target }) => {
        setSearch({
            ...search,
            [target.name]: target.value
        })
    }

    return (
        <>
            {state &&
                <Modal>
                    <div className="p-10 bg-white mt-5 rounded-lg w-2/5">
                        <div className="flex justify-end ">
                            <button onClick={() => setState(false)} className="bg-black p-1 rounded-full text-white" ><IoMdClose /></button>
                        </div>
                        <h1 className="font-bold text-xl">Elige tu dirección</h1>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <input className="border-2 border-solid border-black rounded-lg h-10 w-full my-2" type="text" name="location" placeholder=" Ingresa tu dirección" value={location} onChange={handleOnchange} />
                            </div>
                            <div>
                                <button className="w-full bg-orange-400 py-2 my-2 rounded-lg text-white">Buscar</button>
                            </div>
                        </form>
                        {children}
                    </div>
                </Modal>
            }
        </>)
}

export default Location