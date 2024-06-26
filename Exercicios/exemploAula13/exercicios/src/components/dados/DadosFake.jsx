import { useEffect, useState } from "react";

export const useDadosFake = () => {
    const [dados, setDados] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:3000/produtos', {
                method: 'GET',
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            setDados(data);
        } catch (error) {
            console.error('Erro ao buscar os produtos:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return dados;
};

export const enviaDadosFake = (dados) => {
    const fetchPost = async () => {
        try {
            const response = await fetch('http://localhost:3000/dadosUsuarios', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dados)
            });

            if (!response.ok) {
                throw new Error('Erro na requisição');
            }

            await response.json();
            alert('Atenção Dados enviados com sucesso:');
        } catch (error) {
            console.error('Erro ao enviar dados:', error);
        }
    };

    fetchPost();
};

export const enviaDadosProdutos = (dados) => {
    const fetchPost = async () => {
        try {
            const response = await fetch('http://localhost:3000/produtos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dados)
            });

            if (!response.ok) {
                throw new Error('Erro na requisição');
            }

            await response.json();
            alert('Atenção Dados enviados com sucesso:');
        } catch (error) {
            console.error('Erro ao enviar dados:', error);
        }
    };

    fetchPost();
};

export const excluirDadosProdutos = (id) => {
    const fetchPost = async () => {
        try {
            const response = await fetch(`http://localhost:3000/produtos/${id}`, {
                method: 'DELETE'
            });

            if (!response.ok) {
                throw new Error('Erro na requisição');
            }

            await response.json();
            alert('Atenção: Dados excluídos com sucesso.');
        } catch (error) {
            console.error('Erro ao excluir dados:', error);
        }
    };

    fetchPost();
};


