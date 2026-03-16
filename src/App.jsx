import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Navbar from "./components/Navbar";
import Nosotros from "./pages/Nosotros";
import { Tienda } from "./pages/Tienda";

function App() {
  return (
    <div className="min-h-screen w-full bg-slate-50">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tienda" element={<Tienda />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/nosotros" element={<Nosotros />} />
      </Routes>
    </div>
  );
}

export default App;
