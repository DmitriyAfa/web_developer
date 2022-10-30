import { Container, Row, Col } from "react-bootstrap";
import { ArchitectureRouter } from "../../router/ArchitectureRouter";

export const ArchitecturePage = () => {
  return (
    <Container>
      <Row>
        <Col md={2} className="d-flex flex-column">
          Navbar for these topics
        </Col>
        <Col md={8}>
          <h1>
            <ArchitectureRouter />
          </h1>
        </Col>
        <Col md={2}>Navbar for this topic</Col>
      </Row>
    </Container>
  );
};
