import {useEffect, useState} from 'react';

const HookUseEffect = () => {

    /*1- Sem o array de dependencias, toda vez que o componentes for renderizado ele 
    vai ser executado novamente*/
//   useEffect(() => {
//     console.log("Estou sendo executado");
//   })

//   const [number, setNumber] = useState(1)

//   const changeNumber = () => {
//     return setNumber(number + 1);
//   }

//   //2- ser exeutado apenas uma vez deixando o array de dependecias vazio
//   useEffect(() => {
//     console.log("Irei ser excutado apenas uma vez");
//   },[])

//   //3- array de dependencias
//   const [anotherNumber, setAnotherNumber] = useState(0);

//   useEffect(() => {
//     if(anotherNumber > 0) console.log("Sou executado apenas quando o anotherNumber for alterado!")
//   },[anotherNumber])

//   //cleanup do useEffect
//   useEffect(() => {
//     const timer = setTimeout(() => {
//         console.log("Hello world")

//         setAnotherNumber(anotherNumber +1)
//     },2000)

//     return () => clearTimeout(timer);
//   })
  
    return (
    <div>
        <h1>UseEfffect</h1>
        {/* <p>Number: {number}</p>
        <button onClick={changeNumber}>Executar</button>
        <p>Another Number: {anotherNumber}</p>
        <button onClick={() => setAnotherNumber(anotherNumber + 1)}>Executar</button> */}
        <hr/>
    </div>
  )
}

export default HookUseEffect