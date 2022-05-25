import './index.scss';
import { useAuth0 } from '@auth0/auth0-react' ;
import { useNavigate } from 'react-router-dom';
import LoginButton from '../LoginButton';
import LogoutButton from '../LogoutButton';

const Nav = () => {
  const { isAuthenticated, user } = useAuth0();
  const { picture } = user;
  const loggedIn = isAuthenticated;

  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate('/');
  }

    return (
        <>
            <nav className='nav'>
                <ul className='menunav'>
                    <li className='itemnav'>
                        <a href='/'>Home</a>
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
                    { loggedIn && <li className='itemnavlog'>
                        <img src={picture} alt='profile' className='profile' onClick={handleProfileClick} />
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