import { useMemo } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/Card";
import { ROOMS_GENERAL_INFO } from "../data/info";
import { HOTEL_PRODUCTS } from "../data/products";

const RoomsPage = () => {
  const rooms = useMemo(() => {
    return HOTEL_PRODUCTS.filter((product) => product.tag === "Habitación");
  }, []);

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold">Habitaciones</h2>

      <div className="rounded-2xl border border-slate-300 bg-blue-100 p-6 shadow">
        <div className="mb-3">
          <h2 className="text-xl font-semibold leading-none">{ROOMS_GENERAL_INFO.title}</h2>
        </div>
        <div className="text-slate-800 space-y-2">
          {ROOMS_GENERAL_INFO.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {rooms.map((room) => (
          <Card key={room.id} className="overflow-hidden">
            {room.image ? (
              <img
                src={room.image}
                alt={room.name}
                className="h-40 w-full object-cover"
              />
            ) : (
              <div className="grid h-40 w-full place-items-center bg-slate-200 text-slate-700">
                No hay foto disponible
              </div>
            )}
            <CardHeader>
              <CardTitle>{room.name}</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-800">
              <p>{room.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default RoomsPage;
