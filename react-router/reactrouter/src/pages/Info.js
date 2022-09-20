import  {useParams} from 'react-router-dom';

const Info = () => {
    const {id} = useParams();
    return(
        <div>Mais informações do produto: {id}</div>
    );
};

export default Info;