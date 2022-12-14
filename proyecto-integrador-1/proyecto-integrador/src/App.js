import React from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from "./screens/Home/Home";
import Favoritos from "./screens/Favoritos/Favoritos";
import Peliculas from "./screens/Peliculas/Peliculas";
import Series from "./screens/Series/Series";
import DetallePelicula from "./screens/DetallePelicula/DetallePelicula"
import DetalleSerie from "./screens/DetalleSerie/DetalleSerie";

import NotFound from "./screens/NotFound/NotFound";

import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <main>
      <Switch>
          <Route path='/' exact={true} component={Home}/>

          <Route path='/favoritos' component={Favoritos}/>

          <Route path='/peliculas' component={Peliculas}/>

          <Route path='/pelicula/id/:id' component={DetallePelicula}/>

          <Route path='/Series' component={Series}/>

          <Route path='/serie/id/:id' component={DetalleSerie}/>


        
          <Route path='' component={NotFound}/>

        </Switch>
        </main>

      <Footer />

    </BrowserRouter>
  );
}

export default App;
