// src/pages/Cart.tsx
import { useCart } from "../hooks/useCart";
import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/Card";
import Button from "../components/ui/Button";
import type { CartPageProps } from "../types/cart.ts";

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
      <h2 className="text-2xl font-semibold">Cart</h2>

      {isCartEmpty ? (
        <Card><CardContent>Your cart is empty.</CardContent></Card>
      ) : (
        <Card>
          <CardHeader><CardTitle>Summary</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            {items.map(({ product, quantity }) => (
              <div key={product.id} className="flex items-center justify-between gap-3 border-b border-white/10 pb-3">
                <div>
                  <p className="font-medium">{product.name}</p>
                  <p className="text-slate-400 text-sm">{formatCurrency(product.price)} · {product.tag}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    aria-label="Decrease quantity"
                    className="h-8 w-8 rounded border border-white/15 bg-slate-900 text-lg leading-none text-white hover:bg-white/10"
                    onClick={() => decrementItemQuantity(product.id)}
                  >
                    −
                  </button>
                  <span className="min-w-6 text-center font-semibold">{quantity}</span>
                  <button
                    aria-label="Increase quantity"
                    className="h-8 w-8 rounded border border-white/15 bg-slate-900 text-lg leading-none text-white hover:bg-white/10"
                    onClick={() => incrementItemQuantity(product.id)}
                  >
                    +
                  </button>
                  <button
                    className="ml-2 text-sm text-rose-400 hover:text-rose-300"
                    onClick={() => removeItemFromCart(product.id)}
                  >
                    Remove
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
                Empty cart
              </Button>
              <Button variant="buy" className="flex-1">
                Confirm booking
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </section>
  );
};

export default CartPage;
