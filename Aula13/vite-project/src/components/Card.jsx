import React from 'react'
import './Card.css'

const Card = ({ titulo, children }) => {

    const abrirAlert = () => {
        alert(`Card ${titulo}`)
    }

    return (
        <div className='card' onClick={abrirAlert}>
            <div className='card-titulo'>{titulo}</div>
            <div className='card-conteudo'>
                {children}
            </div>
        </div>
    )
}

export default Card
