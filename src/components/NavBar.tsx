export default function NavBar() {
  return (
    <nav className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50 hidden md:block">
        <div className="flex space-x-6 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20">
          <button 
            onClick={() => document.getElementById('inicio')?.scrollIntoView({ behavior: 'smooth', block: 'center' })}
            className="text-white/70 hover:text-white transition-colors duration-300 text-sm font-medium cursor-pointer"
          >
            Inicio
          </button>
          <button 
            onClick={() => document.getElementById('productos')?.scrollIntoView({ behavior: 'smooth', block: 'center' })}
            className="text-white/70 hover:text-white transition-colors duration-300 text-sm font-medium cursor-pointer"
          >
            Productos
          </button>
          <button 
            onClick={() => document.getElementById('marca')?.scrollIntoView({ behavior: 'smooth', block: 'center' })}
            className="text-white/70 hover:text-white transition-colors duration-300 text-sm font-medium cursor-pointer"
          >
            Marca
          </button>
          <button 
            onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth', block: 'center' })}
            className="text-white/70 hover:text-white transition-colors duration-300 text-sm font-medium cursor-pointer"
          >
            Contacto
          </button>
        </div>
      </nav>
  );
}
