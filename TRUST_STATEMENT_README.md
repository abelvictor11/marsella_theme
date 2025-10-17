# Trust Statement Section - Documentación

## 📋 Descripción

Sección impactante para homepage que comunica confianza y autenticidad con:
- **Título grande y bold** en múltiples líneas (con línea en itálica)
- **Imagen hero** posicionable (producto flotante)
- **Badge pill** personalizable (ej: "AUTENTICIDAD")
- **Botón circular** con icono (ej: "NUESTRA FILOSOFÍA")
- **Lista de features** con iconos y descripciones
- **100% editable** desde el personalizador

## 🎨 Elementos de la Sección

### 1. Badge Pill (Superior Izquierda)
- Texto personalizable
- Colores de fondo, texto y borde
- Estilo pill con bordes redondeados

### 2. Título Principal (Centro)
- **4 líneas independientes** de texto
- Línea 3 automáticamente en itálica
- Tamaño de fuente ajustable (desktop y móvil)
- Peso de fuente configurable
- Line height ajustable

### 3. Imagen Hero (Flotante sobre el título)
- Posición completamente ajustable (top, left)
- Tamaño configurable
- Rotación opcional
- Posiciones independientes para móvil
- Drop shadow automático

### 4. Botón de Filosofía (Izquierda)
- Texto personalizable
- Icono SVG opcional
- Link configurable
- Colores personalizables
- Posición ajustable
- Efecto hover

### 5. Lista de Features (Derecha)
- Bloques ilimitados
- Icono SVG por feature
- Título y descripción
- Colores independientes
- Animación escalonada

## 📁 Archivos Creados

```
sections/
  └── trust-statement.liquid

assets/
  └── component-trust-statement.css
```

## 🚀 Instalación

1. Ve al **Editor de temas** de Shopify
2. Selecciona la página (homepage)
3. Haz clic en **"Agregar sección"**
4. Busca **"Trust Statement"**
5. Haz clic para agregarla

## ⚙️ Configuración

### Section Settings

#### Container Width
- Default, 1170px, 1370px, 1770px, Full Width

#### Colors & Spacing
- **Background Color**: Color de fondo de la sección
- **Padding Top**: 0-200px
- **Padding Bottom**: 0-200px

### Badge Settings

- **Show Badge**: Mostrar/ocultar badge
- **Badge Text**: Texto del badge (ej: "AUTENTICIDAD")
- **Badge Background**: Color de fondo
- **Badge Text Color**: Color del texto
- **Badge Border Color**: Color del borde

**Ejemplo:**
```
Text: AUTENTICIDAD
Background: Transparent
Text Color: #000000
Border Color: #000000
```

### Title Settings

- **Title Line 1**: Primera línea (ej: "COMPRA")
- **Title Line 2**: Segunda línea (ej: "CONFIABLE.")
- **Title Line 3**: Tercera línea en itálica (ej: "CERO")
- **Title Line 4**: Cuarta línea (ej: "DUDAS.")
- **Title Color**: Color del texto
- **Title Font Size (Desktop)**: 40-200px
- **Title Font Size (Mobile)**: 30-100px
- **Title Font Weight**: Normal a Black
- **Title Line Height**: 0.8-1.5

**Ejemplo:**
```
Line 1: COMPRA
Line 2: CONFIABLE.
Line 3: CERO (automáticamente en itálica)
Line 4: DUDAS.
Size: 120px (desktop), 50px (mobile)
Weight: Bold (700)
Line Height: 0.95
```

### Hero Image Settings

- **Hero Image**: Sube la imagen del producto
- **Image Top Position (Desktop)**: -200 a 500px
- **Image Left Position (Desktop)**: 0-100%
- **Image Width (Desktop)**: 200-800px
- **Image Top Position (Mobile)**: -100 a 300px
- **Image Left Position (Mobile)**: 0-100%
- **Image Width (Mobile)**: 150-400px
- **Image Rotation**: -45° a 45°

