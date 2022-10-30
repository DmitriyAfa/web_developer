import {
  INDEX_ROUTE,
  FRONTEND_ROUTE,
  ARCHITECTURE_ROUTE,
  SITEMAP_ROUTE,
} from "./consts";
import { IndexPage } from "../pages/Index/Index";
import { FrontendPage } from "../pages/Frontend/Frontend";
import { Sitemap } from "../pages/Architecture/Sitemap/Sitemap";
export const pageRoutes = [
  {
    path: INDEX_ROUTE,
    Element: IndexPage,
  },
  {
    path: FRONTEND_ROUTE,
    Element: FrontendPage,
  },
  {
    path: ARCHITECTURE_ROUTE,
    Element: Sitemap,
  },
];
export const architectureRoutes = [
  {
    path: SITEMAP_ROUTE,
    Element: Sitemap,
  },
];
