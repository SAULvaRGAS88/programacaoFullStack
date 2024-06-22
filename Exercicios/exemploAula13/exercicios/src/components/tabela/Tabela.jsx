import React from 'react';
import Card from '../card/Card';
import './Tabela.css'

const Tabela = ({ produtos }) => {
    return (
        <div className='container-tabela'>
            {produtos.map((produto) => (
                <Card key={produto.id} produto={produto} />
            ))}
        </div>
    );
};

export default Tabela;