import { HashRouter, Routes, Route } from "react-router-dom";import { HomePage } from "./pages/HomePage/HomePage";
import { BrandDetailsPage } from "./pages/BrandDetailsPage/BrandDetailsPage";
import { ArticlesPage } from "./pages/ArticlesPage/ArticlesPage";
import { ArticleDetailsPage } from "./pages/ArticlesPage/ArticlesDetailsPage";
import { Header } from "./components/Header/Header";

function App() {
  return (
    <HashRouter>

      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/brand/:id" element={<BrandDetailsPage />} />
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/articles/:articleId" element={<ArticleDetailsPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;