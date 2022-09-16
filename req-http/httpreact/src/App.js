import './App.css';
import {useState, useEffect} from 'react';

//4- custom hooks
import {useFetch} from './hooks/useFetch';

const url = 'http://localhost:3000/products';

function App() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  //4- custom
  const {data: items, httpConfig} = useFetch(url);
  
  
  //1- resgatando dados
  // useEffect(() => {
  //   async function fetchData() {
  //     const res = await fetch(url);

  //     const data = await res.json();

  //     setProducts(data);
  //   }
    
  //   fetchData();
  // }, []);

  //2- envio de dados com o post
  const handleSubmit = async(e) => {
    e.preventDefault();

    const product = {
      name,
      price,
    };

    // const res = await fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify(product)
    // });
    
    // //3- carregamento dinâmico
    // const addedProduct = await res.json();

    // //Utilziando o spread operator para pegar os dados antigos e add os novos dados
    // setProducts((prevProducts) => [...prevProducts, addedProduct])

    //5- refatorando POST
    httpConfig(product, "POST")

    //limpar os estados dos inputs após submter os dados
    setName("");
    setPrice("");
  };

  return (
    <div className="App">
      <h1>Lista de Produtos</h1>
      {items && items.map((product) => (
        <li key={product.id}>{product.name} - R${product.price}</li>
      ))}

      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" value={name} name="name" onChange={(e) => setName(e.target.value)} />
          </label>
          <label>
            Preço:
            <input type="number" value={price} name="price" onChange={(e) => setPrice(e.target.value)} />
          </label>
          <input type="submit" value="Criar"/>
        </form>
      </div>
    </div>
  );
}

export default App;
