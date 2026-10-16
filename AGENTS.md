# Maker Tracker · Landing

Landing pública de Maker Tracker ("Ship happens."), en inglés. Sitio estático con Astro, sin framework de UI ni Tailwind: HTML y CSS con los tokens del sistema de diseño.

- **Fuente de verdad:** `docs/DESIGN.md` → Landing, en el repo de la app (`../maker_tracker`), y el artboard `Landing · Ship happens` de Paper (archivo `01M50CA4S5CN4Z8ERVW36XWDHF`, página Landing). Saca los valores con el MCP de Paper (`get_jsx`, `get_computed_styles`), nunca a ojo.
- **Lo que promete la landing tiene que ser exactamente lo que pasa** al seguir `docs/SELF_HOSTING.md` de la app. Si cambia el comando de instalación, se cambia aquí (`src/site.ts`).
- Es de la vertiente de self-host. Los textos los decide Producto (inbox de la app).

## Comandos

```bash
npm install
npm run dev       # http://localhost:4321 (en segundo plano: npx astro dev --background)
npm run build     # sitio estático en dist/
npm run preview   # sirve dist/
```

## Publicación

- Repo público `franwer-ranger/maker_tracker_landing`, en GitHub Pages con el dominio `makertracker.dev` (`public/CNAME`, DNS en Namecheap).
- Cada push a `main` la construye y la publica (`.github/workflows/deploy.yml`). Es decir: **pushear es publicar**, así que se confirma con Fran.

## Estructura

- `src/styles/global.css`: tokens (mismos nombres y valores que en Paper y la app), fuentes, botones y foco.
- `src/components/`: una sección por componente, en el orden de la página (`Nav`, `Hero`, `Product`, `Statement`, `Steps`, `Light`, `Free`, `Footer`).
- `src/site.ts`: enlaces y comandos de instalación.
- `src/icons/`: solo los iconos que se usan. Heroicons outline 24 (MIT) y la marca de GitHub de Octicons (MIT).
- `public/fonts/`: Geist, Geist Mono e Instrument Serif (OFL), las mismas que la app. Licencias en `public/licenses/`.

## Reglas

- Solo modo oscuro. Naranja (`--color-accent`) solo para acción y atención; texto negro sobre naranja.
- Instrument Serif solo en titulares de 40px o más. Geist para el resto y Geist Mono para lo de máquina.
- Movimiento con `cubic-bezier(0.32, 0.72, 0, 1)`, revelados con `IntersectionObserver` y nunca escuchar `scroll`. Respeta `prefers-reduced-motion`. Sin JavaScript, todo se tiene que leer.
- Foco visible siempre: 2px del fondo + 2px de color (naranja en el primario, blanco en el resto).
- Antes de commitear, pushear o publicar, confirma con Fran.
