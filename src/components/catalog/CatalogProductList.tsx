import Button from "../ui/Button";
import { Card, CardTitle } from "../ui/Card";
import { useCurrencyFormatter } from "../../hooks/useCurrencyFormatter";
import type { Product } from "../../types/index.ts";

type CatalogProductListProps = {
  products: Product[];
  onAddToCart: (product: Product) => void;
  onBuyNow: (product: Product) => void;
};

const CatalogProductList = ({ products, onAddToCart, onBuyNow }: CatalogProductListProps) => {
  const formatCurrency = useCurrencyFormatter();

  return (
    <section className="space-y-4">
      {products.map((product) => (
        <Card key={product.id} className="overflow-hidden">
          <div className="flex flex-col sm:flex-row gap-4 p-4">
            {/* Imagen */}
            <div className="w-full sm:w-48 shrink-0">
              {product.image ? (
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-40 sm:h-32 w-full object-cover rounded-md"
                  loading="lazy"
                />
              ) : (
                <div className="grid h-40 sm:h-32 w-full place-items-center bg-slate-800/40 text-slate-400 rounded-md">
                  No hay foto disponible
                </div>
              )}
            </div>

            {/* Contenido */}
            <div className="flex-1 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-start justify-between gap-2">
                  <CardTitle className="text-xl">{product.name}</CardTitle>
                  {product.tag && (
                    <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-300 whitespace-nowrap">
                      {product.tag}
                    </span>
                  )}
                </div>
                <p className="text-slate-300">{product.description}</p>
              </div>

              {/* Precio y botones */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-4">
                <span className="text-2xl font-bold">{formatCurrency(product.price)}</span>

                <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                  <Button
                    variant="buy"
                    onClick={() => onBuyNow(product)}
                    leadingIcon={<span aria-hidden>🛒</span>}
                    className="w-full sm:w-auto"
                  >
                    <span className="sm:inline">Reservar</span>
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => onAddToCart(product)}
                    leadingIcon={<span aria-hidden>➕</span>}
                    className="w-full sm:w-auto"
                  >
                    <span className="sm:inline">Añadir</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </section>
  );
};

export default CatalogProductList;
