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

## 📋 Instrucciones para implementar el Control de Plazas Disponibles

### 🚀 Pasos a seguir
🧩 1. Importar el hook de Zustand
Al principio de tu componente (donde estás desarrollando el panel de control), importa el hook useParkingStore:


import { useParkingStore } from '@/features/parking/store/useParkingStore'
🧩 2. Acceder a la función setAvailability
Dentro de tu componente (fuera del return), crea esta constante:


const setAvailability = useParkingStore((state) => state.setAvailability)
Esto te permitirá actualizar el número de plazas en toda la app.

🧩 3. Llamar a setAvailability al guardar cambios
Cuando el usuario haga clic en "Guardar cambios", llama a esta función pasando:

el id del parking

la cantidad de plazas disponibles que haya elegido

Así:

setAvailability(parkingId, newAvailableSlots)
Ejemplo real en tu botón:

<Button onClick={() => setAvailability(parking.id, slots)}>
  Guardar cambios
</Button>
✅ parking.id: es el identificador del parking actual (deberías tenerlo en el componente).
✅ slots: es el número actualizado (lo que ve en el input o el contador).

🧩 4. Cómo probar que funciona
El proyecto tiene activo un mock (useMockAvailabilityUpdates) que actualiza automáticamente un parking cada 5 segundos.

Mientras tanto, tu cambio manual usando setAvailability debe actualizar inmediatamente el número de plazas en:

Tu panel de control (contador)

El perfil del parking (ParkingProfile) donde se usa AvailabilityStatus.

✅ No hace falta recargar la página.
✅ No hace falta tocar ParkingProfile.
✅ Todo se actualiza solo.

🧪 ¿Cómo saber si todo funciona bien?
Cambia el número de plazas disponibles en el control.

Haz clic en "Guardar cambios".

Ve al perfil del parking → Deberías ver que el número de plazas cambia en vivo.

⚙️ Info extra
Mientras desarrollamos, dejamos el mock activo para facilitar las pruebas (useMockAvailabilityUpdates() está activado en App.tsx).

Cuando conectemos el WebSocket real del backend, no tendrás que cambiar nada en tu componente.

### 📌 Ejemplo mínimo de integración

import { useParkingStore } from '@/features/parking/store/useParkingStore'

const ParkingAvailabilityControl = ({ parkingId }: { parkingId: string }) => {
  const [slots, setSlots] = useState(0)
  const setAvailability = useParkingStore((state) => state.setAvailability)

  const handleSave = () => {
    setAvailability(parkingId, slots)
  }

  return (
    <div>
      <input
        type="number"
        value={slots}
        onChange={(e) => setSlots(Number(e.target.value))}
      />
      <button onClick={handleSave}>Guardar cambios</button>
    </div>
  )
}

