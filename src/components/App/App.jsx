import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { HeaderApp } from "./Header";
import { HomePage } from "../Home";
import { TheoryLayout } from "../layouts/Theory/TheoryLayout";
import { TheoryPage } from "../../pages/Theory/Theory";
import { SitemapPage } from "../../pages/Theory/WebArchitecture/Sitemap/Sitemap";
import { WebArchitecturePage } from "../../pages/Theory/WebArchitecture/WebArchitecture";
import { FrontendLayout } from "../layouts/Frontend/FrontendLayout";
import { FrontendPage } from "../Frontend";
import { CommonLayout } from "../layouts/CommonLayout";
import { ArchPatterns } from "../../pages/Theory/ArchPatterns/ArchPatterns";
import { MVC, MVCPage } from "../../pages/Theory/ArchPatterns/MVC/MVC";
import { JSQuestions } from "../Frontend/JavaScript/questions/JSQuestions";
import { TSQuestions } from "../Frontend/TypeScript/questions/TSQuestions";
import { ReactQuestions } from "../Frontend/React/questions/ReactQuestions";

function App() {
  return (
    <>
      <HeaderApp />
      <Routes>
        <Route path="/" element={<HomePage />} />

        {/* TheoryPage */}
        <Route path="theory" element={<TheoryLayout />}>
          <Route index element={<TheoryPage />} />

          <Route path="webArchitecture" element={<CommonLayout />}>
            <Route index element={<WebArchitecturePage />} />
            <Route path="sitemap" element={<SitemapPage />} />
          </Route>

          <Route path="archpatterns" element={<CommonLayout />}>
            <Route index element={<ArchPatterns />} />
            <Route path="MVC" element={<MVCPage />} />
          </Route>
        </Route>

        {/* FrontendPage */}
        <Route path="frontend" element={<FrontendLayout />}>
          <Route index element={<FrontendPage />} />
          <Route path="javascript" element={<CommonLayout />}>
            <Route index element={<WebArchitecturePage />} />
            <Route path="questions" element={<JSQuestions />} />
          </Route>
          <Route path="typescript" element={<CommonLayout />}>
            <Route index element={<WebArchitecturePage />} />
            <Route path="questions" element={<TSQuestions />} />
          </Route>
          <Route path="React" element={<CommonLayout />}>
            <Route index element={<WebArchitecturePage />} />
            <Route path="questions" element={<ReactQuestions />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
