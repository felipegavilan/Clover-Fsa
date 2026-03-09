const Hero = () => {
  return (
    <div className="bg-slate-900 text-white py-16 px-4 mb-10 rounded-2xl mx-4">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Lo mejor en <span className="text-rose-500">CLOVERFSA</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
          Calidad, estilo y comodidad en cada uno de nuestros productos.
          Encontrá lo que buscás al mejor precio.
        </p>
        <a
          href="#productos"
          className="bg-rose-600 hover:bg-rose-700 text-white font-bold py-3 px-8 rounded-full transition-all"
        >
          Ver productos
        </a>
      </div>
    </div>
  );
};

export default Hero;
