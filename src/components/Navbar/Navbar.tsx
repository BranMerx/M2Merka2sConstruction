import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    function closeMenu() {
        setMenuOpen(false);
    }

    return (
        <header className="navbar">
            <div className="navbar-logo">
                <NavLink to="/" onClick={closeMenu}>
                    M2 Merka2s Construction
                </NavLink>
            </div>

            <button
                className="menu-toggle"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle navigation menu"
                aria-expanded={menuOpen}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            <nav className={menuOpen ? "nav-open" : ""}>
                <ul className="navbar-links">
                    <li>
                        <NavLink to="/" onClick={closeMenu}>
                            Home
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/about" onClick={closeMenu}>
                            About
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/services" onClick={closeMenu}>
                            Services
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/gallery" onClick={closeMenu}>
                            Gallery
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/referral" onClick={closeMenu}>
                            Free Estimate
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;