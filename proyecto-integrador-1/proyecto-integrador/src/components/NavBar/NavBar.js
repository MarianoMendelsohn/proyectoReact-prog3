import React from 'react';
import {Link} from 'react-router-dom';
import './styles.css'

function Navbar(){
    return (
        <nav>
            <Link to={'/'}>
                <img className="logo" src="./movieSlogan.jpeg" alt=""/>
            </Link>
            
            <ul className="main-nav">

            <li className='li-nav'>
               <Link to='/'><span>Home</span></Link>
            </li>

            <li className='li-nav'>
                <Link to='/favoritos'><span>Favoritos</span></Link>
            </li>

            <li className='li-nav'>
                <Link to='/peliculas'><span>Películas</span></Link>
            </li>

            <li className='li-nav'>
                <Link to='/series'><span>Series</span></Link>
            </li>
            
           

            </ul>
        </nav>
    )
}

export default Navbar