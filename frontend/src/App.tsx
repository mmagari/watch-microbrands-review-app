import { HashRouter, Routes, Route } from "react-router-dom";import { HomePage } from "./pages/HomePage/HomePage";
import { BrandDetailsPage } from "./pages/BrandDetailsPage/BrandDetailsPage";
import { Articles } from "./pages/ArticlesPage/Articles";
import { Header } from "./components/Header/Header";

function App() {
  return (
    <HashRouter>

      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/brand/:id" element={<BrandDetailsPage />} />
        <Route path="/articles" element={<Articles />} />
      </Routes>
    </HashRouter>
  );
}

export default App;