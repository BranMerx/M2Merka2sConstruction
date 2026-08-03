import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar(){
    return(
        <header className = "navBar">
            <div className="navbar-logo">
                <NavLink to ="/">
                M2 Merka2s Construction
                </NavLink>
            </div>
            <nav>
                <ul className="navbar-links">
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/services">Services</NavLink>
                    </li>
                    <li>
                        <NavLink to="/gallery">Gallery</NavLink>
                    </li>
                    <li>
                        <NavLink to="/referral">Referral</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;