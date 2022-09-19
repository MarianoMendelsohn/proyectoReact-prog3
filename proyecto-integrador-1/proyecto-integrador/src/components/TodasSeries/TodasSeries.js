import React, {Component} from "react";
import SeriesCard from "../SeriesCard/SeriesCard";

let api_key = "dbc2844dc7f234cc66f323810714162c"
let show ='Cargando..'; 

class TodasSeries extends Component {
    constructor(props){
        super(props);
        this.state ={
            series:[],
            pagenumberS:1, 
            input: '',
            resultadoseries: ''
        }
    }

    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${api_key}&language=en-US&page=${this.state.pagenumber}`)
        .then(res =>res.json())
        .then(data => this.setState(
            {series: data.results,
            pagenumberS: this.state.pagenumberS + 1}
        ))
        .catch(e => console.log(e))
    }

    cargarmas(){ 
        fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${api_key}&language=en-US&page=${this.state.pagenumber}`)
        .then(res =>res.json())
        .then(data => this.setState(
            {series: this.state.series.concat(data.results), pagenumberS:this.state.pagenumberS + 1} 
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
            results= this.state.series.filter((unaSerie)=>{
                return unaSerie.title.toLowerCase().includes(event.target.value)
                
            }) 
        console.log(results)
        if(results.length === 0){
            show=`No se encontraron resultados de busqueda`;
            console.log(show);
        }
        this.setState({resultadoseries: results},() => console.log(this.state.resultadoseries))
        }

        else{ this.setState({resultadoseries: ''})
    }
        });
    }



    render(){

        if(this.state.series.length !==0 && this.state.input.length === 0){
            show= this.state.series
            console.log(show);

        }
        else if (this.state.resultadoseries.length !== 0){
            show= this.state.resultadoseries
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
                        show=== 'Cargando..' || show===`No se encontraron resultados de búsqueda` ? <h2> {show} </h2> : show.map((unaSerie,idx) => <SeriesCard key={unaSerie+idx} datosSerie={unaSerie}  image={unaSerie.poster_path} title={unaSerie.name}/>)

                    }
                    
                </section>
                
                <button onClick={()=>this.cargarmas()}>Cargar más series </button>

            </React.Fragment>
        )
            
    }
    }

 export default TodasSeries;
