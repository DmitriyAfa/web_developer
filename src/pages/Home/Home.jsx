import { Col, Container, Row } from "react-bootstrap";
import { Hello } from "../../components/Home/Hello";
import { Steps } from "../../components/Home/Steps";
export const HomePage = () => {
  return (
    <>
      <Container>
        <Row>
          <Col md={9}>
            <Hello />
            <Steps />
          </Col>
          <Col md={3}>Navbar for this topic</Col>
        </Row>
      </Container>
      );
    </>
  );
};
