import { NavLink } from 'react-router-dom';
 
const Nav = () => {
    return (
        <nav>
            <ul>
                <li><NavLink to="/">Welcome</NavLink></li>
                <li><NavLink to="register">About</NavLink></li>
                <li><NavLink to="login">Projects</NavLink></li>
            </ul>
        </nav>
    )
}
 
export default Nav;