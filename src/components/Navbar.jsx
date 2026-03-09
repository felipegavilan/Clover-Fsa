import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo / Nombre de la marca */}
        <Link
          to="/"
          className="text-2xl font-bold text-pink-600 hover:opacity-80 transition-opacity"
        >
          CLOVER<span className="text-gray-800">FSA</span>
        </Link>

        {/* Enlaces de navegación */}
        <div className="flex gap-6 items-center">
          <Link
            to="/"
            className="text-gray-600 hover:text-pink-600 font-medium transition-colors"
          >
            Inicio
          </Link>

          {/* Botón de contacto rápido (Opcional) */}
          <a
            href="https://wa.me/543704083000"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold hover:bg-green-600 transition-all shadow-sm"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
