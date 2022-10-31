import { Container, Nav, Navbar } from "react-bootstrap";
export const HeaderApp = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/architecture">Architecture</Nav.Link>
            <Nav.Link href="/frontend">Frontend</Nav.Link>
            <Nav.Link href="/backend">Backend</Nav.Link>
            <Nav.Link href="/summary">Summary</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
