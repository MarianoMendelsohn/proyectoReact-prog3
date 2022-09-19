import React, {Component} from "react";
import MovieCard from "../MovieCard/MovieCard";

let api_key = "dbc2844dc7f234cc66f323810714162c"
let show ='Cargando..'; 

class TodasPeliculas extends Component {
    constructor(props){
        super(props);
        this.state ={
            peliculas:[],
            pagenumber:1, 
            input: '',
            resultadopeliculas: ''
        }
    }

    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=${this.state.pagenumber}`)
        .then(res =>res.json())
        .then(data => this.setState(
            {peliculas: data.results, 
            pagenumber: this.state.pagenumber + 1}
        ))
        .catch(e => console.log(e))
    }
    cargarmas(){ 
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=${this.state.pagenumber}`)
        .then(res =>res.json())
        .then(data => this.setState(
            {peliculas: this.state.peliculas.concat(data.results), pagenumber:this.state.pagenumber + 1} 
            ))
        .catch(e => console.log(e))


    }

    evitarSubmit(event){ 
        event.preventDefault()
    }
    guardarCambios(event){ 
        this.setState({input: event.target.value}, () => { 
    
        if(event.target.value !== ''){


            console.log(this.state.input); 
            let results = []
            results= this.state.peliculas.filter((unapelicula)=>{
                return unapelicula.title.toLowerCase().includes(event.target.value)
                
            }) 
        console.log(results)
        if(results.length === 0){
            show=`No se encontraron resultados de busqueda`;
            console.log(show);
        }
        this.setState({resultadopeliculas: results},() => console.log(this.state.resultadopeliculas))
        }

        else{ this.setState({resultadopeliculas: ''})
    }
        });
    }
    render(){ 
        
            if(this.state.peliculas.length !==0 && this.state.input.length === 0){
                show= this.state.peliculas 
                console.log(show);

            }
            else if (this.state.resultadopeliculas.length !== 0){
                show= this.state.resultadopeliculas
                console.log(show);

            }
        
        return(
            <React.Fragment> 
                <form onSubmit={(event)=>this.evitarSubmit(event)}>
                    <div className="group">
                        <svg className="icon" /*aria-hiddeventen="true"*/ viewBox="0 0 24 24"><g><path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path></g></svg>
                        <input onChange={(event)=> this.guardarCambios(event)} value={this.state.input} placeholder="Search" type="search" className="input"/>
                    </div> 
                    </form>
                <section className='cardContainer'>

                {console.log(show)}

                    {
                        show=== 'Cargando..' || show===`No se encontraron resultados de búsqueda` ? <h2> {show} </h2> : show.map((unaPelicula,idx) => <MovieCard key={unaPelicula+idx} datosPelicula={unaPelicula}  image={unaPelicula.poster_path} title={unaPelicula.original_title}/>)

                    }
                    
                </section>
                
                <button onClick={()=>this.cargarmas()}>Cargar más películas </button>
            </React.Fragment>
        )
            
    }
    }

 export default TodasPeliculas;
