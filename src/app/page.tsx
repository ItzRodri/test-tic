import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className=" relative flex flex-col items-center justify-center min-h-screen  p-6">
            <iframe
        className="absolute top-0 left-0 w-full h-full -z-10 object-cover"
        src="https://www.youtube.com/embed/wMcA--RCjQU?autoplay=1&mute=1&loop=1&playlist=wMcA--RCjQU"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
    <h1 className="text-4xl font-bold text-center text-white">Bienvenido a Nuestra Tienda</h1>
    <p className="text-lg text-white text-center mt-4 max-w-2xl">
        Descubre una variedad de productos de alta calidad. Desde lácteos frescos hasta cereales saludables, tenemos todo lo que necesitas para tu alimentación diaria.
    </p>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        <Link href="/productos/lacteos">
            <div className="bg-white p-6 rounded-lg shadow-lg cursor-pointer hover:shadow-2xl transition">
                <h2 className="text-xl font-semibold text-center">Lácteos</h2>
                <p className="text-gray-600 text-center">Leche, yogur y más</p>
            </div>
        </Link>
        <Link href="/productos/cereales">
            <div className="bg-white p-6 rounded-lg shadow-lg cursor-pointer hover:shadow-2xl transition">
                <h2 className="text-xl font-semibold text-center">Cereales</h2>
                <p className="text-gray-600 text-center">Avena, granola y más</p>
            </div>
        </Link>
        <Link href="/productos/pickeos">
            <div className="bg-white p-6 rounded-lg shadow-lg cursor-pointer hover:shadow-2xl transition">
                <h2 className="text-xl font-semibold text-center">Pickeos</h2>
                <p className="text-gray-600 text-center">Snacks y frutos secos</p>
            </div>
        </Link>
        <Link href="/productos/bebidas">
            <div className="bg-white p-6 rounded-lg shadow-lg cursor-pointer hover:shadow-2xl transition">
                <h2 className="text-xl font-semibold text-center">Bebidas</h2>
                <p className="text-gray-600 text-center">Jugos, té y más</p>
            </div>
        </Link>
    </div>
</div>
  );
}
