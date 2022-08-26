const Challenge = () => {
    const value1 = 10
    const value2 = 20
    const soma = value1 + value2

    const EventSum = () => {
        return console.log(soma)
    }
    return (
        <div>
            <div>
                <h1>Valor 1 = {value1}</h1>
                <h1>Valor 2 = {value2}</h1>
            </div>
            <div>
                <button onClick={EventSum}>Soma</button>
            </div>
        </div>
    )
};

export default Challenge




