import React from 'react'
import Card from './Card'

const ListCard = ({ lista }) => {

    return (
        lista.map((produto) =>
            <Card
                titulo={produto.nome} >
                <h3>{produto.preco.toLocaleString(
                    'pt-BR',
                    { style: 'currency', currency: 'BRL' }
                )}</h3>
                <p>Detalhes do Produto</p>
            </Card>
        )
    )
}

export default ListCard
