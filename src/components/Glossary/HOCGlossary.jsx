import { OverlayTrigger, Tooltip } from "react-bootstrap";
export const HOCGlossary = ({ tooltip, text }) => {
  return (
    <OverlayTrigger
      overlay={<Tooltip id="tooltip-disabled">{tooltip}</Tooltip>}
    >
      <span className="d-inline-block">{text}</span>
    </OverlayTrigger>
  );
};
