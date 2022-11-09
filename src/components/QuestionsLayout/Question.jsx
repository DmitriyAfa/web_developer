import { Card, Accordion } from "react-bootstrap";

export const Question = ({ data }) => {
  const { question, answers, id } = data;
  return (
    <Accordion key={id}>
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          <p>{question} ?</p>
        </Accordion.Header>
        <Accordion.Body>
          {answers.map(({ topic, answer, id }) => {
            return topic !== undefined ? (
              <div className="mb-3 mt-3" key={id}>
                <Card.Subtitle className="mb-3 mt-3 bg-warning">
                  {topic}
                </Card.Subtitle>
                {answer.map((a, id) => {
                  return <Card.Text key={id}>{a}</Card.Text>;
                })}
              </div>
            ) : (
              <div className="mb-3 mt-3" key={id}>
                {answer.map((a, id) => {
                  return <Card.Text key={id}>{a}</Card.Text>;
                })}
              </div>
            );
          })}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};
