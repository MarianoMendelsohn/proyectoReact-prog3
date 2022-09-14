import React from 'react';
import './styles.css';

function Header(props) {
    return ( 

            <header className='header'>
            
                <section className = "identidad"> 
                    
                    <img className= "logo" src= './movieSlogan.jpeg' alt='MusicHub'></img> 

                     <h1 className='nombre'>Movies</h1>
                     
                </section>
                <div>
                    <nav className="navBar">
                    {props.menu.map((opcion, idx) =><li key={`${Date.now()}-${idx}`} >{opcion}</li>)}
                    </nav>
                </div>
            
            </header>
    )
}

export default Header;