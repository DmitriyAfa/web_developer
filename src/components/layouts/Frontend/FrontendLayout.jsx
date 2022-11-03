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
              <NavDropdown.Item eventKey="4.2">
                <Link to="/frontend/javascript/questions">Questions</Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Col>
        <Outlet />
      </Row>
    </Container>
  );
};
