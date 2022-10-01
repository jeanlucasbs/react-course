import { CounterUseReducer } from '../components/CounterUseReducer';
import HookUseReducer from '../components/HookUseReducer';
import HooksUseState from '../components/HookUseState';

const Home = () => {
    return(
        <div>
            <h1>Home</h1>
            {/*1- Use State */}
            {<HooksUseState />}
            {/*Use Reducer */}
            {<HookUseReducer />}
            {<CounterUseReducer />}
        </div>
    );
};

export default Home;