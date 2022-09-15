import React, {
    Component
} from "react";

let detalles = "ab1dad43417703bd59209ba154fb4880"

class DetallePelicula extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            detallePelis: {}
        }
    }

componentDidMount(){
    fetch(detalles)
        .then(res => res.json())
        .then(data => this.setState(

            {
                detallePelis: data.results
            }
        ))
        .catch(error => console.log(error))
        }


    }


export default DetallePelicula;