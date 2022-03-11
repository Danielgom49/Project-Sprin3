import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import AllProducts from '../components/AllProducts'
import Article from '../components/Article'
import Car from '../components/Car'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import Opinions from '../components/Opinions'
import Options from '../components/Options'

const Initiation = ({ isAuthenticated }) => {

    const [article, setArticle] = useState(false)
    const [showCar, setShowCar] = useState(false)
    const { search } = useSelector(store => store.search)

    return (
        <div>
            <Nav isAuthenticated={isAuthenticated} setShowCar={setShowCar} />
            <Options isAuthenticated={isAuthenticated} setShowCar={setShowCar} />
            {search == 0 ?
                <div>
                    {showCar ?
                        <Car />
                        :
                        <AllProducts />
                    }
                </div>
                :
                <div className="flex justify-center my-10">
                    {!article ?
                        search.map((p, index) => (
                            <button onClick={() => setArticle(true)} key={index} className="flex flex-row justify-center items-center">
                                <img src={p.img1} alt="product" width="200" />
                                <div className="flex flex-col justify-center items-start w-3/6 mx-3 text-left">
                                    <h1 className="font-medium text-xl hover:text-orange-500 hover:cursor-pointer">{p.name}</h1>
                                    <h2 className="font-medium">{p.price}</h2>
                                    <p>Envío GRATIS a Colombia</p>
                                </div>
                            </button>
                        ))
                        :
                        <div>
                            {showCar ?
                                <Car />
                                :
                                <div>
                                    <Article isAuthenticated={isAuthenticated} />
                                    <Opinions isAuthenticated={isAuthenticated} />
                                </div>
                            }
                        </div>
                    }
                </div>
            }
            <Footer />
        </div>
    )
}

export default Initiation