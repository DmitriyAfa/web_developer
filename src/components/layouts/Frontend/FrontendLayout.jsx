import { Container, Row, Col, Nav, NavDropdown } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
export const FrontendLayout = () => {
  return (
    <Container>
      <Row>
        <Col md={2} className="d-flex flex-column">
          <Nav className="flex-column position-fixed">
            <NavDropdown title="JavaScript" id="nav-dropdown">
              <NavDropdown.Item eventKey="1.1">
                <Link to="/frontend/javascript/questions">Questions</Link>
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Typescript" id="nav-dropdown">
              <NavDropdown.Item eventKey="2.1">
                <Link to="/frontend/typescript/questions">Questions</Link>
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="React" id="nav-dropdown">
              <NavDropdown.Item eventKey="3.1">
                <Link to="/frontend/react/questions">Questions</Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Col>
        <Outlet />
      </Row>
    </Container>
  );
};
