const TemplateExpressions = () => {
    const name = 'Jean'
    const data = {
        age: 23,
        job: "Programmer",
    };

    return (
        <div>
            <h1>Olá {name}, tudo bem?</h1>
            <p>Você atua como: {data.job}</p>
            <p>{console.log("JSX o HTML do React")}</p>
        </div>
    )
};

export default TemplateExpressions