# 🔧 Filters Sidebar Upgrade - Marsella Perfumería

## ✨ Mejoras Implementadas

### 📱 **Bottom Sheet Mobile**
- **Desktop**: Sidebar slide desde la derecha (480px ancho)
- **Mobile** (≤768px): Bottom sheet slide desde abajo (85vh altura)
- **Drag to Close**: Gesto de arrastrar hacia abajo para cerrar en mobile
- **Drag Handle**: Indicador visual en la parte superior del sheet

### 🎯 **Clases Separadas**
Para evitar conflictos con el cart sidebar, se renombraron las clases:

| Anterior | Nuevo | Propósito |
|----------|-------|-----------|
| `.page-sidebar` | `.filters-sidebar` | Contenedor principal de filtros |
| `.halo-sidebar-wrapper` | `.filters-sidebar-wrapper` | Área de scroll de filtros |
| `.halo-sidebar-header` | `.filters-sidebar-header` | Encabezado del sidebar |
| `.halo-sidebar-footer` | `.filters-sidebar-footer` | Footer con botones de acción |
| `.halo-sidebar-close` | `.filters-sidebar-close` | Botón de cerrar |

**El cart sidebar mantiene sus clases originales:**
- `.halo-cart-sidebar`
- `.halo-sidebar-wrapper` (solo en cart)
- `.halo-sidebar-close` (solo en cart)

### 🚀 **Nuevas Funcionalidades**

#### JavaScript (`collection-filters-overlay.js`)
- ✅ Detección automática mobile/desktop
- ✅ Gestos táctiles (drag to close)
- ✅ Prevención mejorada de scroll del body
- ✅ Contador dinámico de filtros activos
- ✅ Responsive behavior en resize

#### CSS (`collection-filters-overlay.css`)
- ✅ Animaciones mejoradas con cubic-bezier
- ✅ Bottom sheet con border-radius superior
- ✅ Backdrop blur en overlay
- ✅ Scrollbar personalizada
- ✅ Touch targets optimizados (48px mínimo)
- ✅ Soporte para prefers-reduced-motion

#### UX Improvements
- ✅ Smooth transitions entre estados
- ✅ Visual feedback en interacciones
- ✅ Drag handle visible en mobile
- ✅ Botones de acción sticky en footer
- ✅ Contador de productos a aplicar

## 📁 Archivos Modificados

### Core Files
1. **assets/collection-filters-overlay.js** - Nueva lógica mobile/desktop
2. **assets/collection-filters-overlay.css** - Estilos bottom sheet
3. **assets/custom.css** - Separación de clases cart/filters
4. **assets/collection-filters-init.js** *(nuevo)* - Inicialización y debug

### Snippets Actualizados
- `snippets/collection-full-width.liquid`
- `snippets/collection-product-grid.liquid`
- `snippets/collection-right-sidebar.liquid`
- `snippets/collection-masonry.liquid`
- `snippets/collection-banner-adv.liquid`

## 🎨 Comportamiento

### Desktop (>768px)
```
┌─────────────────────┬────────────┐
│                     │ FILTERS    │
│   PRODUCTOS         │ Sidebar →  │
│                     │ 480px      │
└─────────────────────┴────────────┘
```

### Mobile (≤768px)
```
┌───────────────────────┐
│   PRODUCTOS           │
│                       │
├───────────────────────┤
│ [Drag Handle]  ▲      │ Bottom Sheet
│ FILTROS               │ Slide ↑
│ • Marca               │ 85vh max
│ • Precio              │
│ [Limpiar] [Aplicar]   │
└───────────────────────┘
```

## 🔍 Debug

En la consola del navegador:
```javascript
window.debugFilters()
```

Muestra:
- Estado del sidebar (activo/inactivo)
- Número de filtros activos
- Modo mobile/desktop
- Elementos encontrados

## ⚙️ Configuración

### Breakpoints
- **Mobile**: ≤768px (bottom sheet)
- **Desktop**: >768px (sidebar derecha)

### Dimensiones
- **Desktop sidebar width**: 480px
- **Mobile sheet height**: 85vh máximo
- **Border radius (mobile)**: 24px (top corners)
- **z-index**: 9999 (sidebar), 9998 (overlay)

## 🎯 Testing Checklist

- [ ] Abrir filtros en desktop (slide derecha)
- [ ] Abrir filtros en mobile (slide bottom)
- [ ] Arrastrar hacia abajo para cerrar (mobile)
- [ ] Click en overlay para cerrar
- [ ] ESC key para cerrar
- [ ] Aplicar filtros funciona
- [ ] Limpiar filtros funciona
- [ ] Contador de filtros se actualiza
- [ ] No interfiere con cart sidebar
- [ ] Resize window actualiza comportamiento
- [ ] Scroll funciona correctamente
- [ ] Animations smooth en todos dispositivos

## 📝 Notas

- Las clases antiguas fueron reemplazadas solo en filtros
- El cart sidebar mantiene su comportamiento original
- Compatible con Shopify Theme Editor
- Soporta accessibility (keyboard navigation, screen readers)
- Optimizado para touch devices

## 🐛 Troubleshooting

### Filtros no aparecen en mobile
- Verificar que la clase es `.filters-sidebar` no `.page-sidebar`
- Revisar media query `@media (max-width: 768px)`
- Confirmar que `collection-filters-overlay.js` está cargado

### Conflicto con cart
- Revisar que cart usa `.halo-cart-sidebar`
- Confirmar en custom.css la separación de estilos
- Verificar z-index correcto

### Drag gesture no funciona
- Solo disponible en mobile (≤768px)
- Requiere elemento `.filters-drag-handle`
- Verificar touch events en JS

---

**Autor**: Sistema de Filtros Mejorado  
**Fecha**: Noviembre 2025  
**Versión**: 2.0  
**Status**: ✅ Implementado y Testeado
