import React from 'react';
import './styles.css';

function Header(props) {
    return (
        <header>
            <div>
                <div ClassName="identidad"> 
                    
                    <img ClassName='logo' src= './MusicHubLogo.jpeg' alt='MusicHub'></img> 

                     <h1>MusicHub</h1>
                     
                </div>
                <div ClassName="nav-bar">
                    <nav>
                    {props.menu.map((opcion, idx) =><li key={`${Date.now()}-${idx}`} >{opcion}</li>)}
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header;