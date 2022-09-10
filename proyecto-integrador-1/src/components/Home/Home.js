import React, { Component } from 'react';
import './styles.css'; 


class Home extends Component {

    constructor(props){
        super(props)
        this.state= {
            verMas: false,
            textoBoton: 'Ver más'
        }
    }

    mostrarMas(){
        if (this.state.verMas) {
            this.setState({
                verMas: false,
                textoBoton: 'Ver más'
            })
        } else {
            this.setState({
                verMas: true,
                textoBotón: 'Ver menos'
            })
        }
    }

    render(){

    return(

    <div>

        <section>
            <h2>TopHub</h2>

            <img src='' alt='nombre del tema'/>

            <h4>Nombre del tema</h4>

            { this.setState.verMas ? <p>Descripción del tema</p> : ''}

            <button onClick={()=> this.mostrarMas()}>{this.state.textoBoton}</button>

            <p>Detalle: Botón que me mande a la página de detalles.</p>

            <p>Favorito: Botón que agregue el tema a mis favs</p>
        </section>

        <section>
            <h4>PainHub</h4>

            <img src='' alt='nombre del tema'/>

            <h4>Nombre del tema</h4>

            { this.setState.mostrarMas ? <p>Descripción del tema</p> : ''}

            <button onClick={()=> this.mostrarMas()}>{this.state.textoBoton}</button>

            <p>Detalle: Botón que me mande a la página de detalles.</p>

            <p>Favorito: Botón que agregue el tema a mis favs</p>
        </section>

</div>

)}}

export default Home