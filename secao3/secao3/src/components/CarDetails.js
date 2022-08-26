const CarDetails = ({brand, km, color, newCar}) => {
    return(
        <div>
            <h1>Detalhes do Carro</h1>
            <ul>
                <li>Marca: {brand}</li>
                <li>Km: {km}</li>
                <li>Cor: {color}</li>
            </ul>
            {newCar && <p>Este carro é novo!</p>}
        </div>
    )
}

export default CarDetails