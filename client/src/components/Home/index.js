import LoginButton from '../LoginButton';
import bg from '../../assets/images/projectPhoto.jpg';
import './index.scss'

const Home = () => {
    return (
        <>
            <img src={bg} alt='' className='image'>
            </img>
            <LoginButton />
        </>
    )
}

export default Home;