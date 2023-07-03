import { Outlet, Link } from "react-router-dom";

import logonav from '../assets/images/logo-nav.svg';
import menu from '../assets/images/menu.svg';
import close from '../assets/images/close.svg';

import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { routeCodes, useMatchedRoute } from "../routes";
import { useState } from "react";

const Header = ({scrolled=false}) => {

    const showFullHeader = useMatchedRoute() != routeCodes.HOME
    const [navExpanded, setNavExpanded] = useState(false)

    return (
        <header>
            <Navbar expand="lg" className={`navbar navbar-expand-lg top-navbar navbar-dark fixed-top d-flex py-3 border-bottom` + ((scrolled || showFullHeader || navExpanded) && ' scrolled')}
                onToggle={(expanded) => {setNavExpanded(expanded)}}
            >
                <Container>
                    { showFullHeader && (
                        <LinkContainer to={routeCodes.HOME}>
                            <Navbar.Brand>
                                <img src={logonav} alt="AI Sign" />
                            </Navbar.Brand>
                        </LinkContainer>
                    )}
                    <Navbar.Toggle aria-controls="navbar-nav" className="ms-auto" />
                    <Navbar.Collapse id="navbar-nav">
                        <Nav className="ms-auto pt-3">
                            <LinkContainer to={routeCodes.HOME}>
                                <Nav.Link>FAQ</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to={routeCodes.DEMO}>
                                <Nav.Link>Demo</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to={routeCodes.VERIFY}>
                                <Nav.Link>Upload & verify</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to={routeCodes.CONTACT}>
                                <Nav.Link>Contact us</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header;