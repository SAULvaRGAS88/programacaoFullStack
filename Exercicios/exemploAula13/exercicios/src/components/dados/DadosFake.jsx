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
