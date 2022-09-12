import React, { Component } from 'react';
import './styles.css'; 
import Buscador from '../Buscador/Buscador'
import Top10 from '../Top10/Top10';


class Home extends Component {

    constructor(props){
        super(props)
        this.state= {
            topList:{},
            verMas: false,
            textoBoton: 'Ver más',
            resultadoDeBusqueda: []
        }
    }

    // buscarData(valor){
    // fetch('https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/https://api.deezer.com/search?q={valor}')
    // .then(resouesta => respuesta.json())
    // .then (data => console.log(data))
    // .then(error => console.log(error))
    // }

    

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

        <Buscador metodoQueBusca={(valor)=> this.buscarData}/>

        {/* {
            this.state.resultadoDeBusqueda.length > 0
            ?
            <Tarjetas info= {this.state.resultadoDeBusqueda}/>
            :''
        } */}

       <Top10/>

        <section>
            <h4>PainHub</h4>

            <img src='' alt='nombre del tema'/>

            <h4>Nombre del tema</h4>

            {/* { this.setState.mostrarMas ? <p>Descripción del tema</p> : ''} */}

            <button onClick={()=> this.mostrarMas()}>{this.state.textoBoton}</button>

            <p>Detalle: Botón que me mande a la página de detalles.</p>

            <p>Favorito: Botón que agregue el tema a mis favs</p>
        </section>

</div>

)}}

export default Home