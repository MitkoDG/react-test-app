import { Link, NavLink } from 'react-router-dom';
import classes from './MainNavigation.module.css'
import logo from '../../assets/images/ddg-projects.jpg'
const MainNavigation = () => {

    return (
        <header className={classes.header}>
            {/* <div>DDG Projects</div> */}
            <div><Link to="/"><img src={logo} alt='Logo'></img></Link></div>
            <nav>
                <ul>
                    <li>
                        <NavLink to='/'>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/gallery'>
                            Gallery
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/contact'>
                            Contact
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/about'>
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/offers'>
                            Offers
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
};

export default MainNavigation;