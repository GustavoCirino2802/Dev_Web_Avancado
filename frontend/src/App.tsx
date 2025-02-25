import { useEffect, useState } from "react";

interface Produto {
    id: number;
    nome: string;
    preco: number;
}

function App() {
    const [produtos, setProdutos] = useState<Produto[]>([]);

    useEffect(() => {
        fetch("http://localhost:5000/produtos")
            .then(response => response.json())
            .then(data => setProdutos(data));
    }, []);

    return (
        <div>
            <h1>Lista de Produtos</h1>
            <ul>
                {produtos.map(produto => (
                    <li key={produto.id}>
                        {produto.nome} - R$ {produto.preco.toFixed(2)}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;