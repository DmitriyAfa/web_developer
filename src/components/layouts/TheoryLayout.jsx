import { Container, Row, Col, Nav, NavDropdown } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
export const TheoryLayout = () => {
  return (
    <Container>
      <Row>
        <Col md={2} className="d-flex flex-column">
          <Nav className="flex-column position-fixed">
            <NavDropdown title="Web achitecture" id="nav-dropdown">
              <NavDropdown.Item eventKey="4.1">
                <Link to="/theory/webArchitecture">Web architecture</Link>
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="4.2">
                <Link to="/theory/webArchitecture/sitemap">Sitemap</Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Col>
        <Outlet />
      </Row>
    </Container>
  );
};
