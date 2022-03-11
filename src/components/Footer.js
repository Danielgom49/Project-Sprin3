import React from 'react'
import { Link } from 'react-router-dom'
import { FooterBg, LogFooter } from '../styles/StyledComponentFooter'

const Footer = () => {
    return (
        <div>
            <FooterBg>
                <div>
                    <h1 className="font-bold my-3">Conócenos</h1>
                    <ul>
                        <li>Trabajar en Amazon</li>
                        <li>Información corporativa</li>
                        <li>Departamento de prensa</li>
                    </ul>
                </div>
                <div>
                    <h1 className="font-bold my-3">Gana dinero con nosotros</h1>
                    <ul>
                        <li>Vender en Amazon</li>
                        <li>Vender en Amazon Handmade</li>
                        <li>Publica tu libro en Kindle</li>
                        <li>Programa de afiliados</li>
                        <li>Anuncia tus productos</li>
                    </ul>
                </div>
                <div>
                    <h1 className="font-bold my-3">Podemos ayudarte</h1>
                    <ul>
                        <li>Amazon y COVID-19</li>
                        <li>Devolver o reemplazar productos</li>
                        <li>Gestionar contenido y dispositivos</li>
                        <li>Ayuda</li>
                    </ul>
                </div>
                <div>
                    <h1 className="font-bold my-3">Métodos de trabajo</h1>
                    <ul>
                        <li>Tarjetas de crédito y débito</li>
                        <li>Tarjetas de regalo</li>
                        <li>Meses sin intereses</li>
                        <li>Amazon Cash</li>
                        <li>Amazon Recargable</li>
                    </ul>
                </div>
            </FooterBg>
            <LogFooter>
                <Link to="/home">
                    <img src="https://res.cloudinary.com/dvcxyjkko/image/upload/v1646247053/proyecto-sprint3/image_1_jj6o0g.svg" alt="logo" />
                </Link>
            </LogFooter>
        </div>
    )
}

export default Footer