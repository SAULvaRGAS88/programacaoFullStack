import React from 'react'
import { Container } from '../containerPricipal/Container'
import { Menu } from '../menu/Menu'
import Carousel from '../carousel/Carousel'
import Tabela from '../tabela/Tabela'
import { useDadosFake } from '../dados/DadosFake'

export const Home = () => {
    const produtos = useDadosFake()
    return (
        <div>
            <Container>
                <Menu />
                <h1>Nossa PetShop</h1>
                <Carousel />
                <Tabela produtos={produtos} />
            </Container>
        </div>
    )
}
