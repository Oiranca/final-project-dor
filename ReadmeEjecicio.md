# Implementación práctica y análisis funcional de los hooks fundamentales de React en una aplicación web de gestión hotelera

## Introducción y objetivos

Este proyecto desarrolla una SPA (Single Page Application) orientada a la gestión de servicios hoteleros. Se ha diseñado un catálogo con reservas de habitaciones, experiencias de spa y servicios gastronómicos que se integran con un carrito de compras centralizado. El objetivo general es investigar, documentar y aplicar los hooks esenciales de React (useState, useMemo, useContext/createContext y useEffect) demostrando su impacto en la mantenibilidad, rendimiento y claridad del código.

Objetivos específicos:

- Comprender el papel de cada hook dentro del ciclo de vida de un componente funcional.
- Aplicar los hooks en situaciones reales: listado de productos, filtros dinámicos, ordenación, carrito global y persistencia.
- Analizar el rendimiento y la legibilidad del código antes y después de introducir los hooks.
- Contrastar el enfoque basado en funciones y hooks frente a alternativas clásicas (componentes de clase, Redux, etc.).

## Fundamentación teórica de los hooks

### useState

`useState` provee un estado local persistente entre renderizados. En esta aplicación se emplea para:

- Almacenar el catálogo de productos (`src/App.tsx`).
- Gestionar el criterio de ordenación y filtros (categoría, búsqueda y precio máximo).
- Administrar las líneas del carrito en `CartContext`.

Su uso garantiza una API declarativa donde las vistas reaccionan automáticamente cuando cambian los datos, eliminando la necesidad de manipular el DOM directamente.

### useMemo

`useMemo` memoriza resultados de cálculos costosos siempre que sus dependencias no cambien. Casos destacados:

- Ordenamiento del catálogo (`sortedProducts`) y derivación de `visibleProducts` en `src/App.tsx` para evitar volver a ordenar/filtrar en cada render.
- Cálculo de `count` y `total` del carrito en `src/context/CartContext.tsx`.
- Memoización del objeto de valor del contexto para evitar renders innecesarios en toda la jerarquía.

Este hook mejora el rendimiento percibido porque evita recorrer colecciones cuando los parámetros no varían.

### useContext y createContext

`createContext` define un contenedor global de datos y `useContext` permite consumirlo sin prop drilling. En `CartContext` se expone el estado compartido del carrito junto con operaciones para añadir, incrementar, decrementar o vaciar artículos. Gracias a ello:

- Cualquier componente puede interactuar con el carrito sin recibir props intermedias.
- Se documenta mejor el contrato del carrito y es sencillo añadir nuevas acciones.
- Se facilita la escalabilidad frente a bibliotecas externas (Redux/Zustand) al mantener una API reducida.

### useEffect

`useEffect` ejecuta efectos secundarios sincronizados con el ciclo de render. En la práctica se utiliza para:

- Persistir el carrito en `localStorage` y actualizar el título del documento cuando cambia el número de ítems.
- Alinear el límite de precio de los filtros con la lista de productos disponible, evitando estados incoherentes cuando cambia el dataset.

La lista de dependencias garantiza que los efectos se disparen solo cuando corresponde, evitando bucles infinitos y resultados inconsistentes.

## Desarrollo práctico

1. **Arquitectura general:** `src/main.tsx` monta la aplicación dentro de `BrowserRouter` y del `CartProvider`, asegurando que todas las páginas compartan el carrito.
2. **Routing declarativo:** `src/App.tsx` utiliza `<Routes>` y `<Route>` para renderizar `Catalogo`, `Habitaciones`, `Spa`, `Contacto` y `Carrito`. Se añadieron redirecciones explícitas para `/` y rutas desconocidas.
3. **Catálogo interactivo:**
   - Los productos provienen de `src/data/products.ts`, donde se describen suite, spa, restauración y servicios auxiliares.
   - Los filtros (búsqueda, categoría y precio máximo) combinan `useState` y `useMemo` para derivar `visibleProducts`.
   - `Catalogo` muestra un panel de filtros, resumen de resultados y tarjetas con acciones rápidas (comprar ahora/añadir).
4. **Carrito persistente:** `CartContext` controla todo el ciclo de vida del carrito, sincronizando datos con `localStorage`, exponiendo totales y aplicando `useMemo` para optimizar los cálculos.
5. **Experiencias adicionales:** Las páginas de Habitaciones, Spa y Contacto utilizan componentes `Card` y `Button` reutilizables para mantener coherencia visual.

## Análisis crítico

- **Rendimiento:** Los memoizados (`sortedProducts`, `visibleProducts`, `count`, `total`) evitan renders costosos al ordenar y filtrar listas. Sin `useMemo`, cada pulsación en los filtros recalcularía el catálogo completo.
- **Legibilidad:** Al aislar los datos en `src/data/products.ts` y centralizar el carrito en un contexto, el árbol de componentes queda más limpio y predecible.
- **Escalabilidad:** La solución cubre los requisitos sin añadir dependencias externas. No obstante, si el proyecto creciera (por ejemplo, múltiples contextos o sincronización con API), podría evaluarse combinar hooks con `React Query` o `Redux Toolkit`.
- **Limitaciones:**
  - No se incluyen tests automatizados que garanticen la regresión de los hooks.
  - La persistencia se hace únicamente en `localStorage`, por lo que varios dispositivos no comparten el carrito.
  - El filtrado de precio es client-side; para catálogos extensos sería necesario paginar o delegar al servidor.

## Conclusiones

El uso coordinado de `useState`, `useMemo`, `useContext/createContext` y `useEffect` permite construir una experiencia fluida manteniendo el código organizado. Cada hook aporta un beneficio concreto:

- `useState`: simplicidad para modelar UI reactiva.
- `useMemo`: rendimiento estable sin cálculos redundantes.
- `useContext/createContext`: comunicación global sin acoplar capas.
- `useEffect`: sincronización con APIs externas (DOM, storage, título, etc.).

La aplicación resultante demuestra que los hooks cubren la mayoría de necesidades habituales sin recurrir a patrones complejos, siempre que se definan dependencias claras y se documenten las responsabilidades de cada componente.

## Cambios realizados

- Migración del router manual a `react-router-dom` (`src/App.tsx`).
- Creación del módulo de datos `src/data/products.ts` con un catálogo ampliado y descripciones únicas.
- Incorporación de filtros avanzados (búsqueda, categoría y precio máximo) con estados y memorias derivados.
- Actualización del contexto de carrito para utilizar `useCallback` + `useMemo` y reducir renders.
- Nuevo panel de filtros y resumen dinámico en `src/pages/Catalogo.tsx`.
- Documentación del ejercicio en este `ReadmeEjecicio`.

## Referencias

1. React Documentation. (2025). *Hooks API Reference*. <https://react.dev/reference/react>
2. Abramov, D., & Clark, B. (2023). *A Complete Guide to useEffect*. Overreacted.io. <https://overreacted.io>
3. Mozilla Developer Network. (2025). *Using the Web Storage API*. <https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API>
