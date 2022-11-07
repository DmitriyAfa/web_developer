import { Card } from "react-bootstrap";
import { AboutMVC } from "./AboutMVC";
import { ClientServerMVC } from "./ClientServerMVC";

export const MVCMain = () => {
  return (
    <Card>
      <AboutMVC />
      <ClientServerMVC />
    </Card>
  );
};
