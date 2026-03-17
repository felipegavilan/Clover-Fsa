import { useState } from "react";
import ProductCard from "../components/ProductCard";
import { products } from "../data/Products";
import { FiltroSidebar } from "../components/FiltroSidebar";

export const Tienda = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [categoria, setCategoria] = useState("Todas");
  // Aquí tendrías tu array de productos
  const productosFiltrados =
    categoria === "Todas"
      ? products
      : products.filter((p) => p.category === categoria);

  return (
    <div className="relative">
      {/* Botón Flotante Vertical (Solo Móvil) */}
      <button
        onClick={() => setIsSidebarOpen(true)}
        className="md:hidden fixed left-0 top-1/2 -translate-y-1/2 z-40 bg-rose-600 text-white px-2 py-3 rounded-r-lg shadow-lg flex items-center justify-center"
        style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
      >
        <span className="uppercase font-bold text-xs tracking-widest">
          Filtros
        </span>
      </button>
      <div className="flex flex-col md:flex-row min-h-screen">
        {/* Pasamos el estado al Sidebar */}
        <FiltroSidebar
          categoria={categoria}
          setCategoria={setCategoria}
          isOpen={isSidebarOpen}
          setIsOpen={setIsSidebarOpen}
        />
        <div className="flex-1 p-4 md:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
            {productosFiltrados.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
