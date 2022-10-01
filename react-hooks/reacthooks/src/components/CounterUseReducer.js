import {useReducer, useState} from 'react';

const initialState = {count: 0 };

function reducer(state, action){
    switch(action.type){
        case 'decrement':
            return {count: state.count - 1};
        case 'increment':
            return {count: state.count +1};
        case 'custom':
            return {count: action.payload};
        default:
            return state;
    }
}


export function CounterUseReducer() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [customCounter, setCostomCounter] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({type: "custom", payload: customCounter})

    }

    return (
        <div>
            <h1>Counter useReducer</h1>
            <button onClick={() => dispatch({type: 'decrement'})}>-</button>
            <span>{state.count}</span>
            <button onClick={() => dispatch({type: 'increment'})}>+</button>
            <br/>
            <br/>
            <form onSubmit={handleSubmit}>
                <label htmlFor="custom_value">Valor personalizado: {customCounter} </label>
                <br/>
                <input type="number" id="custom_value" value={customCounter} onChange={(e) => setCostomCounter(e.target.value)} />
                <button type="submit">Inserir</button>
            </form>
        </div>
    );
};