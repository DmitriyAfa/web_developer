import { Col } from "react-bootstrap";
import { MVCMain } from "../../../../components/Theory/ArchPatterns/MVC/MVCMain";
export const MVCPage = () => {
  return (
    <>
      <Col md={8}>
        <MVCMain />
      </Col>
      <Col md={2}>Right nav</Col>
    </>
  );
};
