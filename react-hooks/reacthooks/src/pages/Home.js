import { CounterUseReducer } from '../components/CounterUseReducer';
import HookUseEffect from '../components/HookUseEffect';
import HookUseReducer from '../components/HookUseReducer';
import HooksUseState from '../components/HookUseState';
import { useContext } from 'react';
import { SomeContext } from '../components/HookUseContext';
import HookUseRef from '../components/HookUseRef';

const Home = () => {
    const {contextValue} = useContext(SomeContext);
    
    return(
        <div>
            <h1>Home</h1>
            {/*1- Use State */}
            {<HooksUseState />}
            {/*Use Reducer */}
            {<HookUseReducer />}
            {<CounterUseReducer />}
            {<HookUseEffect />}
            <h2>UseContext</h2>
            <p>O valor do contexto: {contextValue}</p>
            <hr/>
            <HookUseRef />

        </div>
    );
};

export default Home;