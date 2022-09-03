import React from 'react';
import './styles.css';

function Header(props) {
    return (
        <header>
            <div>
                <div className="identidad"> 
                    <ul>
                        <li>Logo de la app</li>
                        <li> <h1>Nombre de la app</h1></li>
                    </ul> 
                </div>
                <div classname="nav-bar">
                    <nav>
                    {props.menu.map((opcion, idx) =><li key={`${Date.now()}-${idx}`} >{opcion}</li>)}
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header;