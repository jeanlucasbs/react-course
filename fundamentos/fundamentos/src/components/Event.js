const Event = () => {
    const handleMyEvent = (e) => {
        console.log(e);
        console.log("Evento ativado");
    }
    
    const rederSomething = (x) => {
        if(x){
            return <h1>Renderizando isso!</h1>
        }else {
            return <h1>Também posso renderizar isso também!</h1>;
        }   
    };

    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique Aqui</button>
            </div>

            <div>
             {rederSomething(true)}
             {rederSomething(false)}
             </div>
        </div>
    )
}

export default Event