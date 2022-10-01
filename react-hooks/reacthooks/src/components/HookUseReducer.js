import { useReducer } from 'react';

const HookUseReducer = () => {
    //1- Começando com o useReducer
    const [number, dispatch] = useReducer((state, action) => {
        return Math.random(state);
    });

    return (
    <div>
        <h2>Use Reducer</h2>
        <p>Numero: {number}</p>
        <button onClick={dispatch}>Alterar número</button>
        <hr/>
    </div>
  );
};
 
export default HookUseReducer;