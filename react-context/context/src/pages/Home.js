//import {useContext} from 'react'
import ChangeCounter from '../context/ChangeCounter';
//import { CounterContext } from '../context/CounterContext';

import {useCounterContext} from '../hooks/useCounterContext'

const Home = () => {
  //const {counter} = useContext(CounterContext);
  const {counter} = useCounterContext();
  
  return (
    <div>
      <h1>Home</h1>
      <p>Valor do contador: {counter}</p>
      <ChangeCounter/>
    </div>
  );
};

export default Home;