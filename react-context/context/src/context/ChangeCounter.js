import { useContext } from "react";
import { CounterContext } from "./CounterContext";

const ChangeCounter = () => {
    const {counter, setCounter} = useContext(CounterContext);
    return (
        <div>
            <button onClick={()=> setCounter(counter + 1)}>Add value to conter</button>
        </div>
    )
}

export default ChangeCounter;