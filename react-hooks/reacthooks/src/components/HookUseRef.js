import {useEffect, useState, useRef} from 'react';

const HookUseRef = () => {
  const numberRef = useRef(0);
  const [numberA, setNumberA] = useState(0);
  const [numberB, setNumberB] = useState(0);

  useEffect(() => {
    numberRef.current = numberRef.current + 1;
  })
  
    return (
    <div>
        <h2>useRef</h2>
        <p>O componente renderizou: {numberRef.current}</p>
        <p>Counter 1: {numberA}</p>
        <button onClick={() => setNumberA(numberA + 1)}>Contador A</button>
        <p>Counter 1: {numberB}</p>
        <button onClick={() => setNumberB(numberB + 1)}>Contador B</button>
        <hr/>
    </div>
  );
}

export default HookUseRef;