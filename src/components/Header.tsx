import { Outlet, Link } from "react-router-dom";

import logonav from '../assets/images/logo-nav.svg';
import menu from '../assets/images/menu.svg';
import close from '../assets/images/close.svg';

import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { routeCodes, useMatchedRoute } from "../routes";

const Header = ({scrolled=false}) => {

    const showFullHeader = useMatchedRoute() != routeCodes.HOME

    return (
        <header>
            <nav className={`navbar navbar-expand-lg top-navbar navbar-dark fixed-top d-flex py-3 border-bottom` + ((scrolled || showFullHeader) && ' scrolled')}>
                <div className="container-fluid justify-content-end">
                    { showFullHeader && (
                        <Link to={routeCodes.HOME} className="navbar-brand">
                            <img src={logonav} alt="AI Sign" />
                        </Link>
                    ) }
                    <button className="navbar-toggler collapsed border-0 px-0 ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="toggler-collapsed">
                            <img src={menu} alt="Menu" />
                        </span>
                        <span className="toggler-expanded">
                            <img src={close} alt="Close" />
                        </span>
                    </button>
                    <div className="collapse navbar-collapse nav-menu-wrapper" id="navbarCollapse">
                        <ul className="navbar-nav navigation-menu ms-auto">
                            <li className="nav-item">
                                <a href="#" className="nav-link py-1 px-3 active">FAQ</a>
                            </li>
                            <li className="nav-item">
                                <Link  to={routeCodes.DEMO} className="nav-link py-1 px-3">Demo</Link>
                            </li>
                            <li className="nav-item">
                                <Link  to={routeCodes.CONTACT} className="nav-link py-1 px-3">Contact us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;