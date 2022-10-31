import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
export const HeaderApp = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link to="/">Navbar</Link>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/theory">Theory</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/frontend">Frontend</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/backend">Backend</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/database">Database</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/summary">Summary</Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
