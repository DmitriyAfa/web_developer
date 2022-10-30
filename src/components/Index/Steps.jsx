import { Card } from "react-bootstrap";
import { GoingTo } from "../Glossary/GoingTo";
import { ToFigureOut } from "../Glossary/ToFigureOut";
import { Link } from "react-router-dom";

export const Steps = () => {
  const StepOne = () => {
    return (
      <Card.Title>
        Step 1: make a <Link to="/">sitemap</Link>
      </Card.Title>
    );
  };
  return (
    <>
      <Card>
        <Card.Body>
          <Card.Header>
            Now i'm <GoingTo /> talk about what i do to create this app
          </Card.Header>
          <Card.Title>
            Step 0: decide what you want before you write the code
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            A: You need <ToFigureOut /> what you want. You can ask yourself:
            what problems it will solve.
          </Card.Subtitle>
          <Card.Text>
            I said it above. Look at "Why did i start this project ?" and "What
            the app do i want ?".
          </Card.Text>
          <Card.Subtitle className="mb-2 text-muted">
            B: You need <ToFigureOut /> what you need for this project. Which
            technology and knowledge you need to create the app you want.
          </Card.Subtitle>
          <Card.Text>
            First, I need an idea of the <Link to="#">architecture</Link> of the
            application, like what I want.
          </Card.Text>
          <Card.Text>
            Secondly, I need an idea of the <Link to="#">frontend</Link>.
          </Card.Text>
          <Card.Text>
            Thirtly, I need an idea of the <Link to="#">backend</Link>.
          </Card.Text>
          <Card.Text>
            Fourthly, I need an idea of the <Link to="#">state managers</Link>.
          </Card.Text>
          <Card.Text>
            Fifthly, I need an idea of the <Link to="#">data bases</Link>.
          </Card.Text>
          <Card.Subtitle className="mb-2 text-muted">
            C: you need <ToFigureOut /> what is unnecessary in this stage.
          </Card.Subtitle>
          <Card.Text>
            It means to exclude what you can't do at this stage, or that will
            take too much time and effort. instead I'd prefer to focus on what I
            can. You can to create your own application with the necessary
            minimum of knowlegde.
          </Card.Text>
          <Card.Text>
            As an example, i'm going to create this app without an admin panel.
            It means that i won't be using the backend, the state manager and
            the database.
          </Card.Text>
          <Card.Text>
            You need to create a simple version of this app. And in the
            meantime, learn the necessary technologies for an advanced version
            of your application. Step by step.
          </Card.Text>
          <StepOne />
        </Card.Body>
      </Card>
    </>
  );
};
