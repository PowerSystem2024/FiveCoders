import { Card } from '../components/ui';
import { Link } from 'react-router-dom';

function AboutPageWithImage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Texto */}
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-dark mb-4">Bienvenido</h1>
          <p className="text-zinc-600 max-w-3xl mb-6">
            Market Sur nace para fortalecer el comercio local del sur de Mendoza. Reunimos proveedores, vendedores y compradores en una plataforma pensada para facilitar la gestión y potenciar las oportunidades de la región.
          </p>

          <Card className="p-6 bg-zinc-900/60 border border-zinc-800 rounded-xl">
            <h2 className="text-2xl font-bold text-white mb-3">Nosotros</h2>

            <p className="text-zinc-300 mb-4">
              Somos un mercado digital local diseñado para que todo esté a un click: catálogo de productos, comunicación con proveedores y herramientas para vender más y mejor.
            </p>

            <ul className="grid gap-2 text-zinc-300 mb-6 list-inside">
              <li className="flex items-start gap-3">
                <span className="text-amber-400 font-semibold">•</span>
                <span>Conectar comercios y proveedores de la zona.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-400 font-semibold">•</span>
                <span>Facilitar ventas con herramientas sencillas y seguras.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-400 font-semibold">•</span>
                <span>Apoyar el crecimiento local mediante visibilidad y métricas.</span>
              </li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/explorar"
                className="inline-block px-5 py-3 rounded-lg bg-sky-500 hover:bg-sky-600 text-white font-semibold text-center"
                aria-label="Explorar productos Market Sur"
              >
                Explorar Productos
              </Link>

              <Link
                to="/contacto"
                className="inline-block px-5 py-3 rounded-lg text-zinc-200 border border-zinc-700 bg-transparent hover:bg-zinc-800 text-center"
                aria-label="Contactar Market Sur"
              >
                Contactar
              </Link>
            </div>
          </Card>
        </div>

        {/* Imagen */}
        <div className="flex items-center justify-center">
          <img
            src="../src/assets/sur.jpg"
            alt="mapa Mendoza billiken 1930"
            className="w-full max-w-md lg:max-w-lg rounded-lg object-cover shadow-2xl"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutPageWithImage;