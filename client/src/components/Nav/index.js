import './index.scss';
import { useAuth0 } from '@auth0/auth0-react' ;
import LoginButton from '../LoginButton';
import LogoutButton from '../LogoutButton';

const Nav = () => {
  const { isAuthenticated } = useAuth0();
  const loggedIn = isAuthenticated;

    return (
        <>
            <nav className='nav'>
                <ul className='menunav'>
                    <li className='itemnav'>
                        <a href='/'>Home</a>
                    </li>
                    <li className='itemnav'>
                        <a href='/glossary' className='miniOff'>Glossary</a>
                    </li>
                    {loggedIn && <li className='itemnav'>
                        <a href='/addplant' className='miniOff'>Add Plant</a>
                    </li> }
                    {loggedIn && <li className='itemnav'>
                        <a href='/calendar' className='miniOff'>Calendar</a>
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