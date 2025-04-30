
function Navbar() {
    return (
        <header className="bg-white/95 sticky top-[0%] z-10 shadow-2xl border-gray-400 p-2">
            <nav className="flex flex-row gap-2">
                <a>Introduccion</a>
                <a>Producto</a>
                <a>Servicios</a>
                <a>Contacto</a>
            </nav>
        </header>
    )
}

export default Navbar;