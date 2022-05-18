import Header from '../Header';
import Footer from '../Footer';
import bg from '../../assets/images/projectPhoto.jpg'

const Home = () => {
    return (
        <>
            <Header />
            <img src={bg} alt='' id='bphoto' style={{ minHeight: '100%', minWidth: '100%', borderRadius: '20px', opacity: '.2' }}> 
            </img>
            <Footer />
        </>
    )
}

export default Home;