import Header from '../Header';
import Footer from '../Footer';
import bg from './images/projectPhoto.jpg';

const Home = () => {
    return (
        <>
            <img src={bg} alt='project photo' />
            <Header />
            <Footer />
        </>
    )
}

export default Home;