import { useState } from "react";
import ProductCard from "../components/ProductCard";
import { products } from "../data/Products";
import { FiltroSidebar } from "../components/FiltroSidebar";

export const Tienda = () => {
  const [categoria, setCategoria] = useState("Todas");
  // Aquí tendrías tu array de productos
  const productosFiltrados =
    categoria === "Todas"
      ? products
      : products.filter((p) => p.category === categoria);

  return (
    <div className="flex">
      <FiltroSidebar categoria={categoria} setCategoria={setCategoria} />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
          {productosFiltrados.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};
