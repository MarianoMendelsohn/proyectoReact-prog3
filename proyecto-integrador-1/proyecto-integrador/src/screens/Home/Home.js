import React, {Component} from 'react';
import Movies from "../../components/Movies/Movies";
import MovieCard from "../../components/MovieCard/MovieCard";
let api_key = "dbc2844dc7f234cc66f323810714162c";

class Home extends Component{ 
    
    constructor(props){
        super(props)
        this.state={
            input:'',
            data:[],
        }
    }

    evitarSubmit(event){ 
        event.preventDefault()
    }
    
    guardarCambios(event){ 
        this.setState({input: event.target.value}, () => { 
            console.log(this.state.input); 
            this.busqueda() 
        });

    }

    busqueda () {
    if(this.state.input !== ''){

            fetch(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&page=1&query=${this.state.input}`)
            .then(res => res.json())
            .then(data => {
            this.setState({data: data.results}, () => console.log(data.results))
            })
        .catch(e => console.log(e))
        }
    }

    render(){
        return(
            this.state.input.length === 0 ?
            
                <React.Fragment> 
                    <h2>Home</h2>
                    <form onSubmit={(event)=>this.evitarSubmit(event)}>
                    <div className="group">
                         <svg className="icon" /*aria-hiddeventen="true"*/ viewBox="0 0 24 24"><g><path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path></g></svg> 
                        <input onChange={(event)=> this.guardarCambios(event)} value={this.state.input} placeholder="Search" type="search" className="input"/>
                    </div> 
                    </form>
                    
                    <Movies/>
                
                 </React.Fragment>

            :
                <React.Fragment> 
                    <h2>Resultados de B??squeda</h2>
                    <form onSubmit={(event)=>this.evitarSubmit(event)}>
                    <div className="group">
                        <svg className="icon" aria-hidden="true" viewBox="0 0 24 24"><g><path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path></g></svg>
                        <input onChange={(event)=> this.guardarCambios(event)} value={this.state.input} placeholder="Search" type="search" className="input"/>
                    </div> 
                    </form>
                    
                {this.state.data===[] ? <h3>Cargando...</h3>:
                this.state.data.map((unaPelicula,idx) => <MovieCard key={idx} datosPelicula = {unaPelicula}/>)
                }
                
                </React.Fragment>

            
            
        
            
        )
    }
}

export default Home;