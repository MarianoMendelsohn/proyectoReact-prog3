import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './screens/Home/Home';
import DetallePelicula from './screens/DetallePelicula/DetallePelicula';
import NotFound from './screens/NotFound/NotFound';
import {Route,Routes} from 'react-router-dom';
import DelMomento from './screens/DelMomento/delMomento';



function App() {

  const opciones = ['Home', 'Favoritos']

  return(
    <React.Fragment>
      <Header />
      <main>
        <Routes>
          <Route path = '/' exact= {true} element={<Home/>} />
          <Route path = '/NotFound' element={<NotFound/>} /> 
          <Route path = '/pelicula/id/:id' element={<DetallePelicula/>} />
          <Route path = '/populares' element={<DelMomento/>} />
          <Route path = '/momento' element={<DetallePelicula/>} />

        </Routes>
      </main>
    

  

    <Footer/>
</React.Fragment>
  );
}

export default App;