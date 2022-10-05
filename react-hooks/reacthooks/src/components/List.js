import {useEffect, useState} from 'react';

const List = ({getItems}) => {
    const [myItems, setMyItems] = useState([]);

    useEffect(() => {
        console.log("Buscando items no Db...")

        setMyItems(getItems);
    },[getItems])

    return (
        <div>
            {myItems && myItems.map((item) => (<p key={item}>{item}</p>))}
        </div>
    );
};

export default List;