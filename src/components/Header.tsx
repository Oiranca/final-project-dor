import { Link, NavLink } from "react-router-dom";
import { useCart } from "../hooks/useCart";
import type { NavLinkClassArgs } from "../types/header.ts";

const Header = () => {
  const { count } = useCart();

  const linkClass = ({ isActive }: NavLinkClassArgs) =>
    `hover:underline ${isActive ? "text-white" : "text-slate-300"}`;

  return (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-slate-900/80 backdrop-blur">
      <div className="mx-auto max-w-6xl px-6 h-14 flex items-center justify-between">
        <Link to="/catalog" className="font-bold tracking-tight">Hotel G201</Link>
        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <NavLink to="/catalog" className={linkClass}>Catalog</NavLink>
          <NavLink to="/rooms" className={linkClass}>Rooms</NavLink>
          <NavLink to="/spa" className={linkClass}>Spa</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>
        </nav>
        <Link
          to="/cart"
          className="text-sm rounded-lg px-3 py-1.5 bg-emerald-600 font-medium text-white hover:bg-emerald-500"
        >
          Cart ({count})
        </Link>
      </div>
    </header>
  );
};

export default Header;
