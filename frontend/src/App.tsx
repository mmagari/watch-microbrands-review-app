import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import { BrandDetailsPage } from "./pages/BrandDetailsPage/BrandDetailsPage";
import { Header } from "./components/Header";

function App() {
  return (
    <BrowserRouter>

      <Header />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/brand/:id" element={<BrandDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;