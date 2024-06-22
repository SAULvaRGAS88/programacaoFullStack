import React from 'react';
import './App.css';
import { Container } from './components/containerPricipal/Container';
import Tabela from './components/tabela/Tabela';
import Carousel from './components/carousel/Carousel';
import { Menu } from './components/menu/Menu';

const App = () => {
  const produtos = [
    { id: 1, nome: 'Produto 1', preco: 100.0, descricao: 'Descrição 1' },
    { id: 2, nome: 'Produto 2', preco: 150.0, descricao: 'Descrição 2' },
    { id: 3, nome: 'Produto 3', preco: 200.0, descricao: 'Descrição 3' },
  ];

  return (
    <Container>
      <Menu/>
      <h1>Nossa PetShop</h1>
        <Carousel/>
        <Tabela produtos={produtos} />
    </Container>
  );
};

export default App;