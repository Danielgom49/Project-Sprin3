import { getAuth } from 'firebase/auth'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addOpinionAsync, listOpinionAsync } from '../redux/actions/actionListOpinion'
import { OpinionsBg, Title } from '../styles/StyledComponentOpinion'
import { AiFillEdit } from 'react-icons/ai'
import Edit from '../modals/Edit'

const Opinions = ({ isAuthenticated }) => {

    const dispatch = useDispatch()
    const [img, setImg] = useState('')
    const [name, setName] = useState('')
    const [edit, setEdit] = useState([])
    const [modal, setModal] = useState(false)
    const infoUser = () => {
        if (isAuthenticated) {
            const auth = getAuth()
            setImg(auth.currentUser.photoURL)
            setName(auth.currentUser.displayName)
        }
    }

    useEffect(() => {
        dispatch(listOpinionAsync())
        infoUser()
    }, [dispatch])
    const { listOpinion } = useSelector(store => store.listOpinion)


    const formik = useFormik({
        initialValues: {
            opinion: ''
        },
        validationSchema: Yup.object().shape({
            opinion: Yup.string().required()
        }),
        onSubmit: (data) => {
            const obj = {
                opinion: data.opinion,
                nameUser: name,
                imgUser: img
            }
            dispatch(addOpinionAsync(obj))
        }
    })

    const handleEdit = (opinion) => {
        let data
        listOpinion.forEach(list => (
            data = list.find(l => l.opinion === opinion)
        ))
        setModal(true)
        setEdit(data)
    }

    return (
        <div className="my-10 mx-5" >
            <Title>
                <h1 className="text-2xl font-bold pb-5">Opiniones de clientes</h1>
            </Title>
            <div>
                {
                    listOpinion.map((list) => (
                        list.map((l, index) => (
                            <OpinionsBg key={index}>
                                <div>
                                    <div className="flex flex-row justify-start items-center my-5 mb-2">
                                        <img src={l.imgUser} alt="users" className="rounded-full" width="50" />
                                        <h2 className="px-2">{l.nameUser}</h2>
                                    </div>
                                    <div className="flex flex-col justify-start items-center">
                                        <p className="py-3">{l.opinion}</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-900">A 45 personas les resultó útil</p>
                                        {name === l.nameUser ?
                                            <button onClick={() => handleEdit(l.opinion)} className="text-gray-900 flex flex-row mt-2" >Editar <AiFillEdit className="text-lg" /> </button>
                                            :
                                            <button className="text-gray-900">Informar de un abuso</button>
                                        }
                                    </div>
                                </div>
                            </OpinionsBg>
                        ))
                    ))
                }
            </div>
            {isAuthenticated ?
                <form onSubmit={formik.handleSubmit} className="flex flex-col justify-center items-start my-2 mt-5">
                    <label className="text-lg font-bold">Agrega un comentario</label>
                    <textarea id="opinion" name="opinion" row="1" col="50" className="border-2 border-solid border-black rounded w-2/5" onChange={formik.handleChange}></textarea>
                    <button type="submit" className=" my-2 border-2 border-solid border-black bg-gray-200 rounded px-3 py-1">Enviar</button>
                </form>
                :
                ''
            }
            {
                modal === true ? <Edit edit={edit} setModal={setModal} name={name} /> : ''
            }
        </div >
    )
}

export default Opinions