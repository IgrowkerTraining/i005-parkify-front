# 🚗 ParkiFy – Frontend

Aplicación web para encontrar y reservar plazas de estacionamiento en tiempo real.

---

## 🛠️ Cómo empezar a trabajar

### 1. Crear tu rama desde una issue

1. Ve a la pestaña **Projects** en GitHub.
2. Busca tu **issue asignada**.
3. Crea tu rama a partir del nombre de la issue:
   ```bash
   git checkout -b feature/nombre-de-la-tarea
   ```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Ejecutar el proyecto

```bash
npm run dev
```

Abre `http://localhost:5173` en el navegador para ver la app en desarrollo.

---

## 📁 Estructura del proyecto

```bash
src/
├── app/              # Configuración de rutas y estado global (router.tsx, store.ts)
├── features/         # Módulos principales (auth, parkings, bookings, map)
│   └── [modulo]/     
│       ├── pages/        # Vistas completas que se mapean con rutas
│       ├── components/   # Componentes reutilizables solo dentro del módulo
│       └── services/     # Llamadas a API, React Query hooks
├── layouts/          # Layouts generales como PublicLayout (Header/Footer persistentes)
├── shared/           
│   ├── ui/           # Componentes reutilizables globales (Botón, Input, Header, Footer)
│   ├── hooks/        # Custom hooks genéricos (useToggle, useDebounce...)
│   ├── types/        # Tipos TypeScript globales (User, Parking, etc.)
│   └── utils/        # Funciones auxiliares (validaciones, formateo de fechas...)
```

---

## ✅ Recuerda

- Cada funcionalidad va dentro de su carpeta en `features/`
- Usa los archivos de ejemplo ya creados para `HomePage`
- Los componentes comunes van en `shared/ui/`
- Si creas lógica compartida, usa `shared/hooks` o `shared/utils`
