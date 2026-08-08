import { useState, useEffect } from 'react';
import api from './api';

function App() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        api.get('/products')
            .then((res) => setProducts(res.data))
            .catch((err) => console.error('Ошибка запроса:', err));
    }, []);

    return (
        <div className="App">
            <h1>Мой магазин</h1>
            <div>
                {products.map((product) => (
                    <div key={product.id}>
                        <h3>{product.title}</h3>
                        <p>{product.description}</p>
                        <p>{product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;