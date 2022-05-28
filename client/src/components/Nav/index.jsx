import './index.scss';
import './index.sass'
import { useAuth0 } from '@auth0/auth0-react' ;
import { Link } from 'react-router-dom';
import LoginButton from '../LoginButton';
import LogoutButton from '../LogoutButton';
import home from '../../assets/icons/home.png';

const Nav = () => {
  const { isAuthenticated } = useAuth0();
  const loggedIn = isAuthenticated;

    return (
        <>
            <nav className='nav'>
                <ul className='menunav'>
                    <li className='itemnav'>
                        <Link to={home}>Home</Link>
                    </li>
                    <li className='itemnav'>
                        <a href='/glossary'>Glossary</a>
                    </li>
                    {loggedIn && <li className='itemnav'>
                        <a href='/addplant'>Add Plant</a>
                    </li> }
                    {loggedIn && <li className='itemnav'>
                        <a href='/calendar'>Calendar</a>
                    </li> }
                    { loggedIn && <li className='itemnavlog'>
                        <LogoutButton />
                    </li> }
                    { !loggedIn && <li className='itemnavlog'>
                        <LoginButton />
                    </li> }
                </ul>

                {/* <div className='hamburger'>
                    <span className='bar'></span>
                    <span className='bar'></span>
                    <span className='bar'></span>
                    <span className='bar'></span>
                </div> */}
            </nav>
        </>
    )
}

export default Nav;