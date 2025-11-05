import { useState } from 'react';
import Sidebar from '../components/sidebar/SideBar';

function UserPage() {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = () => {
        // Simula resultados (reemplazar con el back jona!!!)
        setResults([
            { id: 1, name: 'Producto A', description: 'Descripción breve' },
            { id: 2, name: 'Producto B', description: 'Otra descripción' },
        ]);
    };

    return (
        <div className="flex">
            <Sidebar />

            {/* Imagen decorativa entre sidebar fijo y main */}
            <div className="hidden lg:block fixed left-64 top-32 h-[calc(100vh-3.5rem)] w-60 z-10 pointer-events-none">
                <img
                    src="../src/assets/Mendoza1887.webp"
                    alt="Decoración lateral"
                    className="h-full w-full object-cover opacity-80"
                    loading="lazy"
                />
            </div>

            {/* <main className="pt-14 transition-all duration-200 sm:ml-64">
                {/* contenido */}
            {/* </main> */} 

            <main className="flex-2 ml-0 sm:ml-64 min-h-screen bg-orange-50 text-zinc-800 px-6 py-10">
                {/* Encabezado */}
                <header className="max-w-4xl mx-auto text-center mb-10">
                    <h1 className="text-4xl font-bold mb-2">Tu espacio personal</h1>
                    <p className="text-lg text-zinc-600">Explorá tus productos, favoritos o historial</p>
                </header>

                {/* Barra de búsqueda */}
                <div className="max-w-3xl mx-auto mb-8 flex gap-4">
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Buscar productos..."
                        className="flex-1 px-4 py-3 rounded-lg border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />
                    <button
                        onClick={handleSearch}
                        className="px-5 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg"
                    >
                        Buscar
                    </button>
                </div>

                {/* Resultados */}
                <div className="max-w-3xl mx-auto grid gap-6">
                    {results.length > 0 ? (
                        results.map((item) => (
                            <div
                                key={item.id}
                                className="p-6 bg-white rounded-xl shadow-md border border-zinc-200 hover:shadow-lg transition"
                            >
                                <h2 className="text-xl font-bold text-orange-600">{item.name}</h2>
                                <p className="text-zinc-700">{item.description}</p>
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-zinc-500">No hay resultados aún.</p>
                    )}
                </div>
            </main>
        </div>
    );
}

export default UserPage;