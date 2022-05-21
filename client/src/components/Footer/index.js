import './index.scss';
import Logo from '../../assets/images/logo.png';


const Footer = () => {
    return (
        <>
            <footer className='footer'>
                <h1>
                    SproutSpy
                </h1>

                <a className='link' href='https://github.com/got-git-group'>GotGitGroup</a>
                
                <img src={Logo} alt='sproutspy logo' className='logo' />
            </footer>
        </>
    )
}

export default Footer;