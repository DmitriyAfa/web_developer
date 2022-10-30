import { Container, Row, Col } from "react-bootstrap";
export const IndexPage = () => {
  return (
    <Container>
      <Row>
        <Col md={3}>Сайд-бар с темами главной страницы</Col>
        <Col md={9}>Index page</Col>
      </Row>
    </Container>
  );
};
