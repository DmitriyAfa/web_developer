import { Card } from "react-bootstrap";
import { Question } from "./Question";
import { TSubjectOfQuestion } from "../../types/Frontend/questions";

export const Questions = ({ data }: {data: TSubjectOfQuestion}) => {
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
