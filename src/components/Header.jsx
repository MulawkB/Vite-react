import { Nav, Navbar, Container } from "react-bootstrap"
import '../assets/styles/header.scss'

function Header() {
  return (
    <header>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">
          <img 
            src="https://cdn.pixabay.com/photo/2018/03/26/14/18/man-3262834_960_720.png" 
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