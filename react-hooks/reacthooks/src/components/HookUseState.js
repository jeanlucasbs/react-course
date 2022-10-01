import {useState} from 'react';

const HookUseState = () => {
    //1 useState
    let userName = "João Felipe";
    const [name, setName] = useState("Thiago Brito");

    const changeNames = () => {
        userName = "Gabriel Souza";

        setName("Jean Lucas");
    }

    // 2- useState e input
    const [age, setAge] = useState(23);

    const handleSubmit = (e) => {
        e.preventDefault();

        //envio para o back-end
        console.log(age);
    }

    return(
        <div>
            {/*1- useState */}
            <h1>Use State</h1>
            <p>Variável: {userName}</p>
            <p>State: {name}</p>
            <button onClick={changeNames}>Change</button>
            {/*2- useState com input */}
            <p>Digite sua idade:</p>
            <form onSubmit={handleSubmit}>
                <input type="text"  onChange={(e) => setAge(e.target.value)}/>
                <input type="submit" value="Enviar"/>
            </form>
            <p>Sua idade é: {age} anos!</p>
            <hr/>

        </div>
    );
};

export default HookUseState;