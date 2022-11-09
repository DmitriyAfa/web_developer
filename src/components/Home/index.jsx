import { Col, Container, Row } from "react-bootstrap";
import { Hello } from "./Hello";
import { NavbarHome } from "./NavbarHome";
import { Steps } from "./Steps";
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
