import { Container, Row, Col } from "react-bootstrap";
import { Index } from "../../components/Index/Index";
export const IndexPage = () => {
  return (
    <Container>
      <Row>
        <Col md={10}>
          <Index />
        </Col>
        <Col md={2}>Сайд-бар с темами главной страницы</Col>
      </Row>
    </Container>
  );
};
