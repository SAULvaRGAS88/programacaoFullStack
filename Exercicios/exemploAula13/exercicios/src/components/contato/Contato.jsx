import React, { useState } from 'react';
import { Container } from '../containerPricipal/Container';
import { Menu } from '../menu/Menu';
import './Contato.css';
import { enviaDadosFake } from '../dados/DadosFake';

export const Contato = () => {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const { name, value } = event.target;
        setInputs(values => ({ ...values, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const requiredFields = ['nome', 'idade', 'email', 'mensagem'];
        for (const field of requiredFields) {
            if (!inputs[field] || inputs[field].trim() === '') {
                alert(`O campo ${field} é obrigatório.`);
                return;
            }
        }

        enviaDadosFake(inputs);
        setInputs({});
    };

    return (
        <Container>
            <Menu />
            <div className='containerContato'>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="nome">NOME:</label>
                        <input
                            type="text"
                            id="username"
                            name="nome"
                            value={inputs.nome || ""}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="idade">IDADE:</label>
                        <input
                            type="number"
                            id="age"
                            name="idade"
                            value={inputs.idade || ""}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">E-MAIL:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={inputs.email || ""}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="mensagem">MENSAGEM:</label>
                        <textarea
                            id="message"
                            name="mensagem"
                            value={inputs.mensagem || ""}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Enviar" />
                    </div>
                </form>
            </div>
        </Container>
    );
};
