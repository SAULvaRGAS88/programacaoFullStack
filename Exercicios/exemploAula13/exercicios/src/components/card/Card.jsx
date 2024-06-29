import React from 'react';
import './Card.css';
import { excluirDadosProdutos } from '../dados/DadosFake';

const Card = ({ produto }) => {

    const excluirCard = (produtoId) => {
        excluirDadosProdutos(produtoId);
        window.location.href = '/';
    }    

    return (
        <div className="card">
            <h2>{produto.nome}</h2>
            <p><strong>ID:</strong> {produto.id}</p>
            <p><strong>Preço:</strong> R$ {produto.preco?.toFixed(2)}</p>
            <p><strong>Descrição:</strong> {produto.descricao}</p>
            <img src={produto.imagem} alt={produto.nome} width={150}></img>
            <button onClick={() => excluirCard(produto.id)}>Excluir</button>
        </div>
    );
};

export default Card;
