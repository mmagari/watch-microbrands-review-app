import { HashRouter, Routes, Route } from "react-router-dom";import { HomePage } from "./pages/HomePage/HomePage";
import { BrandDetailsPage } from "./pages/BrandDetailsPage/BrandDetailsPage";
import { Header } from "./components/Header/Header";

function App() {
  return (
    <HashRouter>

      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/brand/:id" element={<BrandDetailsPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;