import type { Product } from "../types/index.ts";

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
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "ritual-hammam",
    name: "Ritual Hammam & Tea",
    description:
      "Circuito de vapor, exfoliación con jabón negro y degustación de tés orientales.",
    price: 68,
    tag: "Spa",
    image: "https://images.unsplash.com/photo-1674749232554-2ac15ced3954?q=80&w=738&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
  // 4 Habitaciones adicionales
  {
    id: "executive-room",
    name: "Executive Room Deluxe",
    description:
      "Habitación ejecutiva de 45 m² con escritorio amplio, zona de estar y vistas al mar.",
    price: 165,
    tag: "Habitación",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "family-suite",
    name: "Family Suite Garden",
    description:
      "Suite familiar de 85 m² con dos dormitorios, sala de juegos y acceso directo al jardín.",
    price: 240,
    tag: "Habitación",
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "premium-double",
    name: "Premium Double Room",
    description:
      "Habitación doble premium con balcón privado, minibar y baño con ducha de lluvia.",
    price: 125,
    tag: "Habitación",
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "penthouse-luxury",
    name: "Penthouse Luxury Sky",
    description:
      "Penthouse de 120 m² en última planta con jacuzzi privado y vistas panorámicas 360°.",
    price: 350,
    tag: "Habitación",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=80",
  },
  // 2 Spa adicionales
  {
    id: "massage-therapy",
    name: "Masaje Terapéutico Oriental",
    description:
      "Sesión de 90 minutos con técnicas tradicionales tailandesas y aceites aromáticos.",
    price: 85,
    tag: "Spa",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "facial-premium",
    name: "Facial Premium Anti-Edad",
    description:
      "Tratamiento facial con tecnología LED, radiofrecuencia y productos de alta cosmética.",
    price: 95,
    tag: "Spa",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=80",
  },
  // 2 Restaurante adicionales
  {
    id: "wine-pairing",
    name: "Cata de Vinos Premium",
    description:
      "Degustación de 5 vinos selectos con maridaje de quesos artesanales y jamón ibérico.",
    price: 65,
    tag: "Restaurante",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "chef-table",
    name: "Chef's Table Experience",
    description:
      "Cena privada en la cocina con el chef, menú personalizado y clase de cocina incluida.",
    price: 150,
    tag: "Restaurante",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80",
  },
  // 2 Ocio adicionales
  {
    id: "golf-day",
    name: "Golf Day Premium",
    description:
      "Jornada completa en campo de golf 18 hoyos, carrito incluido y almuerzo en club house.",
    price: 110,
    tag: "Ocio",
    image: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "hiking-tour",
    name: "Hiking Tour Montaña",
    description:
      "Excursión guiada de día completo por senderos naturales con picnic gourmet incluido.",
    price: 75,
    tag: "Ocio",
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=1200&q=80",
  },
  // 4 Servicios adicionales
  {
    id: "airport-transfer",
    name: "Transfer Privado Aeropuerto",
    description:
      "Servicio de traslado VIP desde/hacia el aeropuerto en vehículo de lujo con conductor.",
    price: 45,
    tag: "Servicios",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "laundry-express",
    name: "Lavandería Express 24h",
    description:
      "Servicio de lavandería y planchado express con recogida y entrega en habitación.",
    price: 25,
    tag: "Servicios",
    image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "personal-shopper",
    name: "Personal Shopper VIP",
    description:
      "Asesoramiento personal de compras con tour por las mejores boutiques de la zona.",
    price: 80,
    tag: "Servicios",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "babysitting",
    name: "Servicio de Canguro",
    description:
      "Cuidado profesional de niños con actividades educativas y entretenimiento por horas.",
    price: 30,
    tag: "Servicios",
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1200&q=80",
  },
];
