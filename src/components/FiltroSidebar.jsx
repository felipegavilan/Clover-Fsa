export const FiltroSidebar = ({ categoria, setCategoria }) => {
  const categorias = ["Todas", "Indumentaria", "Calzado", "Accesorios"];

  return (
    <aside className="w-64 p-4 sticky top-24">
      {categorias.map((cat) => (
        <button
          key={cat}
          onClick={() => setCategoria(cat)}
          className={`block w-full text-left p-2 ${categoria === cat ? "font-bold text-rose-600" : ""}`}
        >
          {cat}
        </button>
      ))}
    </aside>
  );
};
