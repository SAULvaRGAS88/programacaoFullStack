import React, { useState } from 'react';
import './AddProdutos.css';
import { Container } from '../containerPricipal/Container';
import { Menu } from '../menu/Menu';
import { enviaDadosProdutos } from '../dados/DadosFake';

export const AddProdutos = () => {
    const [inputs, setInputs] = useState({});
    const [imagem, setImagem] = useState(null);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setInputs(values => ({ ...values, [name]: value }));
    };

    const handleImagemChange = (event) => {
        const imagemSelecionada = event.target.files[0];
        setImagem(imagemSelecionada);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const requiredFields = ['nome', 'preco', 'descricao'];
        for (const field of requiredFields) {
            if (!inputs[field] || inputs[field].trim() === '') {
                alert(`O campo ${field} é obrigatório.`);
                return;
            }
        }
        const precoNumerico = parseFloat(inputs.preco);
        const formData = {
            nome: inputs.nome,
            imagem: imagem.name,
            preco: precoNumerico,
            descricao: inputs.descricao,
        };

        try {
            enviaDadosProdutos(formData);
            setInputs({});
            setImagem(null);
        } catch (error) {
            console.error('Erro ao enviar produto:', error);
            alert('Erro ao enviar produto. Por favor, tente novamente.');
        }
    };

    return (
        <Container>
            <Menu />
            <div className='containerContato'>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="nome">NOME DO PRODUTO:</label>
                        <input
                            type="text"
                            id="nome"
                            name="nome"
                            value={inputs.nome || ""}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="preco">PREÇO:</label>
                        <input
                            type="number"
                            id="preco"
                            name="preco"
                            value={inputs.preco || ""}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="descricao">DESCRIÇÃO:</label>
                        <input
                            type="text"
                            id="descricao"
                            name="descricao"
                            value={inputs.descricao || ""}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="imagem">IMAGEM:</label>
                        <input
                            type="file"
                            id="imagem"
                            name="imagem"
                            onChange={handleImagemChange}
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
