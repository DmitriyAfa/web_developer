import { Col, Container, Row } from "react-bootstrap";
import { Hello } from "../../components/Home/Hello";
import { NavbarHome } from "../../components/Home/NavbarHome";
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
          <NavbarHome />
        </Row>
      </Container>
      );
    </>
  );
};
