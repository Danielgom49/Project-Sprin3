import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Title, Section1, Section2, Card, Buy } from '../styles/StyledComponentArticle'
import { useDispatch, useSelector } from 'react-redux'
import ReactImageMagnify from 'react-image-magnify'
import { addCarAsycn } from '../redux/actions/actionCar'

const Article = ({ isAuthenticated }) => {

    const obj = {
        img1: 'https://res.cloudinary.com/dvcxyjkko/image/upload/v1646267056/proyecto-sprint3/Rectangle_36_akwb1t.svg',
        img2: 'https://res.cloudinary.com/dvcxyjkko/image/upload/v1646699304/proyecto-sprint3/img-2_y22edq.svg',
        img3: 'https://res.cloudinary.com/dvcxyjkko/image/upload/v1646699306/proyecto-sprint3/img-3_rmhrkz.svg'
    }
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [image, setImage] = useState()
    const changeImage = (element) => {
        setImage(element)
    }
    const { search } = useSelector(store => store.search)

    const handleCar = () => {
        if (isAuthenticated) {
            search.forEach((element) => {
                const { img1, name, price } = element
                const objCar = {
                    img1,
                    name,
                    price
                }
                dispatch(addCarAsycn(objCar))
            });
        }
        else {
            navigate('/login')
        }
    }

    return (
        <div className="mt-5">

            {search == 0 ?
                <div className="flex flex-row justify-around items-start mb-5 mx-5">
                    <div>
                        <img src={obj.img1} alt='produc' width='60' onClick={() => changeImage(obj.img1)} />
                        <img src={obj.img2} alt='produc' width='60' onClick={() => changeImage(obj.img2)} />
                        <img src={obj.img3} alt='produc' width='60' onClick={() => changeImage(obj.img3)} />
                    </div>

                    {/* IMAGEN */}
                    <div className='w-3/5'>
                        {image !== undefined ?
                            <ReactImageMagnify {...{
                                smallImage: {
                                    alt: 'product',
                                    isFluidWidth: true,
                                    src: image
                                },
                                largeImage: {
                                    src: image,
                                    width: 1000,
                                    height: 1600
                                },
                                shouldUsePositiveSpaceLens: true
                            }} />
                            :
                            <ReactImageMagnify {...{
                                smallImage: {
                                    alt: 'product',
                                    isFluidWidth: true,
                                    src: obj.img1
                                },
                                largeImage: {
                                    src: obj.img1,
                                    width: 1000,
                                    height: 1600
                                },
                                shouldUsePositiveSpaceLens: true
                            }} />
                        }
                    </div>
                    {/* SECTION1 */}
                    <div>
                        <Title className="mx-5">
                            <h1 className="font-bold">Canon EOS R6 - Cámara sin Espejo de Marco Completo + Lente RF24-105mm F4 L IS USM</h1>
                            <p>Marca: Canon</p>
                        </Title>
                        <Section1 className="mx-5">
                            <div className="flex flex-row justify-start items-center pb-3">
                                <h3>Precio:</h3>
                                <p className="px-3">$100,669.00</p>
                                <h3 className='font-bold px-3'>Envío GRATIS.</h3>
                                <button>Detalles</button>
                            </div>
                            <div className='flex flex-row justify-start items-center pb-3'>
                                <h3>Hasta <strong>18 meses sin intereses</strong> de %5,592.76.</h3>
                                <button className='px-3'>Ver mensualidades</button>
                            </div>
                            <div>
                                <h3 className='w-3/4 pb-3'><button>Solicita tu tarjeta Amazon Recargable</button> y obtén $100 de descuento en tu primera compra mayor a $500</h3>
                                <h3 className='pb-3'>Estilo: <strong>24-105mm USM Kit</strong></h3>
                            </div>
                        </Section1>
                        {/* SECTION2 */}
                        <Section2 className='mx-5'>
                            <h1 className='font-bold text-lg pb-3'>Acerca de este articulo</h1>
                            <ol>
                                <li>- Alta calidad de imagen con un nuevo sensor CMOS de marco completo de 20 megapíxeles.</li>
                                <li>- Procesador de imagen DIGIC X con una gama ISO de 100-102400; ampliable a 204800.</li>
                                <li>- Disparo continuo de alta velocidad de hasta 12 fps con obturador mecánico y obturador electrónico (silencioso) de hasta 20 fps.</li>
                                <li>- CMOS AF de doble pixel, cubre aproximadamente Área 100% con 1.053 AF.</li>
                                <li>- Seguimiento de asuntos de personas y animales* utilizando tecnología de aprendizaje profundo.</li>
                            </ol>
                        </Section2>
                    </div>
                    <Card>
                        <div>
                            <h1 className='text-lg pb-3'>$100,669.00</h1>
                        </div>
                        <div className='flex flex-row py-2'>
                            <p>Envío GRATIS.</p>
                            <button className='px-2'>Detalles</button>
                        </div>
                        <div>
                            <p className='py-2'>Llega: <strong>dic 15 - 28</strong></p>
                        </div>
                        <Buy>
                            <button onClick={() => navigate('/login')} className="bg-yellow-500">
                                <img src="https://res.cloudinary.com/dvcxyjkko/image/upload/v1646271286/proyecto-sprint3/shopping-cart_bve1sb.svg" alt="icon" className='pr-2' />
                                Agregar al Carrito
                            </button>
                            <button className="bg-orange-400">
                                <img src="https://res.cloudinary.com/dvcxyjkko/image/upload/v1646271283/proyecto-sprint3/play_tzrbd8.svg" alt="icon" className='pr-2' />
                                Comprar Ahora
                            </button>
                        </Buy>
                        <div className="text-center">
                            <button>Transacción segura</button>
                        </div>
                    </Card >
                </div>
                :
                search.map((product, index) => (
                    <div key={index} className="flex flex-row justify-around items-start mb-5 mx-5">

                        <div>
                            <img src={product.img1} alt='produc' width='50' className='py-1' onClick={() => changeImage(product.img1)} />
                            <img src={product.img3} alt='produc' width='50' className='py-1' onClick={() => changeImage(product.img3)} />
                            <img src={product.img4} alt='produc' width='50' className='py-1' onClick={() => changeImage(product.img4)} />
                        </div>

                        {/* IMAGEN */}
                        <div className='pl-2 w-3/5'>
                            {image !== undefined ?
                                <ReactImageMagnify {...{
                                    smallImage: {
                                        alt: 'product',
                                        isFluidWidth: true,
                                        src: image
                                    },
                                    largeImage: {
                                        src: image,
                                        width: 1000,
                                        height: 1600
                                    },
                                    shouldUsePositiveSpaceLens: true
                                }} />
                                :
                                <ReactImageMagnify {...{
                                    smallImage: {
                                        alt: 'product',
                                        isFluidWidth: true,
                                        src: product.img1
                                    },
                                    largeImage: {
                                        src: product.img1,
                                        width: 1200,
                                        height: 1200
                                    },
                                    shouldUsePositiveSpaceLens: true
                                }} />
                            }
                        </div>
                        {/* SECTION1 */}
                        <div>
                            <Title className="mx-5">
                                <h1 className="font-bold"> {product.name}</h1>
                                <p>Marca: {product.marca}</p>
                            </Title>
                            <Section1 className="mx-5">
                                <div className="flex flex-row justify-start items-center pb-3">
                                    <h3>Precio:</h3>
                                    <p className="px-3">{product.price}</p>
                                    <h3 className='font-bold px-3'>Envío GRATIS.</h3>
                                    <button>Detalles</button>
                                </div>
                                <div className='flex flex-row justify-start items-center pb-3'>
                                    <h3>Hasta <strong>18 meses sin intereses</strong> de %5,592.76.</h3>
                                    <button className='px-3'>Ver mensualidades</button>
                                </div>
                                <div>
                                    <h3 className='w-3/4 pb-3'><button>Solicita tu tarjeta Amazon Recargable</button> y obtén $100 de descuento en tu primera compra mayor a $500</h3>
                                    <h3 className='pb-3'>Estilo: <strong>{product.style}</strong></h3>
                                </div>
                            </Section1>
                            {/* SECTION2 */}
                            <Section2 className='mx-5'>
                                <h1 className='font-bold text-lg pb-3'>Acerca de este articulo</h1>
                                <ol>
                                    {product.description}
                                </ol>
                            </Section2>
                        </div>
                        <Card>
                            <div>
                                <h1 className='text-lg pb-3'>{product.price}</h1>
                            </div>
                            <div className='flex flex-row py-2'>
                                <p>Envío GRATIS.</p>
                                <button className='px-2'>Detalles</button>
                            </div>
                            <div>
                                <p className='py-2'>Llega: <strong>dic 15 - 28</strong></p>
                            </div>
                            <Buy>
                                <button onClick={handleCar} className="bg-yellow-500">
                                    <img src="https://res.cloudinary.com/dvcxyjkko/image/upload/v1646271286/proyecto-sprint3/shopping-cart_bve1sb.svg" alt="icon" className='pr-2' />
                                    Agregar al Carrito
                                </button>
                                <button className="bg-orange-400">
                                    <img src="https://res.cloudinary.com/dvcxyjkko/image/upload/v1646271283/proyecto-sprint3/play_tzrbd8.svg" alt="icon" className='pr-2' />
                                    Comprar Ahora
                                </button>
                            </Buy>
                            <div className="text-center">
                                <button>Transacción segura</button>
                            </div>
                        </Card >
                    </div >
                ))
            }
        </div>


    )
}

export default Article