import { Col, Nav } from "react-bootstrap";
export const NavbarHome = () => {
  return (
    <Col md={3}>
      <Nav className="flex-column position-fixed">
        <Nav.Link href="#why">Why did i start this project ?</Nav.Link>
        <Nav.Link href="#step0" eventKey="link-1">
          Step 0: decide what you want before you write the code
        </Nav.Link>
        <Nav.Link href="#step1">Step 1: make a sitemap</Nav.Link>
        <Nav.Link href="#idea1">
          My idea 1: на данном этапе хочу дополнить причины создания.
        </Nav.Link>
      </Nav>
    </Col>
  );
};
