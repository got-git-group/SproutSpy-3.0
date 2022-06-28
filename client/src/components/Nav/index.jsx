import './index.scss';
import './index.sass'
import { useAuth0 } from '@auth0/auth0-react' ;
<<<<<<< HEAD:client/src/components/Nav/index.js
import { useNavigate } from 'react-router-dom';
=======
import { Link } from 'react-router-dom';
>>>>>>> ce5bdcadaccf12009fdf038e4717bfc7066b45de:client/src/components/Nav/index.jsx
import LoginButton from '../LoginButton';
import LogoutButton from '../LogoutButton';
import home from '../../assets/icons/home.png';

const Nav = () => {
  let picture = '';
  const { isAuthenticated, user } = useAuth0();
  const loggedIn = isAuthenticated;
  if ( loggedIn ) {
     picture = user.picture;
  }

  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate('/');
  }

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