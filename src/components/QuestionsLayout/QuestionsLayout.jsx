import { Card } from "react-bootstrap";
import { Questions } from "./Questions";

export const QuestionsLayout = ({ data }) => {
  console.log(data);
  return (
    <Card>
      {data.map((d, id) => {
        return <Questions key={id} data={d} />;
      })}
    </Card>
  );
};
