
import {useEffect, useState} from 'react'
import api from './api';



function App() {

  const[products, setProducts]= useState([])


  useEffect(()=>{


    api.get('/products')
      .then((res)=>setProducts(res.data))
      .catch((err)=>console.log(err))

  },[])


  return (
    <div className="App">
      <h1>Мой магазин</h1>
          <div>
                {products.map((product)=>(
                  <div key={product.id}>
                    <h1>{product.title}</h1>
                    <h2>{product.description}</h2>
                    <h2>{product.price}</h2>
                    <img src={product.image}/>
                  </div>
                ))}




          </div>
  
    </div>
  );
}

export default App;
