import React from 'react';
import './Card.css';

const Card = ({ produto }) => {

    return (
        <div className="card">
            <h2>{produto.nome}</h2>
            <p><strong>ID:</strong> {produto.id}</p>
            <p><strong>Preço:</strong> R$ {produto.preco?.toFixed(2)}</p>
            <p><strong>Descrição:</strong> {produto.descricao}</p>
            <img src={produto.imagem} alt={produto.nome} width={150}></img>
        </div>
    );
};

export default Card;