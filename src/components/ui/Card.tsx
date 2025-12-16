import type { CardDivProps } from "../../types/card.ts";

export const Card = ({ className = "", ...props }: CardDivProps) => (
  <div
    className={`rounded-2xl border border-slate-200/20 bg-white/10 p-6 shadow backdrop-blur ${className}`}
    {...props}
  />
);

export const CardHeader = ({ className = "", ...props }: CardDivProps) => (
  <div className={`mb-3 ${className}`} {...props} />
);

export const CardTitle = ({ className = "", ...props }: CardDivProps) => (
  <h2 className={`text-xl font-semibold leading-none ${className}`} {...props} />
);

export const CardContent = ({ className = "", ...props }: CardDivProps) => (
  <div className={className} {...props} />
);
