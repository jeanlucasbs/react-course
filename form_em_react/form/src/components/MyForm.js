import './MyForm.css'
import {useState} from 'react'

const MyForm = ({user}) => {
    //6-Controlled inputs
    //3 - Gerenciamento de dados
    const [name, setName] = useState(user ? user.name : '');
    const [email, setEmail] = useState(user ? user.email : '');

    const [bio, setBio] = useState(user ? user.bio : '')
    const [role, setRole] = useState(user ? user.role : '')


    //5 - Envio de formulário
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Enviando formulário");
        console.log(name, email, bio, role)

        //7- Limpando fomrulario
        setName("");
        setEmail("");
        setBio("");
    }
    
    const handleChange = (e) => {
        setName(e.target.value)
    }

    //console.log(email)

    return(
        <div>
        {/*1 - Criação do fomrulario */}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input 
                    type="text" 
                    name="name" 
                    placeholder="Digite seu nome" 
                    onChange={handleChange}
                    value={name}/>
                </div>
        {/*2- Lab envolvendo input */}
            <label>
                <span>E-mail:</span>
                {/*4- Simplificando manipulação de dados */}
                <input 
                type="email" 
                name="email" 
                placeholder="Digite seu e-mail"
                onChange={(e) => setEmail(e.target.value)}
                value={email} />
            </label>

            <label>
                <span>
                    <textarea 
                    name="bio"
                    placeholder="Digite sua bio"
                    onChange={(e) => setBio(e.target.value)}
                    value={bio}></textarea>
                </span>
            </label>

            {/*8 Usando o select */}
            <label>
                <span>Função do sistema</span>
                <select 
                name="role" onChange={(e) => setRole(e.target.value)} value={role}>
                    <option value="user">User</option>
                    <option value="editor">Editor</option>
                    <option value="admin">Administrador</option>
                </select>
            </label>

            <input type="submit" value="Enviar" />

            </form>
        </div>
    );
};

export default MyForm