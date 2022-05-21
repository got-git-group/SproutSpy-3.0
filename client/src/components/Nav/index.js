import './index.scss';

const Nav = () => {
    return (
        <>
            <nav className='nav'>
                <ul className='menunav'>
                    <li className='itemnav'>
                        <a href='/'>Home</a>
                    </li>
                    <li className='itemnav'>
                        <a href='/addplant'>Add Plant</a>
                    </li>
                    <li className='itemnav'>
                        <a href='/glossary'>Glossary</a>
                    </li>
                    <li className='itemnav'>
                        <a href='/login'>Login</a>
                    </li>
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