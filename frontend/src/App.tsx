import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { BrandDetailsPage } from "./pages/BrandDetailsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/brand/:id" element={<BrandDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;