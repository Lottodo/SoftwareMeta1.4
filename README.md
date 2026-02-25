# Componente Dashboard – PWA de revisión por pares

## Descripción

El componente **Dashboard** permite al autor visualizar sus artículos almacenados localmente.  
Es el primer incremento del MVP y funciona completamente offline usando **localStorage**.

La arquitectura sigue separación básica:

- **UI:** DashboardView
- **Lógica:** DashboardService
- **Persistencia:** ArticleStorage (localStorage)

Si no existen artículos, el sistema crea automáticamente datos simulados.

---

## Responsabilidades

### UI (DashboardView)

- Renderizar tabla de artículos
- Mostrar estado legible
- Mostrar mensaje cuando no hay datos

### Lógica (DashboardService)

- Obtener artículos desde persistencia
- Ordenarlos por fecha

### Persistencia (ArticleStorage)

- Leer artículos desde localStorage
- Crear datos simulados iniciales

---

## Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript ES6
- localStorage

Compatibles con cualquier navegador moderno.

---

## Estructura de archivos
```
/dashboard
index.html
styles.css
app.js
```

---

## Cómo ejecutar

Abrir: ```index.html```

No requiere servidor.

---

## Cómo probar persistencia

Abrir DevTools:

Application → Local Storage

Eliminar la clave:
```articles```

Recargar la página.

---

## Limitaciones conocidas (MVP)

- No permite crear artículos aún
- No permite subir archivos
- No usa IndexedDB
- No soporta múltiples usuarios
- No tiene Service Worker

Se resolverá en incrementos posteriores.
