import './index.scss';


const Footer = () => {
    return (
        <>
            <footer className='footer'>
                <h1>
                    SproutSpy
                </h1>

                <a className='glow' href='https://github.com/got-git-group'>GotGitGroup</a>
                
                {/* https://github.com/got-git-group/SproutSpy-3.0/blob/andysprout3/client/assets/images/logo.png */}
                <img src='https://cdn-icons-png.flaticon.com/512/2796/2796224.png' alt='Sprout Spy Logo'></img>
            </footer>
        </>
    )
}

export default Footer;