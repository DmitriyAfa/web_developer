import { Card } from "react-bootstrap";
export const Hello = () => {
  return (
    <>
      <h1>Hello everybody!</h1>
      <Card>
        <Card.Body>
          <Card.Header>
            This project is designed to create a complete picture to create an
            app!
          </Card.Header>
          <Card.Title id="why">Why did i start this project ?</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            First reason
          </Card.Subtitle>
          <Card.Text>
            Because i want to know enought about web development to be able to
            create an app from scratch. I want to know what i don't know to make
            a good app. I want to know how a brillian developer thinks.
          </Card.Text>
          <Card.Subtitle className="mb-2 text-muted">
            Second reason
          </Card.Subtitle>
          <Card.Text>
            I ran into a problem where you know about some of the steps, but
            don't have the full view of all steps and you can't connect them.
            I'll try to connect the important points of web development. so, i
            suppose it's natural that i started this project.
          </Card.Text>

          <Card.Title>What the app do i want ?</Card.Title>
          <Card.Text>
            I want to add information and pictures via web site. This is like an
            admin panel.
          </Card.Text>

          <Card.Title>
            I must say that all my advices are a description of my way. No more
            than that.
          </Card.Title>

          <Card.Title>What about my knowledge at this stage?</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            I must confess I didn't start from scratch at all.
          </Card.Subtitle>
          <Card.Text>
            At this stage, I know a little bit about frontend and backend.
            Adaptive layout, media queries. Some HTML, CSS, JavaScript, React,
            Redux, mobX, TypeScript. I have a very superficial idea about
            databases. I have some pet-projects. But I suppose that's not
            enough. I suppose that's only a little step. I want more.
          </Card.Text>

          <blockquote className="blockquote mb-0">
            <footer className="blockquote-footer">
              But as the old saying goes,{" "}
              <cite title="Source Title">
                a journey of a thousand miles begins with a single step.
              </cite>
            </footer>
          </blockquote>
        </Card.Body>
      </Card>
    </>
  );
};
