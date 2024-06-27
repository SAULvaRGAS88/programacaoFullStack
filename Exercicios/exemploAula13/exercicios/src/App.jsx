import React from 'react';
import './App.css';
import { Container } from './components/containerPricipal/Container';
import Tabela from './components/tabela/Tabela';
import Carousel from './components/carousel/Carousel';
import { Menu } from './components/menu/Menu';
import { useDadosFake } from './components/dados/DadosFake';

const App = () => {

  const produtos = useDadosFake()
  
  return (
    <Container>
      <Menu />
      <h1>Nossa PetShop</h1>
      <Carousel />
      <Tabela produtos={produtos} />
    </Container>
  );
};

export default App;