# Sección Fragrance Universe - Documentación

## 📋 Descripción

Sección personalizada para Shopify que muestra un universo de fragancias con:
- **Título con animación de entrada** (fade-in)
- **Video central** (YouTube o Vimeo)
- **Cards flotantes** con efecto parallax a diferentes velocidades
- **Elementos decorativos** con parallax
- **100% editable** desde el personalizador de Shopify

## 🎨 Características

### Animaciones
- ✅ Títulos con animación de entrada (fade-in up)
- ✅ Cards con efecto parallax en scroll (velocidades configurables)
- ✅ Elementos decorativos con parallax independiente
- ✅ Video estático (sin parallax)

### Responsive
- ✅ Diseño adaptable para desktop, tablet y móvil
- ✅ Posiciones independientes para desktop y móvil
- ✅ Efecto parallax reducido en móvil para mejor rendimiento

### Accesibilidad
- ✅ Soporte para `prefers-reduced-motion`
- ✅ Alto contraste
- ✅ Semántica HTML correcta

## 📁 Archivos Creados

```
sections/
  └── fragrance-universe.liquid

assets/
  ├── component-fragrance-universe.css
  └── fragrance-universe.js
```

## 🚀 Instalación

Los archivos ya están creados en tu tema. Para usar la sección:

1. Ve al **Editor de temas** de Shopify
2. Selecciona la página donde quieres agregar la sección
3. Haz clic en **"Agregar sección"**
4. Busca **"Fragrance Universe"**
5. Haz clic para agregarla

## ⚙️ Configuración

### Configuración General

#### Container Width
- **Default**: Ancho estándar del tema
- **1170px, 1370px, 1770px**: Anchos fijos
- **Full Width**: Ancho completo

#### Títulos
- **Main Title**: Título principal en itálica (ej: "el lujo de elegir.")
- **Subtitle**: Subtítulo en mayúsculas (ej: "UN UNIVERSO DE FRAGANCIAS.")
- **Description**: Texto descriptivo

Cada título tiene:
- Color personalizable
- Tamaño de fuente (desktop y móvil)
- Peso de fuente (para subtitle)

### Bloques Disponibles

#### 1. Info Card (Tarjeta de Información)

**Posición Desktop:**
- Top Position: 0-1000px
- Left Position: 0-100%
- Card Width: 150-500px

**Posición Mobile:**
- Top Position (Mobile): 0-1000px
- Left Position (Mobile): 0-100%
- Card Width (Mobile): 150-400px

**Efecto Parallax:**
- Parallax Speed: 0-100
  - 0 = Sin parallax
  - 20-30 = Movimiento suave
  - 40-60 = Movimiento medio
  - 70-100 = Movimiento rápido

**Estilo:**
- Background Color
- Border Radius: 0-50px
- Padding: 10-60px

**Contenido:**
- Icon SVG (código SVG)
- Icon Size: 20-80px
- Icon Color
- Card Title
- Card Text (rich text)

**Ejemplo de configuración:**
```
Top: 350px
Left: 5%
Width: 280px
Parallax Speed: 20
```

#### 2. Video Block (Bloque de Video)

**Límite:** 1 por sección

**Posición Desktop:**
- Top Position: 0-500px
- Video Width: 30-80%

**Posición Mobile:**
- Top Position (Mobile): 0-500px
- Video Width (Mobile): 70-100%

**Video Settings:**
- Video URL: YouTube o Vimeo
- Autoplay: Sí/No
- Mute: Sí/No
- Loop: Sí/No
- Show Controls: Sí/No
- Show Play Button: Sí/No

**Ejemplo de configuración:**
```
Top: 150px
Width: 50%
Autoplay: Yes
Mute: Yes
Loop: Yes
```

#### 3. Decorative Element (Elemento Decorativo)

**Posición Desktop:**
- Top Position: 0-1000px
- Left Position: 0-100%
- Element Width: 50-400px

**Posición Mobile:**
- Top Position (Mobile): 0-1000px
- Left Position (Mobile): 0-100%
- Element Width (Mobile): 50-300px

**Efecto Parallax:**
- Parallax Speed: 0-100
- Rotation: -180° a 180°

**Tipos de Elemento:**
1. **Image**: Sube una imagen
2. **SVG Code**: Pega código SVG
3. **Shape**: Formas predefinidas
   - Circle
   - Square
   - Line

