import { Col, Container, Nav, Row } from "react-bootstrap";
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
          <Col md={3}>
            {" "}
            <Nav className="flex-column position-fixed">
              <Nav.Link href="#why">Why did i start this project ?</Nav.Link>
              <Nav.Link href="#step0" eventKey="link-1">
                Step 0: decide what you want before you write the code
              </Nav.Link>
              <Nav.Link href="#step1">Step 1: make a sitemap</Nav.Link>
            </Nav>
          </Col>
        </Row>
      </Container>
      );
    </>
  );
};
