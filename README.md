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

🚀 Notificaciones con Toast
El proyecto utiliza react-toastify para mostrar notificaciones visuales al usuario. Ya está configurado globalmente y listo para usarse desde cualquier parte de la aplicación.

✅ Cómo usar los toast
Importa los helpers desde shared/ui/toast.ts:

```bash
import { showSuccess, showError, showInfo, showWarning } from '@/shared/ui/toast';
```
```bash
import { showSuccess, showError } from '@/shared/ui/toast';

const handleSubmit = async () => {
  try {
    await registerUser();
    showSuccess('Registro completado');
  } catch (err) {
    showError('Hubo un error al registrar el usuario');
  }
};
```

📦 Modal Global con Zustand + MUI
Este proyecto incluye un modal global reutilizable utilizando Zustand para manejar el estado y Material UI (@mui/material) para el diseño.
✅ ¿Cómo funciona?
El componente GlobalModal se monta una sola vez en el App.tsx.

Desde cualquier parte de la app se puede abrir el modal usando el hook useModalStore.

El modal se cierra al hacer clic fuera del contenido o al presionar Escape.
💡 Ejemplo de uso
```
import { useModalStore } from '../../store/modal.store';

const { openModal } = useModalStore();

<Button onClick={() => openModal(<div>¿Estás segura de eliminar?</div>)}>
  Eliminar
</Button>
```
✨ Comportamiento
✅ Se cierra tocando fuera o presionando Esc.

❌ No tiene botón "X" para cerrar.

🔄 El contenido del modal es dinámico: podés pasarle cualquier JSX.
