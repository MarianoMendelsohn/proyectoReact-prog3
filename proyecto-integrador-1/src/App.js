import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';


function App() {

  const opciones = ['Home', 'Favoritos']

  return(
    
    <div>
      
    <Header menu={opciones}/>

    <Home/>

    <Footer/>

    </div>
    
    
  )
}

export default App;