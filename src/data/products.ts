import type { Product } from "../types/product.ts";

export const HOTEL_PRODUCTS: Product[] = [
  {
    id: "suite-ocean",
    name: "Suite Ocean Signature",
    description:
      "Espacio de 70 m² con terraza panorámica, servicio de mayordomía 24/7 y amenities bio.",
    price: 210,
    tag: "Habitación",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "loft-junior",
    name: "Loft Junior Garden",
    description:
      "Mini apartamento con cocina integrada, domótica y vistas al jardín botánico interior.",
    price: 145,
    tag: "Habitación",
    image: "https://images.unsplash.com/photo-1616594039964-1967aec9527f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "ritual-hammam",
    name: "Ritual Hammam & Tea",
    description:
      "Circuito de vapor, exfoliación con jabón negro y degustación de tés orientales.",
    price: 68,
    tag: "Spa",
    image: "https://images.unsplash.com/photo-1523419409543-0c1df022bddb?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "detox-day",
    name: "Detox Day Pass",
    description:
      "Acceso al spa, batido cold-pressed y consulta express con nuestra nutricionista.",
    price: 55,
    tag: "Spa",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "tasting-menu",
    name: "Menú Degustación Kilómetro 0",
    description:
      "Seis pases creativos con maridaje de vinos canarios y postre de autor.",
    price: 82,
    tag: "Restaurante",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "brunch-terraza",
    name: "Brunch Terraza Atlántico",
    description:
      "Selección salada y dulce, showcooking y música en directo todos los domingos.",
    price: 32,
    tag: "Restaurante",
    image: "https://images.unsplash.com/photo-1528712306091-ed0763094c98?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "sunset-sailing",
    name: "Sunset Sailing Experience",
    description:
      "Travesía privada al atardecer con cata de cava y fotógrafo profesional.",
    price: 95,
    tag: "Ocio",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "cowork-pass",
    name: "Cowork & Coffee Pass",
    description:
      "Puesto flexible, monitor externo y barra libre de cafés de especialidad.",
    price: 18,
    tag: "Servicios",
    image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=1200&q=80",
  },
];
