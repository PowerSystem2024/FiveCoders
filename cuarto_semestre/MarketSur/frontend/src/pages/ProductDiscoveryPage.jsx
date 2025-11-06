import React, { useEffect, useState } from 'react';
import Sidebar from '../components/sidebar/SideBar';

export default function ProductDiscoveryPage() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('all');
  const [sort, setSort] = useState('relevance');
  const [results, setResults] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6);
  const [favorites, setFavorites] = useState(new Set());

  const MOCK_PRODUCTS = [
    /* ...tus productos mock... (igual que antes) ... */
    { id: 1, name: 'Madera roble 160x90', description: 'Tabla maciza de roble, 2.5 cm', category: 'maderas', price: 12000, currency: 'ARS', provider: 'Maderas SA', image: 'https://images.unsplash.com/photo-1615971677499-5467cbab01c0?w=400' },
    { id: 2, name: 'Tornillo M6x20', description: 'Acero inoxidable, pack 100', category: 'ferreteria', price: 1500, currency: 'ARS', provider: 'Ferretería Norte', image: 'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=400' },
    { id: 3, name: 'Harina 000 - 25kg', description: 'Harina para panificación, saco 25kg', category: 'harinas', price: 20000, currency: 'ARS', provider: 'Molinos Patagónicos', image: 'https://images.unsplash.com/photo-1628274761584-8a93b6167d7c?w=400' },
    { id: 4, name: 'Levadura seca 1kg', description: 'Levadura instantánea para panaderías', category: 'harinas', price: 4500, currency: 'ARS', provider: 'Insumos Panaderos', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400' },
    { id: 5, name: 'Barniz natural 1L', description: 'Barniz para muebles, secado rápido', category: 'maderas', price: 3800, currency: 'ARS', provider: 'Químicos Norte', image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=400' },
    { id: 6, name: 'Sierra circular 1200W', description: 'Herramienta eléctrica para carpintería', category: 'herramientas', price: 85000, currency: 'ARS', provider: 'Herramientas SRL', image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=400' },
    { id: 7, name: 'Clavo 3.5x40', description: 'Clavo galvanizado, kilo', category: 'ferreteria', price: 900, currency: 'ARS', provider: 'Ferretería Norte', image: 'https://images.unsplash.com/photo-1563207153-f403bf289096?w=400' },
    { id: 8, name: 'Madera roble sin procesar', description: 'Tablas en bruto', category: 'maderas', price: 8000, currency: 'ARS', provider: 'Carpintería El Roble', image: 'https://images.unsplash.com/photo-1606137548310-e3717d0f7ef6?w=400' }
  ];

  const CATEGORIES = [
    { key: 'all', label: 'Todas' },
    { key: 'maderas', label: 'Maderas' },
    { key: 'ferreteria', label: 'Ferretería' },
    { key: 'harinas', label: 'Harinas' },
    { key: 'herramientas', label: 'Herramientas' }
  ];

  useEffect(() => {
    setResults(MOCK_PRODUCTS);
    setVisibleCount(6);
  }, []);

  useEffect(() => {
    doSearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category, sort]);

  function doSearch() {
    const q = (query || '').trim().toLowerCase();
    let filtered = MOCK_PRODUCTS.filter(p => {
      if (category !== 'all' && p.category !== category) return false;
      if (!q) return true;
      return p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q) || p.provider.toLowerCase().includes(q);
    });

    if (sort === 'price_asc') filtered = filtered.sort((a,b)=>a.price - b.price);
    if (sort === 'price_desc') filtered = filtered.sort((a,b)=>b.price - a.price);

    setResults(filtered);
    setVisibleCount(6);
  }

  function toggleFavorite(id) {
    setFavorites(prev => {
      const copy = new Set(prev);
      if (copy.has(id)) copy.delete(id);
      else copy.add(id);
      return copy;
    });
  }

  function loadMore() {
    setVisibleCount(c => c + 6);
  }

  return (
    // overflow-x-hidden evita scroll horizontal causado por algún elemento fijo ancho
    <div className="flex min-h-screen bg-orange-50 text-zinc-800 overflow-x-hidden">
      <Sidebar />

      {/* main ocupa todo el ancho disponible y se corre en sm+ para dejar espacio al sidebar fijo */}
      <main className="flex-1 ml-0 sm:ml-64 w-full">
        {/* Contenedor centrado interno — así el ml-64 no genera hueco visual extra */}
        <div className="max-w-6xl mx-auto px-6 py-8">
          <header className="mb-8 pt-2">
            <h1 className="text-4xl font-bold mb-2">Descubrí productos</h1>
            <p className="text-lg text-zinc-600">Buscá insumos, compará proveedores y guardá favoritos.</p>
          </header>

          {/* Controles */}
          <div className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-3 items-end">
            <div className="col-span-2 flex gap-3">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && doSearch()}
                placeholder="Buscar productos, proveedores..."
                className="flex-1 px-4 py-3 rounded-lg border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <button onClick={doSearch} className="px-5 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition">
                Buscar
              </button>
            </div>

            <div className="flex gap-2">
              <select 
                value={category} 
                onChange={(e)=>setCategory(e.target.value)} 
                className="flex-1 px-3 py-2 rounded-lg border border-zinc-300 bg-white"
              >
                {CATEGORIES.map(c=> <option key={c.key} value={c.key}>{c.label}</option>)}
              </select>

              <select 
                value={sort} 
                onChange={(e)=>setSort(e.target.value)} 
                className="flex-1 px-3 py-2 rounded-lg border border-zinc-300 bg-white"
              >
                <option value="relevance">Relevancia</option>
                <option value="price_asc">Precio ↑</option>
                <option value="price_desc">Precio ↓</option>
              </select>
            </div>
          </div>

          {/* Resultados */}
          <section>
            {results.length === 0 ? (
              <p className="text-center text-zinc-500 py-12">No hay resultados. Probá otra búsqueda o categoría.</p>
            ) : (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                  {results.slice(0, visibleCount).map(item => (
                    <article key={item.id} className="bg-white rounded-xl shadow hover:shadow-lg transition p-4">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-40 object-cover rounded-lg mb-3"
                      />
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-orange-600 mb-1">{item.name}</h3>
                          <p className="text-sm text-zinc-700 mb-2">{item.description}</p>
                          <p className="text-xs text-zinc-500 mb-2">Proveedor: {item.provider}</p>
                          <p className="text-base font-medium text-zinc-900">${item.price.toLocaleString()} {item.currency}</p>
                        </div>

                        <div className="flex flex-col gap-2">
                          <button
                            onClick={() => alert('Ver producto: ' + item.name)}
                            className="px-3 py-1 bg-white border border-zinc-300 rounded-lg text-sm hover:bg-zinc-50 transition"
                          >
                            Ver
                          </button>
                          <button
                            onClick={() => toggleFavorite(item.id)}
                            className={`px-3 py-1 rounded-lg text-sm transition ${
                              favorites.has(item.id) 
                                ? 'bg-orange-500 text-white hover:bg-orange-600' 
                                : 'bg-white border border-zinc-300 hover:bg-zinc-50'
                            }`}
                          >
                            {favorites.has(item.id) ? '★' : '☆'}
                          </button>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>

                {visibleCount < results.length && (
                  <div className="flex justify-center">
                    <button 
                      onClick={loadMore} 
                      className="px-6 py-2 bg-white border border-zinc-300 rounded-lg hover:bg-zinc-50 transition"
                    >
                      Cargar más
                    </button>
                  </div>
                )}
              </>
            )}
          </section>
        </div>
      </main>
    </div>
  );
}

