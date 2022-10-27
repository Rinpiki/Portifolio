import React from 'react';
import './App.css';
import Footer from './componets/Footer';
import Header from './componets/Header';
import Main from './componets/Main';
import Projetos from './componets/Projetos';
import Sobre from './componets/Sobre';
import './index.css';

function App() {
  return (
    <>
      <Header />
      <Main />
      <Sobre />
      <Projetos />
      <Footer />
    </>
  );
}

export default App;
