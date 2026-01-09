import { useCurrencyFormatter } from "../../hooks/useCurrencyFormatter.ts";
import type { CartItem } from "../../types/index.ts";

type CartDrawerProps = {
  open: boolean;
  items: CartItem[];
  onClose: () => void;
  onIncrementItem: (id: string) => void;
  onDecrementItem: (id: string) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
};

const CartDrawer = ({
  open,
  items,
  onClose,
  onIncrementItem,
  onDecrementItem,
  onRemoveItem,
  onClearCart,
}: CartDrawerProps) => {
  const formatCurrency = useCurrencyFormatter();
  const total = items.reduce(
    (accumulated, entry) => accumulated + entry.product.price * entry.quantity,
    0
  );

  return (
    <div
      className={`fixed inset-0 z-50 ${
        open ? "pointer-events-auto" : "pointer-events-none"
      }`}
      aria-hidden={!open}
    >
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-black/50 transition-opacity ${
          open ? "opacity-100" : "opacity-0"
        }`}
      />

      <aside
        className={`absolute right-0 top-0 h-full w-full sm:w-[360px] max-w-[90vw] bg-blue-50 text-slate-900 shadow-2xl ring-1 ring-slate-300 transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <header className="flex items-center justify-between border-b border-slate-300 p-4">
          <h2 className="text-lg font-semibold">🛒 Carrito</h2>
          <button
            onClick={onClose}
            className="rounded-md px-3 py-1.5 bg-blue-100 hover:bg-blue-200"
          >
            ✕
          </button>
        </header>

        <div className="p-4 space-y-3 max-h-[calc(100vh-200px)] overflow-auto">
          {items.length === 0 ? (
            <p className="text-slate-700">Tu carrito está vacío.</p>
          ) : (
            items.map((cartEntry) => (
              <div
                key={cartEntry.product.id}
                className="flex items-start justify-between gap-3 rounded-lg border border-slate-300 p-3 bg-white"
              >
                <div className="min-w-0">
                  <p className="font-medium truncate">{cartEntry.product.name}</p>
                  <p className="text-sm text-slate-700">{formatCurrency(cartEntry.product.price)}</p>
                  <div className="mt-2 flex items-center gap-2">
                    <button
                      onClick={() => onDecrementItem(cartEntry.product.id)}
                      className="h-7 w-7 rounded bg-blue-100 hover:bg-blue-200 text-slate-900"
                    >
                      −
                    </button>
                    <span className="w-6 text-center">{cartEntry.quantity}</span>
                    <button
                      onClick={() => onIncrementItem(cartEntry.product.id)}
                      className="h-7 w-7 rounded bg-blue-100 hover:bg-blue-200 text-slate-900"
                    >
                      +
                    </button>
                    <button
                      onClick={() => onRemoveItem(cartEntry.product.id)}
                      className="ml-2 text-sm text-rose-600 hover:text-rose-700"
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
                <div className="shrink-0 font-semibold">{formatCurrency(cartEntry.product.price * cartEntry.quantity)}</div>
              </div>
            ))
          )}
        </div>

        <footer className="p-4 border-t border-slate-300 space-y-3 bg-blue-100">
          <div className="flex items-center justify-between text-lg font-semibold">
            <span>Total</span>
            <span>{formatCurrency(total)}</span>
          </div>
          <div className="flex gap-2">
            <button
              onClick={onClearCart}
              disabled={items.length === 0}
              className="flex-1 rounded-lg border border-slate-400 px-4 py-2 bg-blue-50 text-slate-900 hover:bg-blue-200 disabled:opacity-50"
            >
              Vaciar carrito
            </button>
            <button
              disabled={items.length === 0}
              onClick={() => alert("🧾 Proceder al pago (demo)")}
              className="flex-1 rounded-lg bg-emerald-600 px-4 py-2 font-medium text-white hover:bg-emerald-700 disabled:opacity-50"
            >
              Pagar
            </button>
          </div>
        </footer>
      </aside>
    </div>
  );
};

export default CartDrawer;