**Ejemplo:**
```
Top: 100px
Left: 30%
Width: 400px
Rotation: 0deg
```

### Philosophy Button Settings

- **Show Philosophy Button**: Mostrar/ocultar
- **Button Text**: Texto del botón
- **Button Link**: URL de destino
- **Button Icon SVG**: Código SVG del icono
- **Button Background**: Color de fondo
- **Button Text Color**: Color del texto
- **Button Border Color**: Color del borde
- **Button Top Position (Desktop)**: 0-800px
- **Button Left Position (Desktop)**: 0-50%
- **Button Top Position (Mobile)**: 0-600px
- **Button Left Position (Mobile)**: 0-50%

**Ejemplo:**
```
Text: NUESTRA FILOSOFÍA
Link: /pages/about
Background: #000000
Text Color: #ffffff
Top: 350px
Left: 8%
```

### Features Position

- **Features Top Position (Desktop)**: 0-800px
- **Features Right Position (Desktop)**: 0-50%
- **Features Top Position (Mobile)**: 0-600px
- **Features Right Position (Mobile)**: 0-50%

**Ejemplo:**
```
Top: 450px
Right: 10%
```

## 🎯 Bloques: Feature Item

Cada feature tiene:

### Icon
- **Feature Icon SVG**: Código SVG
- **Icon Size**: 20-80px
- **Icon Color**: Color del icono

### Content
- **Feature Title**: Título del feature
- **Title Color**: Color del título
- **Title Font Size**: 12-24px
- **Title Font Weight**: Normal a Bold
- **Feature Description**: Texto descriptivo (rich text)
- **Description Color**: Color del texto
- **Description Font Size**: 10-18px

**Ejemplo Feature 1:**
```
Title: 100% Genuino Garantizado
Description: Tu Sello de Confianza. Vendemos solo frascos auténticos...
Icon Size: 40px
Icon Color: #000000
```

**Ejemplo Feature 2:**
```
Title: El Lujo de Elegir
Description: Catálogo Curado. No vendemos cualquier fragancia...
Icon Size: 40px
Icon Color: #000000
```

## 🎨 Iconos SVG Recomendados

### Icono de Certificado (100% Genuino):
```svg
<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
  <circle cx="12" cy="12" r="10"/>
  <path d="m9 12 2 2 4-4"/>
</svg>
```

### Icono de Diamante (El Lujo):
```svg
<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
  <path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z"/>
</svg>
```

### Icono de Flecha (Botón Filosofía):
```svg
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
  <path d="M5 12h14M12 5l7 7-7 7"/>
</svg>
```

### Icono de Estrella (Calidad):
```svg
<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
</svg>
```

## 🎯 Ejemplo de Configuración Completa

### Recrear el diseño de la imagen:

1. **Section Settings:**
   - Container: 1370px
   - Background: #f5f5f5
   - Padding Top: 80px
   - Padding Bottom: 80px

2. **Badge:**
   - Show: Yes
   - Text: "AUTENTICIDAD"
   - Background: Transparent
   - Text Color: #000000
   - Border Color: #000000

3. **Title:**
   - Line 1: "COMPRA"
   - Line 2: "CONFIABLE."
   - Line 3: "CERO"
   - Line 4: "DUDAS."
   - Size: 120px (desktop), 50px (mobile)
   - Weight: Bold (700)
   - Color: #000000

4. **Hero Image:**
   - Upload: Imagen de perfume dorado
   - Top: 100px
   - Left: 30%
   - Width: 400px
   - Rotation: 0deg

5. **Philosophy Button:**
   - Show: Yes
   - Text: "NUESTRA FILOSOFÍA"
   - Link: /pages/philosophy
   - Background: #000000
   - Text Color: #ffffff
   - Top: 350px
   - Left: 8%

6. **Features Position:**
   - Top: 450px
   - Right: 10%

