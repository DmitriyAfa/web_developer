import { INDEX_ROUTE, FRONTEND_ROUTE } from "./consts";
import { IndexPage } from "../pages/Index/Index";
import { FrontendPage } from "../pages/Frontend/Frontend";
export const routes = [
  {
    path: INDEX_ROUTE,
    Element: IndexPage,
  },
  {
    path: FRONTEND_ROUTE,
    Element: FrontendPage,
  },
];
