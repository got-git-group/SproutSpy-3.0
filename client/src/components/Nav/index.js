import './index.scss';

const Nav = () => {
    return (
        <>
            <nav className='nav'>
                <ul>
                    <li>
                        <a href='/'>Home</a>
                    </li>
                    <li>
                        <a href='/glossary'>Glossary</a>
                    </li>
                    <li>
                        <a href='/addplant'>Add Plant</a>
                    </li>
                    <li>
                        <a href='/login'>Login</a>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Nav;