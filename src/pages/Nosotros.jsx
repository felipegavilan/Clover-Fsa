const Nosotros = () => {
  return (
    <main className="bg-white py-16">
      {/* Wrapper principal: controla el ancho y centrado */}
      <div className="max-w-4xl mx-auto px-6 space-y-16">
        {/* Sección Historia */}
        <section>
          <h2 className="text-4xl font-bold text-center mb-8">
            Sobre CLOVERFSA
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed text-center">
            En <strong>CLOVERFSA</strong>, tenemos la misión de acercarte lo
            último en tendencia con la mejor calidad. Nuestra pasión es que
            encuentres eso que buscas, con atención personalizada y el respaldo
            de un equipo que elige cada prenda para vos.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
            <h3 className="font-bold text-xl mb-2 text-gray-800">
              Calidad Garantizada
            </h3>
            <p className="text-gray-600">
              Seleccionamos cada producto cuidando cada detalle para asegurar
              que recibas lo mejor.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
            <h3 className="font-bold text-xl mb-2 text-gray-800">
              Atención Real
            </h3>
            <p className="text-gray-600">
              Estamos para asesorarte personalmente o resolver todas tus dudas
              por WhatsApp o Instagram.
            </p>
          </div>
        </section>

        {/* Sección Ubicación */}
        <section className="bg-gray-50 p-8 rounded-xl border border-gray-100">
          <h3 className="text-2xl font-bold mb-4">¿Dónde encontrarnos?</h3>
          <p className="text-gray-600 mb-6">
            Te esperamos en nuestro local. Vení a conocer las mejores prendas y
            probate lo que más te guste.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-sm text-gray-500">
              <p className="font-bold text-gray-800">Dirección:</p>
              <p>José María Uriburu 228, Formosa</p>
              <p className="font-bold text-gray-800 mt-2">Horarios:</p>
              <p>Lunes a Viernes: 09:00 - 13:00 / 17:00 - 21:00</p>
            </div>
            <a
              href="https://www.google.com/maps/place/Clover/@-26.1839633,-58.1686986,17z/data=!3m1!4b1!4m6!3m5!1s0x945ca5de06b0d7c5:0xaf34ff5a1680170c!8m2!3d-26.1839633!4d-58.1661237!16s%2Fg%2F11lf6xx85k?entry=ttu&g_ep=EgoyMDI2MDMwOC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-dark text-black px-6 py-3 rounded-lg font-bold hover:bg-gray-800 transition shadow-md"
            >
              📍 Ver ubicación en Google Maps
            </a>
          </div>
        </section>

        {/* Sección Social */}
        <section className="text-center border-t pt-8">
          <h3 className="text-xl font-bold mb-4">Seguinos en Instagram</h3>
          <a
            href="https://www.instagram.com/cloverfsa/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-tr from-yellow-400 to-fuchsia-600 text-white px-8 py-3 rounded-full font-bold hover:opacity-90 transition shadow-lg"
          >
            ¡Visitá nuestro Instagram!
          </a>
        </section>
      </div>
    </main>
  );
};

export default Nosotros;
