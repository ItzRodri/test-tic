import productodata from '../../data/product.json';
export default function Pickeos() { 
    const productos = productodata.productos.pickeos;

    return (
        <div className="text-black items-center justify-center flex flex-col space-y-4">
            <h1 className="text-2xl font-bold">Pickeos</h1>
            <p className="text-lg">Productos Pickeos para tu alimentación diaria.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 w-full max-w-5xl">
                {productos.map((producto: { id: number; imagen: string; nombre: string; descripcion: string; precio: number }) => (
                    <div key={producto.id} className="border p-4 rounded-lg shadow-md flex flex-col items-center">
                        <img src={producto.imagen} alt={producto.nombre} className="w-32 h-32 object-cover rounded-md" />
                        <h2 className="text-lg font-semibold mt-2">{producto.nombre}</h2>
                        <p className="text-gray-600 text-sm text-center">{producto.descripcion}</p>
                        <p className="text-green-600 font-bold mt-2">${producto.precio.toFixed(2)}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}