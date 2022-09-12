import React , {Component} from 'react';

class Top10 extends Component{
    constructor(props){
        super(props)
        this.state ={

        }
    }

    componentDidMount(){
        
        let top10 = 'https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/tracks&top?limit=10'

        fetch(top10)
        .then(response => response.json())
        .then(data => this.setState(
            {data: data.data}
        ))
        .catch(error=> console.log(error))
    }


    render(){
        return(
            <div>
            <section>
            <h2 className='titulo'>TopHub</h2>

            <img src= '' alt='nombre del tema'/>

            {this.state.data.map((title)=> <h4> {title.title}</h4>)}

            { this.setState.verMas ? <p>Descripción del tema</p> : ''}

            <button onClick={()=> this.mostrarMas()}>{this.state.textoBoton}</button>

            <p>Detalle: Botón que me mande a la página de detalles.</p>

            <p>Favorito: Botón que agregue el tema a mis favs</p>
        </section>
        </div>
        )
    }




}
export default Top10