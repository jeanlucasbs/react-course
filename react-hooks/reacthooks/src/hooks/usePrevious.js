import {useEffect, useRef} from 'react';

//As vezes modificamos um valor, porem o estado antigo nos interessa.
//Esse custom hook salva o estado antigo
export const usePrevious = (value) => {
    const ref = useRef();

    useEffect(() => {
        ref.current = value;
    });

    return ref.current;
}
