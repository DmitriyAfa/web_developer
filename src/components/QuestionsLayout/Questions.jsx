import { Card } from "react-bootstrap";
import { Question } from "./Question";

export const Questions = ({ data }) => {
  const { title, questions, id } = data;
  return (
    <Card.Body key={id}>
      <Card.Header>{title}</Card.Header>
      {questions.map((question, id) => {
        return <Question key={id} data={question} />;
      })}
    </Card.Body>
  );
};
