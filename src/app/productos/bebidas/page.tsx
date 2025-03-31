'use client';
import { useState } from 'react';
import { ChatBubbleBottomCenterIcon, HeartIcon, ShareIcon } from '@heroicons/react/24/solid'; // Importación para Heroicons v2
import productodata from '../../data/product.json';

export default function Bebidas() {
    const productos = productodata.productos.bebidas;

    return (
        <div className="text-black items-center justify-center flex flex-col space-y-4">
            <h1 className="text-2xl font-bold">Bebidas</h1>
            <p className="text-lg">Productos Bebidas para tu hidratación diaria.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 w-full max-w-5xl">
                {productos.map((producto: { id: number; imagen: string; nombre: string; descripcion: string; precio: number }) => (
                    <ProductoCard key={producto.id} producto={producto} />
                ))}
            </div>
        </div>
    );
}

function ProductoCard({ producto }: { producto: { id: number; imagen: string; nombre: string; descripcion: string; precio: number } }) {
    const [likes, setLikes] = useState(0);
    const [share, setShare] = useState(0);
    const [comment, setComment] = useState(0);
    const [isDialogOpen, setIsDialogOpen] = useState(false); // Controla la visibilidad del popup
    const [commentText, setCommentText] = useState(''); // Almacena el texto del comentario

    const handleLike = () => {
        setLikes(likes + 1);
    };

    const handleShare = () => {
        const mensaje = `¡Mira este producto!por solo $${producto.precio.toFixed(2)}. ${producto.descripcion}`;
        const url = `https://wa.me/+59177824274?text=${encodeURIComponent(mensaje)}`;
        window.open(url, '_blank'); // Abre el enlace en una nueva pestaña
        setShare(share + 1);
    };

    const handleComment = () => {
        setIsDialogOpen(true); // Abre el popup
    };

    const handleSubmitComment = () => {
        if (commentText.trim() !== '') {
            setComment(comment + 1); // Incrementa el contador de comentarios
            setCommentText(''); // Limpia el texto del comentario
            setIsDialogOpen(false); // Cierra el popup
        }
    };

    const handleCloseDialog = () => {
        setCommentText(''); // Limpia el texto del comentario
        setIsDialogOpen(false); // Cierra el popup
    };

    return (
        <div className="border p-4 rounded-lg shadow-md flex flex-col items-center">
            <img src={producto.imagen} alt={producto.nombre} className="w-32 h-32 object-cover rounded-md" />
            <h2 className="text-lg font-semibold mt-2">{producto.nombre}</h2>
            <p className="text-gray-600 text-sm text-center">{producto.descripcion}</p>
            <p className="text-green-600 font-bold mt-2">${producto.precio.toFixed(2)}</p>
            <div className="flex flex-row gap-2">
                <button
                    onClick={handleLike}
                    className="mt-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition flex items-center space-x-2"
                >
                    <HeartIcon className="w-5 h-5 text-white" />
                    <span>{likes}</span>
                </button>
                <button
                    onClick={handleShare}
                    className="mt-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition flex items-center space-x-2"
                >
                    <ShareIcon className="w-5 h-5 text-white" />
                    <span>{share}</span>
                </button>
                <button
                    onClick={handleComment}
                    className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition flex items-center space-x-2"
                >
                    <ChatBubbleBottomCenterIcon className="w-5 h-5 text-white" />
                    <span>{comment}</span>
                </button>
            </div>

            {/* Popup para introducir el comentario */}
            {isDialogOpen && (
                <div className="fixed inset-0 bg-gray-500   flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                        <h3 className="text-lg font-semibold mb-4">Agregar un comentario</h3>
                        <textarea
                            value={commentText}
                            onChange={(e) => setCommentText(e.target.value)}
                            className="w-full p-2 border rounded-lg mb-4"
                            placeholder="Escribe tu comentario aquí..."
                        />
                        <div className="flex justify-end gap-2">
                            <button
                                onClick={handleCloseDialog}
                                className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 transition"
                            >
                                Cancelar
                            </button>
                            <button
                                onClick={handleSubmitComment}
                                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                            >
                                Comentar
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}