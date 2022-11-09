import { Col } from "react-bootstrap";
import { QuestionsLayout } from "../../../QuestionsLayout/QuestionsLayout";
import { questions } from "./common";
export const JSQuestions = () => {
  return (
    <>
      <Col md={8}>
        <QuestionsLayout data={questions} />
      </Col>
      <Col md={2}>Right nav</Col>
    </>
  );
};
