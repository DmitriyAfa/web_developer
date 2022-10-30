import { Container, Row, Col } from "react-bootstrap";
export const FrontendPage = () => {
  return (
    <Container>
      <Row>
        <Col md={2}>Navbar for these topics</Col>
        <Col md={8}>Frontend page</Col>
        <Col md={2}>Navbar for this topic</Col>
      </Row>
    </Container>
  );
};
