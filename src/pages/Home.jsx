import { products } from "../data/Products";
import ProductCard from "../components/ProductCard";
import Hero from "../components/Hero";
const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Hero />
      <h1 className="text-3xl font-bold text-center mb-8">
        Nuestros Productos
      </h1>

      {/* Grid Responsivo: 1 columna en móvil, 2 en tablet, 3 o 4 en desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
