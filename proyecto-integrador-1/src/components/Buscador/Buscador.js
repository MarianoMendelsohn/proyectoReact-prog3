import React , {Component} from 'react';

class Buscador extends Component {
    constructor(props){
        super(props)
        this.state={
            valorInput: ''
        }
    }


    prevenirRefresh(event){
        event.preventDefault()
}

   

    controlarCambios(event){
        this.setState({
            valorInput: event.target.value
        })
    };

    render() {
        return(
            <form onSubmit={(event)=> this.prevenirRefresh(event)} >
                <input onChange={(event) => this.controlarCambios(event)}></input>
                <button>Buscar</button>
            </form>
        )
    }

}
export default Buscador