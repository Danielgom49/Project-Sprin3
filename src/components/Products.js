import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listRelatedAsync } from '../redux/actions/actionListRelated'
import { Card } from '../styles/StyledComponentHistorial'
import { Title } from '../styles/StyledComponentOpinion'

const Products = () => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(listRelatedAsync())
    }, [dispatch])
    const { listRelated } = useSelector(store => store.listRelated)

    return (
        <div className="my-10 mx-5">
            <Title>
                <h1 className="font-bold text-2xl pb-5">Productos relaciones con este artículo</h1>
            </Title>
            <div className="flex flex-wrap my-5">
                {
                    listRelated.map((list) => (
                        list.map((l, index) => (
                            <Card key={index} className="flex flex-col justify-center items-center">
                                <img src={l.img} alt="movie" width="250" />
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

export default Products