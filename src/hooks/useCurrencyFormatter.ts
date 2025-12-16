import { useMemo } from "react";

export function useCurrencyFormatter(locale = "es-ES", currency = "EUR") {
  return useMemo(() => {
    const formatter = new Intl.NumberFormat(locale, { style: "currency", currency });
    return (value: number) => formatter.format(value);
  }, [locale, currency]);
}
