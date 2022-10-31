import { Card } from "react-bootstrap";
import { GoingTo } from "../Glossary/GoingTo";
import { ToFigureOut } from "../Glossary/ToFigureOut";
import { Link } from "react-router-dom";
import sitemapImg from "../../pages/Theory/WebArchitecture/Sitemap/sitemap.jpg";
export const Steps = () => {
  const StepZero = () => {
    return (
      <>
        <Card.Title id="step0">
          Step 0: decide what you want before you write the code
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          A: You need <ToFigureOut /> what you want. You can ask yourself: what
          problems it will solve.
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
          It means to exclude what you can't do at this stage, or that will take
          too much time and effort. instead I'd prefer to focus on what I can.
          You can to create your own application with the necessary minimum of
          knowlegde.
        </Card.Text>
        <Card.Text>
          As an example, i'm going to create this app without an admin panel. It
          means that i won't be using the backend, the state manager and the
          database.
        </Card.Text>
        <Card.Text>
          You need to create a simple version of this app. And in the meantime,
          learn the necessary technologies for an advanced version of your
          application. Step by step.
        </Card.Text>
      </>
    );
  };
  const StepOne = () => {
    return (
      <>
        <Card.Title id="step1">
          Step 1: make a <Link to="/">sitemap</Link>
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          A: you need to visualize the site map.
        </Card.Subtitle>
        <Card.Img variant="top" src={sitemapImg} />
        <Card.Text>
          Try to imagine the structure of the site as shown above. This will
          give your brain a clean structure for the routes.
        </Card.Text>
        <Card.Subtitle className="mb-2 text-muted">
          B: make the components for the routes.
        </Card.Subtitle>
        <Card.Text>
          You need to make the page-components. I mean you need somethin like
          the ArchitecturePage, the FrontendPage, the BakcendPage and the
          DatabasePage.
        </Card.Text>
        <Card.Subtitle className="mb-2 text-muted">
          C: make the routes.
        </Card.Subtitle>
        <Card.Text>
          You need to create routes for the pages. And routes within routes. I
          mean, you need to create any routing methods in your application.
        </Card.Text>
        <Card.Text>
          Router for the ArchitecturePage is something like '/architecture'.
        </Card.Text>
        <Card.Text>
          And you need routes for 'topics' in the ArchitecturePage. This is
          something like '/architecture/topicName'.
        </Card.Text>
      </>
    );
  };
  return (
    <>
      <Card>
        <Card.Body>
          <Card.Header>
            Now i'm <GoingTo /> talk about what i do to create this app
          </Card.Header>
          <StepZero />
          <StepOne />
        </Card.Body>
      </Card>
    </>
  );
};