**Ejemplo de configuración:**
```
Top: 250px
Left: 75%
Width: 150px
Parallax Speed: 60
Rotation: 15deg
```

## 🎯 Ejemplo de Uso Completo

### Recrear el diseño de la imagen:

1. **Agregar la sección** al homepage

2. **Configurar títulos:**
   - Main Title: "el lujo de elegir."
   - Subtitle: "UN UNIVERSO DE FRAGANCIAS."
   - Description: "Nuestra Colección de Nicho: Fragancias que Aún No Conocías."

3. **Agregar Video Block:**
   - Top: 150px
   - Width: 50%
   - URL: Tu video de YouTube/Vimeo
   - Autoplay: Yes, Mute: Yes, Loop: Yes

4. **Agregar Card 1 (Garantía):**
   - Top: 350px, Left: 5%
   - Parallax Speed: 20
   - Title: "GARANTÍA DE AUTENTICIDAD"
   - Text: "El lujo no debe ser incierto..."

5. **Agregar Card 2 (Catálogo):**
   - Top: 200px, Left: 20%
   - Parallax Speed: 35
   - Title: "CATÁLOGO CURADO POR EXPERTOS"

6. **Agregar Card 3 (Clásico):**
   - Top: 450px, Left: 60%
   - Parallax Speed: 45
   - Title: "TU PRÓXIMO CLÁSICO TE ESPERA"

7. **Agregar Card 4 (Consciente):**
   - Top: 550px, Left: 75%
   - Parallax Speed: 25
   - Title: "COMPRA CONSCIENTE"

8. **Agregar elementos decorativos:**
   - Hoja verde (imagen)
   - Líneas decorativas (SVG o shapes)

## 🎨 Iconos SVG Recomendados

### Icono de Hoja (para Garantía):
```svg
<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
  <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
  <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
</svg>
```

### Icono de Lupa (para Catálogo):
```svg
<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
  <circle cx="11" cy="11" r="8"/>
  <path d="m21 21-4.35-4.35"/>
</svg>
```

### Icono de Perfume (para Clásico):
```svg
<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
  <path d="M9 6h6"/>
  <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/>
  <rect x="7" y="6" width="10" height="14" rx="2"/>
</svg>
```

### Icono de Corazón (para Consciente):
```svg
<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
</svg>
```

## 🔧 Personalización Avanzada

### Ajustar velocidad de parallax

La velocidad del parallax se calcula así:
- **0**: Sin movimiento
- **20-30**: Movimiento muy sutil (recomendado para cards principales)
- **40-60**: Movimiento medio (recomendado para elementos decorativos)
- **70-100**: Movimiento rápido (usar con precaución)

### Colores recomendados

```css
Background Cards: #FFFFFF (blanco)
Títulos Cards: #000000 (negro)
Texto Cards: #666666 (gris)
Elementos decorativos: #00C853 (verde) o colores de marca
```

## 📱 Responsive Breakpoints

- **Desktop**: > 1024px
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px

En móvil, el parallax se reduce automáticamente a 30% para mejor rendimiento.

## ⚡ Rendimiento

- Usa `requestAnimationFrame` para animaciones suaves
- GPU acceleration con `translate3d`
- Lazy loading para imágenes
- Respeta `prefers-reduced-motion`

## 🐛 Troubleshooting

### El parallax no funciona
- Verifica que `Parallax Speed` no esté en 0
- Revisa la consola del navegador por errores
- Asegúrate de que el JavaScript se cargó correctamente

### Las cards se superponen en móvil
- Ajusta las posiciones móviles independientemente
- Usa `Top Position (Mobile)` para separar las cards verticalmente

### El video no se reproduce
- Verifica que la URL sea válida de YouTube o Vimeo
- Asegúrate de que el video sea público
- Algunos navegadores bloquean autoplay sin mute

## 📞 Soporte

Para modificaciones adicionales, edita:
- **HTML/Liquid**: `sections/fragrance-universe.liquid`
- **CSS**: `assets/component-fragrance-universe.css`
- **JavaScript**: `assets/fragrance-universe.js`

---

**Versión**: 1.0  
**Fecha**: Octubre 2024  
**Compatibilidad**: Shopify 2.0+
