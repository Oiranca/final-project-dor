import { useMemo } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/Card";
import { SPA_GENERAL_INFO } from "../data/info";
import { HOTEL_PRODUCTS } from "../data/products";

const SpaPage = () => {
  const spaServices = useMemo(() => {
    return HOTEL_PRODUCTS.filter((product) => product.tag === "Spa");
  }, []);

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold">Spa</h2>

      <div className="rounded-2xl border border-slate-200/20 bg-white/10 p-6 shadow backdrop-blur">
        <div className="mb-3">
          <h2 className="text-xl font-semibold leading-none">{SPA_GENERAL_INFO.title}</h2>
        </div>
        <div className="text-slate-300 space-y-2">
          {SPA_GENERAL_INFO.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {spaServices.map((service) => (
          <Card key={service.id} className="overflow-hidden">
            {service.image ? (
              <img
                src={service.image}
                alt={service.name}
                className="h-40 w-full object-cover"
              />
            ) : (
              <div className="grid h-40 w-full place-items-center bg-slate-800/40 text-slate-400">
                No hay foto disponible
              </div>
            )}
            <CardHeader>
              <CardTitle>{service.name}</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-300">
              <p>{service.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default SpaPage;
