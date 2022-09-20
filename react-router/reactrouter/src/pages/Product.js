import { useParams } from "react-router-dom"
import { useFetch} from '../hooks/useFetch'
import { Link } from "react-router-dom";

const Product = () => {
    const {id} = useParams();
    
    //carregamento de dado dinamico
    const url = "http://localhost:3000/products/" + id;

    const {data: product, loading, error } = useFetch(url)

    return <>
        <h2>ID do produto: {id}</h2>
        {error && <p>Ocorreu um erro...</p>}
        {loading && <p>Carregando dados...</p>}
        {product && (
            <div>
                <h3>{product.name}</h3>
                <h4>R$: {product.price}</h4>
                <Link to={`/products/${product.id}/info`}>Mais informações</Link>
            </div>
        )}
    </>
}

export default Product