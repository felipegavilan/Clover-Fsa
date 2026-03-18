import { useParams } from "react-router-dom";
import { products } from "../data/Products";
import { generarLinkWhatsApp } from "../utils/whatsapp"; // 1. Importamos la función
import AnimatedPage from "../components/AnimatedPage";

const ProductDetail = () => {
  const { id } = useParams(); // Obtiene el ID de la URL
  const product = products.find((p) => p.id === parseInt(id));

  if (!product)
    return <p className="text-center mt-10">Producto no encontrado</p>;

  // 2. Función que maneja el clic
  const handleCompra = () => {
    const link = generarLinkWhatsApp(product);
    window.open(link, "_blank"); // Abre el link en una nueva pestaña
  };

  return (
    <AnimatedPage>
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <img
            src={product.image}
            alt={product.name}
            className="w-full rounded-xl shadow-lg"
          />
          <div>
            <h1 className="text-4xl font-bold text-gray-900">{product.name}</h1>
            <p className="text-2xl text-green-600 font-semibold my-4">
              ${product.price}
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              {product.description}
            </p>

            <button
              onClick={handleCompra} // 3. Asignamos el evento
              className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-lg"
            >
              Comprar por WhatsApp
            </button>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default ProductDetail;
