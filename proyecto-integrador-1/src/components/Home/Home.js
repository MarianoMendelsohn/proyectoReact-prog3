import React, { Component } from 'react';
import './styles.css'; 
import MoviesPopulares from '../MoviesPopulares/MoviesPopulares';
import MoviesMejores from '../MoviesMejores/MoviesMejores'
// import Buscador from '../Buscador/Buscador'


let pelisPopulares = "https://api.themoviedb.org/3/movie/popular?api_key=ab1dad43417703bd59209ba154fb4880&language=en-US&page=1"
let mejoresPelis = "https://api.themoviedb.org/3/movie/popular?api_key=ab1dad43417703bd59209ba154fb4880"


class Home extends Component {

    constructor(props){
        super(props)
        this.state= {
            verMas: false,
            textoBoton: 'Ver más',
            resultadoDeBusqueda: [],
            masPopulares: [],
            lasMejores: []
        }
    }

    // buscarData(valor){
    // fetch('https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/https://api.deezer.com/search?q={valor}')
    // .then(resouesta => respuesta.json())
    // .then (data => console.log(data))
    // .then(error => console.log(error))
    // }

    componentDidMount(){

        fetch(pelisPopulares)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            this.setState({
                masPopulares: data.results,
            }
            )})
        .catch(error=> console.log(error))


        fetch(mejoresPelis)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            this.setState({
                lasMejores: data.results,
            }
        )})
        .catch(error=> console.log(error))
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

    <div className='home'>
         <h1 className='sectionTitles'>Peliculas populares</h1>
        <section className='cardContainer'>
             {
                this.state.masPopulares.length === 0 ?
                <p>Cargando...</p>
                :
                this.state.masPopulares.map((Pelicula , idx) => <MoviesPopulares key={Pelicula.name + idx} popularesData={Pelicula} />)
            } 
        </section>
        <h1 className='sectionTitles'>Las peliculas del momento</h1>
        <section className='cardContainer'>
             {
                this.state.lasMejores.length === 0 ?
                <p>Cargando...</p>
                :
                this.state.lasMejores.map((Peliculas , idx) => <MoviesMejores key={Peliculas.name + idx} lasMejoresData={Peliculas} />)
            } 
        </section>










        {/* <Buscador metodoQueBusca={(valor)=> this.buscarData}/> */}

        {/* {
            this.state.resultadoDeBusqueda.length > 0
            ?
            <Tarjetas info= {this.state.resultadoDeBusqueda}/>
            :''
        } */}

       

        

</div>

)}}

export default Home