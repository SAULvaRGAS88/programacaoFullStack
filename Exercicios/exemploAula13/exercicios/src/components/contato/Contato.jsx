import React, { useState } from 'react'
import { Container } from '../containerPricipal/Container'
import { Menu } from '../menu/Menu'
import './Contato.css'

export const Contato = () => {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Enviando para API', inputs);
    }

    enviaDadosFake(inputs)

    return (
        <Container>
            <Menu />
            <div className='containerContato'>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">NOME:</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={inputs.username || ""}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="age">IDADE:</label>
                        <input
                            type="number"
                            id="age"
                            name="age"
                            value={inputs.age || ""}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="age">E-MAIL:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={inputs.email || ""}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">MENSAGEM:</label>
                        <textarea
                            id="message"
                            name="message"
                            value={inputs.message || ""}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Enviar" />
                    </div>
                </form>
            </div>
        </Container>
    )
}
