import React, { useState } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './screens/Home/Home';
import DetallePelicula from './screens/DetallePelicula/DetallePelicula';
import NotFound from './screens/NotFound/NotFound';
import {Route,Routes} from 'react-router-dom';
import DelMomento from './screens/DelMomento/delMomento';
import FavoritosPelis from './screens/Favoritos/FavoritosPelis';
import SeriesTodas from './screens/SeriesTodas/SeriesTodas'




function App() {

  const [pelisFavs, setPelisFavs] = useState([])
  const [seriesFavs, setSeriesFavs] = useState([])
  const opciones = ['Home', 'Favoritos']
 console.log(pelisFavs, seriesFavs)
  return(
    <React.Fragment>
      <Header />
      <main>
        <Routes>
          <Route path = '/' exact= {true} element={<Home setPelisFavs={setPelisFavs} setSeriesFavs={setSeriesFavs}  />} />
          <Route path = '/NotFound' element={<NotFound/>} /> 
          <Route path = '/pelicula/id/:id' element={<DetallePelicula/>} />
          <Route path = '/verTodasPeliculas' element={<DelMomento/>} />
          <Route path = '/verTodasSeries' element={<SeriesTodas />} />
          <Route path = '/favoritosPelis' element={<FavoritosPelis favs={pelisFavs}/>} />
        </Routes>
      </main>
    

  

    <Footer/>
</React.Fragment>
  );
}

export default App;