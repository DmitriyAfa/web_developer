import { Card } from "react-bootstrap";
import { Questions } from "./Questions";
import { TSubjectOfQuestions } from "../../types/Frontend/questions";

export const QuestionsLayout = ({ data }: {data: TSubjectOfQuestions}) => {
  return (
    <Card>
      {data.map((d, id) => {
        return <Questions key={id} data={d} />;
      })}
    </Card>
  );
};
