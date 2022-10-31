import { Container, Row, Col } from "react-bootstrap";
import { Outlet } from "react-router-dom";

export const ArchitectureLayout = () => {
  return (
    <Container>
      <Row>
        <Col md={2} className="d-flex flex-column">
          left nav
        </Col>
        <Outlet />
      </Row>
    </Container>
  );
};
