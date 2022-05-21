import Home from '../Home'; // import Output from '../Output';
import Header from '../Header';
import Footer from '../Footer';
import './index.scss';

const Layout = () => {
    return (
        <>
          <Header />
          <Home />
          {/* <Output /> */}
          <Footer />
        </>
    );
}

export default Layout;