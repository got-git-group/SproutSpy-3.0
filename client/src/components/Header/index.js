import './index.scss';
import Nav from '../Nav';

const Header = () => {
    return (
        <>
            <header className='header'>
                <h1>
                    Sprout Spy
                </h1>

                <nav className='links'>
                    <Nav />
                </nav>
            </header>
        </>
    )
}

export default Header;