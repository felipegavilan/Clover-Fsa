export const FiltroSidebar = ({
  categoria,
  setCategoria,
  isOpen,
  setIsOpen,
}) => {
  const categorias = ["Todas", "Indumentaria", "Calzado", "Accesorios"];

  return (
    <>
      {/* Overlay: Capa oscura que cierra el menú al tocar afuera (Solo móvil) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* El Sidebar */}
      <aside
        className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-white p-4 transition-transform duration-300
        md:relative md:translate-x-0 md:z-0 md:bg-transparent
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
      `}
      >
        {/* Botón de cerrar dentro del Sidebar (solo móvil) */}
        <div className="flex justify-between items-center mb-6 md:hidden border-b pb-4">
          <span className="font-bold uppercase text-gray-400">Filtros</span>
          <button
            onClick={() => setIsOpen(false)}
            className="bg-gray-100 p-2 rounded-full text-gray-600"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {categorias.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setCategoria(cat);
              setIsOpen(false); // Se cierra al elegir categoría
            }}
            className={`block w-full text-left p-2 ${categoria === cat ? "font-bold text-rose-600" : ""}`}
          >
            {cat}
          </button>
        ))}
      </aside>
    </>
  );
};
