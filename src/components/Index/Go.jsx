import { Card, OverlayTrigger, Tooltip, Button } from "react-bootstrap";
export const Go = () => {
  return (
    <>
      <Card>
        <Card.Body>
          <Card.Header>What i do to create this app</Card.Header>
          <Card.Title>
            Step 0: decide what you want before you write the code
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">A</Card.Subtitle>
          <Card.Text>
            You need to figure out what you want. You can ask yourself: what
            problems it will solve.
          </Card.Text>
          <Card.Text>
            I said it above. Look at "Why did i start this project ?".
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};
