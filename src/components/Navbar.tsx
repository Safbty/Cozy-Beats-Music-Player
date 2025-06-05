const Navbar = () => {
  return (
    <nav className="w-full py-4 px-6 bg-fondo-suave border-b border-borde-claro shadow-sm flex items-center">
      <div className="flex items-center">
        <img
          src="https://i.imgur.com/nE86FU1.png"
          alt="Cozy Beats Logo"
          className="h-8 w-8 mr-2"
        />
        <h1 className="text-texto-oscuro text-2xl font-semibold text-center press-start-2p-regular">
          Cozy Beats
        </h1>
      </div>
    </nav>
  );
};

export default Navbar;
