import React from 'react'

export const Hello = ({ nome }) => {

    return (
        (nome)
            ? <h3>Hello {nome}</h3 >
            : <h3>Olá Mundo</h3>
    )
}
