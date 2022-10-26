import React from 'react';
import './App.css';
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
    </>
  );
}

export default App;
