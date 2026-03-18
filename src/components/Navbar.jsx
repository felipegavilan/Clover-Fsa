import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="font-bold text-2xl text-rose-600">
            CLOVER<span className="text-gray-800">FSA</span>
          </Link>

          {/* Menú PC (visible md+) */}
          <div className="hidden md:flex gap-8 items-center font-medium">
            <Link to="/" className="hover:text-rose-600">
              Inicio
            </Link>
            <Link to="/tienda" className="hover:text-rose-600">
              Tienda
            </Link>
            <Link to="/nosotros" className="hover:text-rose-600">
              Nosotros
            </Link>
            <a
              href="https://wa.me/543704083000"
              target="_blank"
              className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-700 transition"
            >
              WhatsApp
            </a>
          </div>

          {/* Botón Hamburguesa (solo visible en móviles) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-600 focus:outline-none"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Menú Desplegable (Móvil) */}
        {isOpen && (
          <div className="md:hidden flex flex-col gap-4 pb-6 pt-2 text-center font-medium">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="block py-2 hover:bg-gray-50"
            >
              Inicio
            </Link>
            <Link
              to="/tienda"
              onClick={() => setIsOpen(false)}
              className="block py-2 hover:bg-gray-50"
            >
              Tienda
            </Link>
            <Link
              to="/nosotros"
              onClick={() => setIsOpen(false)}
              className="block py-2 hover:bg-gray-50"
            >
              Nosotros
            </Link>
            <a
              href="https://wa.me/543704083000"
              target="_blank"
              className="block py-2 bg-green-500 text-white mx-4 rounded-lg"
            >
              WhatsApp
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
