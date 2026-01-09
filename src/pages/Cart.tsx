import { useCart } from "../hooks/useCart";
import Button from "../components/ui/Button";

type CartPageProps = {
  formatCurrency: (value: number) => string;
};

const CartPage = ({ formatCurrency }: CartPageProps) => {
  const {
    items,
    incrementItemQuantity,
    decrementItemQuantity,
    removeItemFromCart,
    clearCartItems,
    total,
  } = useCart();
  const isCartEmpty = items.length === 0;

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold">Carrito</h2>

      {isCartEmpty ? (
        <div className="rounded-2xl border border-slate-300 bg-blue-100 p-6 shadow">
          <p className="text-slate-800">Tu carrito está vacío.</p>
        </div>
      ) : (
        <div className="rounded-2xl border border-slate-300 bg-blue-50 p-6 shadow">
          <div className="mb-3">
            <h2 className="text-xl font-semibold leading-none">Resumen</h2>
          </div>
          <div className="space-y-4">
            {items.map(({ product, quantity }) => (
              <div key={product.id} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-slate-300 pb-3">
                <div className="min-w-0 flex-1">
                  <p className="font-medium truncate">{product.name}</p>
                  <p className="text-slate-700 text-sm">{formatCurrency(product.price)} · {product.tag}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    aria-label="Disminuir cantidad"
                    className="h-8 w-8 rounded border border-slate-400 bg-blue-50 text-lg leading-none text-slate-900 hover:bg-blue-100"
                    onClick={() => decrementItemQuantity(product.id)}
                  >
                    −
                  </button>
                  <span className="min-w-6 text-center font-semibold">{quantity}</span>
                  <button
                    aria-label="Aumentar cantidad"
                    className="h-8 w-8 rounded border border-slate-400 bg-blue-50 text-lg leading-none text-slate-900 hover:bg-blue-100"
                    onClick={() => incrementItemQuantity(product.id)}
                  >
                    +
                  </button>
                  <button
                    className="ml-2 text-sm text-rose-600 hover:text-rose-700"
                    onClick={() => removeItemFromCart(product.id)}
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            ))}

            <div className="flex items-center justify-between pt-2">
              <strong>Total</strong>
              <strong>{formatCurrency(total)}</strong>
            </div>

            <div className="flex gap-2">
              <Button variant="ghost" className="flex-1" onClick={clearCartItems}>
                Vaciar carrito
              </Button>
              <Button variant="buy" className="flex-1">
                Confirmar reserva
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CartPage;
