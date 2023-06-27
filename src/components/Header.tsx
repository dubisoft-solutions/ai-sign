import { Outlet, Link } from "react-router-dom";

import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand top-navbar navbar-dark fixed-top d-flex py-3 border-bottom">
                <div className="container-fluid justify-content-end">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a href="#" className="nav-link py-1 px-3 active">FAQ</a>
                        </li>
                        <li className="nav-item">
                            <Link  to="/demo" className="nav-link py-1 px-3">Demo</Link>
                        </li>
                        <li className="nav-item">
                            <Link  to="/contact" className="nav-link py-1 px-3">Contact us</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header;