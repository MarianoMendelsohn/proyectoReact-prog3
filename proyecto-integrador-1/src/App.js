import React, { useState } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './screens/Home/Home';
import DetallePelicula from './screens/DetallePelicula/DetallePelicula';
import NotFound from './screens/NotFound/NotFound';
import {Route,Routes} from 'react-router-dom';
import DelMomento from './screens/DelMomento/delMomento';




function App() {

  const [favs, setFavs] = useState()
  const opciones = ['Home', 'Favoritos']
 console.log(favs,'aca')
  return(
    <React.Fragment>
      <Header />
      <main>
        <Routes>
          <Route path = '/' exact= {true} element={<Home setFavs={setFavs} />} />
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