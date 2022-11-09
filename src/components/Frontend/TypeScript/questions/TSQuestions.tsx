import { Col } from "react-bootstrap";
import { QuestionsLayout } from "../../../QuestionsLayout/QuestionsLayout";
import { questions } from "./questions";
export const TSQuestions = () => {
  return (
    <>
      <Col md={10}>
        <QuestionsLayout data={questions} />
      </Col>
      {/* <Col md={2}>Right nav</Col> */}
    </>
  );
};
