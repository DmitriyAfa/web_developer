import { Routes, Route } from "react-router-dom";
import { pageRoutes } from "./routes";

export const AppRouter = () => {
  return (
    <Routes>
      {pageRoutes.map(({ path, Element }) => {
        return <Route key={path} path={path} element={<Element />} />;
      })}
    </Routes>
  );
};
