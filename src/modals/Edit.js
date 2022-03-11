import { useFormik } from 'formik'
import * as Yup from 'yup'
import React from 'react'
import { IoMdClose } from 'react-icons/io'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { editOpinionAsync } from '../redux/actions/actionListOpinion'

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

const Edit = ({ children, edit, setModal, name }) => {

    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            nameUser: edit.nameUser,
            imgUser: edit.imgUser,
            opinion: edit.opinion
        },
        validationSchema: Yup.object().shape({
            opinion: Yup.string().required()
        }),
        onSubmit: (data) => {
            dispatch(editOpinionAsync(name, data))
            setModal(false)
        }
    })

    return (
        <>
            <Modal>
                <div className="p-10 bg-white mt-5 rounded-lg w-2/5">
                    <div className="flex justify-end ">
                        <button onClick={() => setModal(false)} className="bg-black p-1 rounded-full text-white" ><IoMdClose /></button>
                    </div>
                    <h1 className="font-bold text-xl">Editar Comentario</h1>
                    <form onSubmit={formik.handleSubmit}>
                        <div>
                            <textarea id="opinion" name="opinion" row="1" col="50" className="border-2 border-solid border-black rounded w-full" onChange={formik.handleChange}></textarea>
                        </div>
                        <div>
                            <button type='submit' className="w-full bg-orange-400 py-2 my-2 rounded-lg text-white">Enviar</button>
                        </div>
                    </form>
                    {children}
                </div>
            </Modal>
        </>)
}

export default Edit