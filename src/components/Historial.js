import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listAsync } from '../redux/actions/actionList'
import { Card } from '../styles/StyledComponentHistorial'
import { Title } from '../styles/StyledComponentOpinion'


const Historial = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(listAsync())
    }, [dispatch])
    const { list } = useSelector(store => store.list)

    return (
        <div className="my-10 mx-5">
            <Title>
                <h1 className="font-bold text-2xl pb-5">Inspirado por tu historial de búsqueda</h1>
            </Title>
            <div className="flex flex-wrap my-5">
                {
                    list.map((list) => (
                        list.map((l, index) => (
                            <Card key={index} className="flex flex-col justify-center items-center">
                                <img src={l.img} alt="movie" />
                                <div className="flex flex-col justify-center items-start mt-2">
                                    <h2>{l.name}</h2>
                                    <p className="mt-5">{l.price}</p>
                                </div>
                            </Card>
                        ))

                    ))
                }
            </div>
        </div>
    )
}

export default Historial
