import {useState} from 'react'

const ListRender = () => {
    let initialCount = 0;
    const [list] = useState(["Mateus", "Jean", "Lucas"])
    const [count, setCount] = useState(initialCount);

    const [users, setUsers] = useState([
        {id: 1, name: "Matheus", age: 31},
        {id: 2, name: "Gomes", age: 21},
        {id: 3, name: "Luan", age: 54}
    ]);


    /*Previous State */
    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4);
        setUsers((prevUsers) => {
            console.log(prevUsers);
            return prevUsers.filter((user) => randomNumber !== user.id)
        })
    }


    return(
        <div>
            <ul>
               {list.map((item,i) => (
                    <li key={i}>{item}</li>
               ))}
            </ul>

            <ul>
                {users.map((users) =>
                <li key={users.id}>Nome: {users.name} - Idade: {users.age}</li>)}
            </ul>

            {/*Previous State */}
            <button onClick={deleteRandom}>Delete Random User</button>

            <div>
                Contador: {count}
                <button onClick={() => setCount(initialCount)}>Reiniciar</button>
                <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
                <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
            </div>

            

        </div>
    )
}

export default ListRender;