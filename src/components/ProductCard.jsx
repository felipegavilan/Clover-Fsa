import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const hasStock = product.stock > 0;

  return (
    <div
      className={`w-full border rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 ${!hasStock ? "opacity-60 grayscale" : ""}`}
    >
      {!hasStock && (
        <span className="absolute top-2 left-2 bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded z-10">
          AGOTADO
        </span>
      )}
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
            className={`px-4 py-2 rounded-md transition-all text-center text-sm font-medium block ${
              hasStock
                ? "bg-rose-600 text-white hover:bg-rose-700"
                : "bg-slate-100 text-slate-400 border border-slate-200 cursor-not-allowed pointer-events-none"
            }`}
          >
            {hasStock ? "Ver detalle" : "Sin Stock"}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
