import { Outlet, Link } from "react-router-dom";

import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

const Header = () => {
    return (
        <header className="border-bottom py-3">
            <div className="container-fluid">
                <nav className="nav nav-masthead justify-content-center float-end">
                    <a href="#" className="nav-link fw-bold py-1 px-3 active">FAQ</a>
                    <Link  to="/demo" className="nav-link fw-bold py-1 px-3">Demo</Link>
                    <Link  to="/contact" className="nav-link fw-bold py-1 px-3">Contact us</Link>
                </nav>
            </div>
        </header>
    )
}

export default Header;