import { Container, Nav, Image, Navbar as NavbarBootstrap } from 'react-bootstrap';

import './Navbar.css';

const Navbar = () => {
    return (
        <NavbarBootstrap className="navbar" expand="lg">
            <Container>
                <NavbarBootstrap.Brand href="#home">
                    <Image className="logo" src="./Logo.png" />
                </NavbarBootstrap.Brand>
                <NavbarBootstrap.Toggle className="toggle" aria-controls="basic-navbar-nav" />
                <NavbarBootstrap.Collapse id="basic-navbar-nav" className="collapse">
                    <Nav>
                        <Nav.Link className="nav-link" href="#home">
                            Home
                        </Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link className="nav-link" href="#about">
                            About
                        </Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link className="nav-link" href="#services">
                            Services
                        </Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link className="nav-link" href="#contacts">
                            Contacts
                        </Nav.Link>
                    </Nav>
                </NavbarBootstrap.Collapse>
            </Container>
        </NavbarBootstrap>
    );
};

export default Navbar;
