import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';


function App() {

  const opciones = ['Home', 'Favoritos']

  return(
    <>
    <Header menu={opciones}/>
    <Footer/>
    </>
)
}

export default App;
