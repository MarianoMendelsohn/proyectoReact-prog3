import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './screens/Home/Home';
import DetallePelicula from './screens/DetallePelicula/DetallePelicula';
import NotFound from './screens/NotFound/NotFound';
import {Route,Switch} from 'react-router-dom';



function App() {

  const opciones = ['Home', 'Favoritos']

  return(
    <React.Fragment>
      <Header />
      <main>
        <Switch>
          <Route path = '/' exact= {true} component={Home} />

          <Route path = '/NotFound' component={NotFound} /> 

        

          <Route path = '/pelicula/id/:id' component={DetallePelicula} />

         

        </Switch>
      </main>
    

  

    <Footer/>
</React.Fragment>
  );
}

export default App;