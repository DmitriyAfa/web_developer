import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { HeaderApp } from "./Header";
import { HomePage } from "../../pages/Home/Home";
import { ArchitectureLayout } from "../layouts/Architecture";
import { ArchitecturePage } from "../../pages/Architecture/Architecture";
import { SitemapPage } from "../../pages/Architecture/Sitemap/Sitemap";

function App() {
  return (
    <>
      <HeaderApp />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route index element={<HomePage />} /> */}
        {/* <Route path="contacts" element={<p>Our contact</p>} />
          <Route path="team" element={<p>Our team</p>} /> */}

        <Route path="architecture" element={<ArchitectureLayout />}>
          <Route index element={<ArchitecturePage />} />
          <Route path="sitemap" element={<SitemapPage />} />
        </Route>
        {/* <Route path="about-us" element={<Navigate to="/about" replace />} />
          <Route path="posts" element={<Blogpage />} />
          <Route path="posts/:id" element={<Singlepage />} />
          <Route path="posts/:id/edit" element={<Editpost />} />
          <Route
            path="posts/new"
            element={
              <RequireAuth>
                <Createpost />
              </RequireAuth>
            }
          />
          <Route path="login" element={<LoginPage />} />
          <Route path="*" element={<Notfoundpage />} /> */}
        {/* </Route> */}
      </Routes>
    </>
  );
}

export default App;
