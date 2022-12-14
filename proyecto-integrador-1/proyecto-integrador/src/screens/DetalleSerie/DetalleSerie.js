import React, { Component } from "react";

let api_key = "dbc2844dc7f234cc66f323810714162c"

class DetalleSerie extends Component{
    constructor(props){
        super(props);
        this.state ={
            id: this.props.match.params.id,
            detalleSerie: {}
        }
    }

    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/tv/${this.state.id}?api_key=${api_key}&language=en-US`)
        .then(res => res.json())
        .then(data => this.setState(
            {detalleSerie: data}
        ))
        .catch(e => console.log(e))
        }

    render(){
        return(
            <React.Fragment>
                <section>
                <article>

                <img src={`https://image.tmdb.org/t/p/w500/${this.state.detalleSerie.poster_path}`} alt=""/>
                </article>

                <article>
                    <h2>{this.state.detalleSerie.name}</h2>
                    <p >{this.state.detalleSerie.overview}</p>
                    <p >Rating: {this.state.detalleSerie.vote_average}</p>
                    <p >Lanzamiento: {this.state.detalleSerie.first_air_date}</p>
                </article>

                </section>
            </React.Fragment>
        )
    }
} 


export default DetalleSerie;