7. **Add Feature Block 1:**
   - Title: "100% Genuino Garantizado"
   - Description: "Tu Sello de Confianza. Vendemos solo frascos auténticos de las casas de diseño más prestigiosas. Cada frasco pasa por un riguroso control para asegurar que recibes el producto original, sin sorpresas."
   - Icon: [Certificado SVG]

8. **Add Feature Block 2:**
   - Title: "El Lujo de Elegir"
   - Description: "Catálogo Curado. No vendemos cualquier fragancia, solo las más de renombre mundial para ofrecerte la colección más selecta, nicho y de la más alta calidad."
   - Icon: [Diamante SVG]

## 🎨 Paleta de Colores Recomendada

```css
Background: #f5f5f5 (gris claro)
Title: #000000 (negro)
Badge Border: #000000 (negro)
Button Background: #000000 (negro)
Button Text: #ffffff (blanco)
Feature Title: #000000 (negro)
Feature Description: #666666 (gris medio)
```

## 📱 Responsive

La sección es completamente responsive:
- **Desktop**: Layout horizontal con imagen centrada
- **Tablet**: Elementos se ajustan proporcionalmente
- **Mobile**: Layout vertical, posiciones independientes

## ✨ Animaciones

- **Badge**: Fade in
- **Title**: Fade in up (línea por línea)
- **Hero Image**: Scale in con rotación
- **Philosophy Button**: Fade in
- **Features**: Slide in desde la derecha (escalonado)

## 🔧 Personalización Avanzada

### Ajustar posición de la imagen

La imagen se posiciona con coordenadas absolutas:
- **Top**: Distancia desde arriba (puede ser negativa)
- **Left**: Porcentaje desde la izquierda
- **Width**: Ancho de la imagen

### Crear efecto de superposición

Para que la imagen se superponga al texto:
1. Ajusta `Image Top` a un valor bajo (50-150px)
2. Ajusta `Image Left` para centrar (25-35%)
3. La imagen tiene `z-index: 15` (sobre el texto)

### Cambiar el orden visual

Los z-index son:
- Badge: 10
- Title: 5
- Image: 15 (más alto)
- Button: 10
- Features: 10

## 🐛 Troubleshooting

### La imagen no se superpone correctamente
- Ajusta `Image Top` y `Image Left`
- Verifica que la imagen tenga fondo transparente
- Prueba diferentes valores de `Image Width`

### El título es muy grande/pequeño
- Ajusta `Title Font Size (Desktop)` y `(Mobile)`
- Modifica `Title Line Height` para espaciado
- Cambia `Title Font Weight` para grosor

### Los features no se ven
- Verifica que hayas agregado bloques "Feature Item"
- Ajusta `Features Top Position` y `Right Position`
- Revisa que los textos no estén vacíos

### El botón está mal posicionado
- Ajusta `Button Top Position` y `Left Position`
- Usa valores diferentes para desktop y mobile
- Considera el tamaño del contenedor

## 📐 Mejores Prácticas

### ✅ Hacer:
- Usar imágenes PNG con fondo transparente
- Mantener el título corto y impactante (2-4 palabras por línea)
- Usar 2-3 features máximo
- Probar en diferentes tamaños de pantalla
- Usar colores con buen contraste

### ❌ Evitar:
- Títulos muy largos (más de 20 caracteres por línea)
- Más de 4 features (se ve abarrotado)
- Imágenes muy pesadas (>500KB)
- Colores con bajo contraste
- Ignorar la configuración móvil

## ⚡ Rendimiento

- Usa imágenes optimizadas (WebP recomendado)
- Tamaño recomendado de imagen: 800x800px máximo
- Peso recomendado: <200KB
- Las animaciones respetan `prefers-reduced-motion`

---

**Versión**: 1.0  
**Fecha**: Octubre 2024  
**Compatibilidad**: Shopify 2.0+
