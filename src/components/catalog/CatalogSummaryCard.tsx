import { Card, CardContent, CardHeader, CardTitle } from "../ui/Card";
import type { CatalogSummaryCardProps } from "../../types/catalog.types";

const CatalogSummaryCard = ({
  cartCount,
  cartTotal,
  searchTerm,
  visibleProducts,
  totalProducts,
}: CatalogSummaryCardProps) => (
  <Card>
    <CardHeader>
      <CardTitle>Overview</CardTitle>
    </CardHeader>
    <CardContent className="flex items-center justify-between">
      <div className="space-y-1">
        <p className="text-slate-300">
          In cart: <span className="font-medium text-slate-100">{cartCount}</span>
        </p>
        <p className="text-slate-300">
          Total: <span className="font-semibold text-slate-100">{cartTotal}</span>
        </p>
      </div>
      <div className="text-right text-sm text-slate-400">
        <p>Results: {visibleProducts} / {totalProducts}</p>
        <p>{searchTerm ? `Active search: “${searchTerm}”` : "No text filter"}</p>
      </div>
    </CardContent>
  </Card>
);

export default CatalogSummaryCard;
