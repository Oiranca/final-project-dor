type CatalogSummaryCardProps = {
  cartCount: number;
  cartTotal: string;
  searchTerm: string;
  visibleProducts: number;
  totalProducts: number;
};

const CatalogSummaryCard = ({
  cartCount,
  cartTotal,
  searchTerm,
  visibleProducts,
  totalProducts,
}: CatalogSummaryCardProps) => (
  <div className="rounded-2xl border border-slate-300 bg-blue-100 p-6 shadow">
    <div className="mb-3">
      <h2 className="text-xl font-semibold leading-none">Resumen</h2>
    </div>
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <div className="space-y-1">
        <p className="text-slate-900">
          En carrito: <span className="font-medium text-slate-900">{cartCount}</span>
        </p>
        <p className="text-slate-900">
          Total: <span className="font-semibold text-slate-900">{cartTotal}</span>
        </p>
      </div>
      <div className="text-left sm:text-right text-sm text-slate-700">
        <p>Resultados: {visibleProducts} / {totalProducts}</p>
        <p className="truncate">{searchTerm ? `Búsqueda activa: "${searchTerm}"` : "Sin filtro de texto"}</p>
      </div>
    </div>
  </div>
);

export default CatalogSummaryCard;
