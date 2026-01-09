import type { CardProps } from "../../types/index.ts";

export const Card = ({ className = "", ...props }: CardProps) => (
  <div
    className={`flex flex-col justify-center rounded-2xl border border-slate-300 bg-white p-6 shadow ${className}`}
    {...props}
  />
);

export const CardHeader = ({ className = "", ...props }: CardProps) => (
  <div className={`mb-3 ${className}`} {...props} />
);

export const CardTitle = ({ className = "", ...props }: CardProps) => (
  <h2 className={`text-xl font-semibold leading-none ${className}`} {...props} />
);

export const CardContent = ({ className = "", ...props }: CardProps) => (
  <div className={className} {...props} />
);
