import { Nav, Navbar, Container } from "react-bootstrap"
import '../assets/styles/header.scss'
import logo from '../assets/images/logo.png' 

function Header() {
  return (
    <header>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">
          <img 
            src={logo}
            alt="Un mexicain avec un chapeau jouant la guitare"
          />
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
              <Nav.Link href="/">Acceuil</Nav.Link>
        </Nav>
        </Navbar.Collapse>
      </Container>
      </Navbar>
    </header>
  );
}

export default Header;