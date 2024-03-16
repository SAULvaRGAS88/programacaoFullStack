const express = require('express');
const app = express();
const PORT = 3000; 

app.use(express.json());

// Rota de teste
app.get('/', (req, res) => {
  res.send('APITest de CRUD de Produtos FULLSTACK');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

let produtos = [];

// Listar todos os produtos
// endPoint /produtos
app.get('/produtos', (req, res) => {
    if (produtos.length === 0) {
      return res.status(404).send('Sem Produtos Cadastrados, bora cadastrar um Produto!');
    } else {
      res.json(produtos);
    }
  });
  

// Obter um produto por ID
app.get('/produtos/:id', (req, res) => {
  const id = req.params.id;
  const produto = produtos.find(p => p.id === parseInt(id));
  if (!produto) return res.status(404).send('Produto não encontrado');
  res.json(produto);
});

// Adicionar um novo produto
app.post('/produtos', (req, res) => {
    const { id, nome, preco } = req.body;
    if (!id || !nome || !preco) {
      return res.status(400).send('Dados incompletos');
    }
    
    const produtoExistente = produtos.find(p => p.id === id);
    if (produtoExistente) {
      return res.status(400).send('ID já existe');
    }
    
    produtos.push({ id, nome, preco });
    res.status(201).send('Produto adicionado com sucesso');
  });
  
 
// Atualizar um produto existente por Id
app.put('/produtos/:id', (req, res) => {
  const id = req.params.id;
  const index = produtos.findIndex(p => p.id === parseInt(id));
  if (index === -1) return res.status(404).send('Produto não encontrado');
  const { nome, preco } = req.body;
  if (!nome || !preco) return res.status(400).send('Dados incompletos');
  produtos[index] = { ...produtos[index], nome, preco };
  res.send('Produto atualizado com sucesso');
});

// Remover um produto por Id
app.delete('/produtos/:id', (req, res) => {
  const id = req.params.id;
  const index = produtos.findIndex(p => p.id === parseInt(id));
  if (index === -1) return res.status(404).send('Produto não encontrado');
  produtos.splice(index, 1);
  res.send('Produto removido com sucesso');
});
