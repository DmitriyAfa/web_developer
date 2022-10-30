import { Routes, Route } from "react-router-dom";
import { architectureRoutes } from "./routes";

export const ArchitectureRouter = () => {
  return (
    <Routes>
      {architectureRoutes.map(({ path, Element }) => {
        return <Route key={path} path={path} element={<Element />} />;
      })}
    </Routes>
  );
};
