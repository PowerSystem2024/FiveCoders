import React, { useState } from 'react';
import Sidebar from '../components/sidebar/SideBar';

function ProductPage() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Pan artesanal',
      description: 'Pan elaborado con masa madre y harina integral.',
      price: 1200,
      currency: 'ARS',
      category: 'Panificados',
      image: 'https://via.placeholder.com/80',
    },
    {
      id: 2,
      name: 'Mesa de roble',
      description: 'Mueble artesanal de madera maciza.',
      price: 85000,
      currency: 'ARS',
      category: 'Muebles',
      image: 'https://via.placeholder.com/80',
    },
  ]);

  const [isEditing, setIsEditing] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    currency: 'ARS',
    category: '',
    image: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCreate = () => {
    const newProduct = { ...formData, id: Date.now() };
    setProducts((prev) => [...prev, newProduct]);
    setFormData({ name: '', description: '', price: '', currency: 'ARS', category: '', image: '' });
  };

  const handleEdit = (product) => {
    setIsEditing(true);
    setSelectedProduct(product);
    setFormData(product);
  };

  const handleUpdate = () => {
    setProducts((prev) => prev.map((p) => (p.id === selectedProduct.id ? formData : p)));
    setIsEditing(false);
    setSelectedProduct(null);
    setFormData({ name: '', description: '', price: '', currency: 'ARS', category: '', image: '' });
  };

  const handleDelete = (id) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  const handleRefresh = () => {
    console.log('Actualizando productos...');
  };

  return (
    <div className="flex">
      <Sidebar />

      <main className="flex-1 ml-0 sm:ml-64 min-h-screen bg-orange-50 text-zinc-800 px-6 py-10">
        <header className="max-w-4xl mx-auto text-center mb-10">
          <h1 className="text-4xl font-bold mb-2">Mis Productos</h1>
          <p className="text-lg text-zinc-600">Gestioná los productos que ofrecés o vendés</p>
        </header>

        <div className="max-w-3xl mx-auto mb-6 flex justify-between">
          <button
            onClick={handleRefresh}
            className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg"
          >
            Actualizar
          </button>
          <button
            onClick={handleCreate}
            className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg"
          >
            Crear producto
          </button>
        </div>

        <div className="max-w-3xl mx-auto grid gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="p-6 bg-white rounded-xl shadow-md border border-zinc-200 hover:shadow-lg transition"
            >
              <div className="flex items-center gap-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-20 h-20 object-cover rounded-lg border"
                />
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-orange-600">{product.name}</h2>
                  <p className="text-zinc-700">{product.description}</p>
                  <p className="text-sm text-zinc-500">
                    {product.category} · {product.price} {product.currency}
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <button
                    onClick={() => handleEdit(product)}
                    className="px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => handleDelete(product.id)}
                    className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded-lg"
                  >
                    Borrar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {isEditing && (
          <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
              <h2 className="text-2xl font-bold mb-4">Editar producto</h2>
              <div className="space-y-3">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Nombre"
                  className="w-full p-2 border rounded"
                />
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Descripción"
                  className="w-full p-2 border rounded"
                />
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                  placeholder="Precio"
                  className="w-full p-2 border rounded"
                />
                <select
                  name="currency"
                  value={formData.currency}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                >
                  <option value="ARS">ARS</option>
                  <option value="USD">USD</option>
                </select>
                <input
                  type="text"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  placeholder="Categoría"
                  className="w-full p-2 border rounded"
                />
                <input
                  type="text"
                  name="image"
                  value={formData.image}
                  onChange={handleInputChange}
                  placeholder="URL de imagen"
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="mt-4 flex justify-end gap-3">
                <button
                  onClick={() => setIsEditing(false)}
                  className="px-4 py-2 bg-gray-300 rounded-lg"
                >
                  Cancelar
                </button>
                <button
                  onClick={handleUpdate}
                  className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
                >
                  Guardar cambios
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default ProductPage;
