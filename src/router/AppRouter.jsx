import { Routes, Route } from "react-router-dom";
import { routes } from "./routes";

export const AppRouter = () => {
  return (
    <Routes>
      {routes.map(({ path, Element }) => {
        return <Route key={path} path={path} element={<Element />} />;
      })}
    </Routes>
  );
};
