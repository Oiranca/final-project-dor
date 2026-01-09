import type { ButtonProps, ButtonVariant, ButtonSize } from "../../types/index.ts";

const base =
  "inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-200 disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-indigo-600 text-white hover:bg-indigo-500 focus:ring-indigo-300",
  outline:
    "border border-slate-400 bg-blue-50 text-slate-900 hover:bg-blue-100 focus:ring-slate-300",
  ghost: "text-slate-900 hover:bg-slate-100 focus:ring-slate-300",
  buy: "bg-emerald-600 text-white hover:bg-emerald-700 focus:ring-emerald-300",
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-9 px-3 text-sm",
  md: "h-10 px-4 text-base",
  lg: "h-12 px-6 text-lg",
};

const Button = ({
  variant = "primary",
  size = "md",
  className = "",
  leadingIcon,
  children,
  ...props
}: ButtonProps) => (
  <button
    className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
    {...props}
  >
    {leadingIcon}
    {children}
  </button>
);

export default Button;
