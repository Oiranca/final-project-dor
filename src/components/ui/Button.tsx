import type { ButtonProps, ButtonVariant, ButtonSize } from "../../types/button.types.ts";

const base =
  "inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-indigo-600 text-white hover:bg-indigo-500 focus:ring-indigo-300",
  outline:
    "border border-white/40 text-white hover:bg-white/10 focus:ring-white/40",
  ghost: "text-slate-100 hover:bg-white/5 focus:ring-white/20",
  buy: "bg-emerald-600 text-white hover:bg-emerald-500 focus:ring-emerald-300",
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
