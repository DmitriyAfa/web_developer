import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { HeaderApp } from "./Header";
import { HomePage } from "../../pages/Home/Home";
import { TheoryLayout } from "../layouts/TheoryLayout";
import { TheoryPage } from "../../pages/Theory/Theory";
import { SitemapPage } from "../../pages/Theory/WebArchitecture/Sitemap/Sitemap";
import { WebArchitectureLayout } from "../layouts/WebArchitectureLayout";
import { WebArchitecturePage } from "../../pages/Theory/WebArchitecture/WebArchitecture";

function App() {
  return (
    <>
      <HeaderApp />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route index element={<HomePage />} /> */}
        {/* <Route path="contacts" element={<p>Our contact</p>} />
          <Route path="team" element={<p>Our team</p>} /> */}

        <Route path="theory" element={<TheoryLayout />}>
          <Route index element={<TheoryPage />} />
          <Route path="webArchitecture" element={<WebArchitectureLayout />}>
            <Route index element={<WebArchitecturePage />} />
            <Route path="sitemap" element={<SitemapPage />} />
          </Route>
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
