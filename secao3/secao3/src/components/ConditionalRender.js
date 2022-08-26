import {useState} from 'react'

const ConditionalRender = () => {

    const [x] = useState(false);

    return(
        <div>
            <h1>Isso será exibido?</h1>
            {x && <p>Se x for true, sim!</p>}
            {!x && <p>Agora x é falso.</p>}

            <div>
                <h1>If Ternario</h1>
                {x ? <p>1</p> : <p>2</p>}
            </div>
        </div>
        
    )
};

export default ConditionalRender;
