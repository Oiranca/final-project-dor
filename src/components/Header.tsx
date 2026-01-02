import { Link, NavLink } from "react-router-dom";
import { useCart } from "../hooks/useCart";
import type { NavLinkClassArgs } from "../types/index.ts";

const Header = () => {
  const { count } = useCart();

  const linkClass = ({ isActive }: NavLinkClassArgs) =>
    `hover:underline ${isActive ? "text-white" : "text-slate-300"}`;

  return (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-slate-900/80 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 h-14 flex items-center justify-between gap-2">
        <Link to="/catalog" className="font-bold tracking-tight text-sm sm:text-base truncate">Hotel G201</Link>
        <nav className="hidden sm:flex gap-x-6 text-sm">
          <NavLink to="/catalog" className={linkClass}>Catálogo</NavLink>
          <NavLink to="/rooms" className={linkClass}>Habitaciones</NavLink>
          <NavLink to="/spa" className={linkClass}>Spa</NavLink>
          <NavLink to="/contact" className={linkClass}>Contacto</NavLink>
        </nav>
        <nav className="flex sm:hidden gap-x-2 text-xs">
          <NavLink to="/catalog" className={linkClass}>Catálogo</NavLink>
          <NavLink to="/rooms" className={linkClass}>Rooms</NavLink>
          <NavLink to="/spa" className={linkClass}>Spa</NavLink>
          <NavLink to="/contact" className={linkClass}>Contacto</NavLink>
        </nav>
        <Link
          to="/cart"
          className="text-xs sm:text-sm rounded-lg px-2 sm:px-3 py-1.5 bg-emerald-600 font-medium text-white hover:bg-emerald-500 whitespace-nowrap"
        >
          <span className="hidden sm:inline">Carrito </span>({count})
        </Link>
      </div>
    </header>
  );
};

export default Header;
