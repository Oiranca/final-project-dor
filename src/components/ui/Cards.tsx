import Button from "./Button";
import { Card, CardHeader, CardTitle, CardContent } from "./Card";
import { useCurrencyFormatter } from "../../hooks/useCurrencyFormatter";
import type { Product } from "../../types/index.ts";

type CardsProps = {
  product: Product;
  onAddToCart?: (product: Product) => void;
  onBuyNow?: (product: Product) => void;
};

const Cards = ({ product, onAddToCart, onBuyNow }: CardsProps) => {
  const formatCurrency = useCurrencyFormatter();
  return (
    <Card className="overflow-hidden">
      {product.image ? (
        <img
          src={product.image}
          alt={product.name}
          className="h-40 w-full object-cover mb-4"
          loading="lazy"
        />
      ) : (
        <div className="grid h-40 w-full place-items-center bg-slate-800/40 text-slate-400">
          No hay foto disponible
        </div>
      )}

      <CardHeader className="flex items-start justify-between">
        <CardTitle className="text-xl">{product.name}</CardTitle>
        {product.tag && (
          <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-300">
            {product.tag}
          </span>
        )}
      </CardHeader>

      <CardContent className="space-y-3">
        <p className="text-slate-300">{product.description}</p>

        <div className="flex items-baseline justify-between">
          <span className="text-2xl font-bold">
            {formatCurrency(product.price)}
          </span>
        </div>

        <div className="flex flex-col sm:flex-row gap-2 pt-2">
          <Button
            variant="buy"
            onClick={() => onBuyNow?.(product)}
            leadingIcon={<span aria-hidden>🛒</span>}
            className="w-full sm:w-auto"
          >
            <span className="sm:inline">Reservar</span>
          </Button>
          <Button
            variant="outline"
            onClick={() => onAddToCart?.(product)}
            leadingIcon={<span aria-hidden>➕</span>}
            className="w-full sm:w-auto"
          >
            <span className="sm:inline">Añadir</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Cards;
