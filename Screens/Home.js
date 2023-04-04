import Header from './Header';
import {useSelector} from 'react-redux';

const Home = ({navigation}) => {

    const state = useSelector((state) => state.auth.token);
    const {token} = useSelector((state) => state.auth.token);


    return (
        <Header navigation={navigation} />    
    )
}

export default Home;