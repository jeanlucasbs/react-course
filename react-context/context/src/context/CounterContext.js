//1- Criar o contexto
import {createContext, useState} from 'react';

//1- Inicializando o contexto
export const CounterContext = createContext();

//2- Criar o Provide, responsável por agrupar a árvore de componentes que precisam do estado context
export const CounterContextProvider = ({children}) => {
    const [counter, setCounter] = useState(5);

    return (
        <CounterContext.Provider value={{counter, setCounter}}>
            {children}
        </CounterContext.Provider>
    )
}