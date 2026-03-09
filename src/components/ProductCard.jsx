import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="w-full border rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 bg-white">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800">{product.name}</h3>
        <p className="text-gray-600 text-sm mt-1 line-clamp-2">
          {product.description}
        </p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xl font-semibold text-green-600">
            ${product.price.toLocaleString("es-AR")}
          </span>
          <Link
            to={`/product/${product.id}`}
            className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors text-center"
          >
            <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors">
              Ver detalle
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
