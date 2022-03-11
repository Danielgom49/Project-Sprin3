import React from 'react'
import Article from '../components/Article'
import Footer from '../components/Footer'
import Historial from '../components/Historial'
import Nav from '../components/Nav'
import Opinions from '../components/Opinions'
import Options from '../components/Options'
import Products from '../components/Products'

const Home = ({ isAuthenticated }) => {
    return (
        <div>
            <Nav isAuthenticated={isAuthenticated} />
            <Options />
            <Article />
            <Products />
            <Historial />
            <Opinions />
            <Footer />
        </div>
    )
}

export default Home