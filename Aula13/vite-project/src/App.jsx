import './App.css'
import Card from './components/Card'
import { Hello } from './components/Hello'
import ListCard from './components/ListCard'
import listaProdutos from './data/Produtos.json'

function App() {

  // dados = Produtos

  return (
    <>
      <h1>App Exemplos</h1>
      <Hello nome={'Saul'} />
      <Hello nome={'Sandro'} />
      <Hello nome={'Paola'} />
      <Hello nome={'Gui'} />
      <Hello nome={''} />

      <ListCard lista={listaProdutos} />


    </>
  )
}

export default App