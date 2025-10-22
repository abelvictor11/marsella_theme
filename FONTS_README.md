# Custom Fonts - Documentación

## 🎨 Fuentes Instaladas

### PP Editorial New
Fuente serif elegante para títulos y contenido editorial.

**Pesos disponibles:**
- **Ultralight (200)** - Regular e Italic
- **Regular (400)** - Regular e Italic
- **Ultrabold (800)** - Regular e Italic

### PP Mori
Fuente sans-serif moderna para texto de cuerpo y UI.

**Pesos disponibles:**
- **Extralight (200)** - Regular e Italic
- **Regular (400)** - Regular e Italic
- **SemiBold (600)** - Regular e Italic

## 📦 Archivos

```
assets/
  └── fonts.css          # Declaraciones @font-face

layout/
  └── theme.liquid       # Incluye fonts.css en el <head>
```

## 🎯 Uso

### 1. Variables CSS

Las fuentes están disponibles como variables CSS:

```css
:root {
  --font-editorial: 'PP Editorial New', Georgia, serif;
  --font-mori: 'PP Mori', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  
  /* Font Weights */
  --font-weight-extralight: 200;
  --font-weight-regular: 400;
  --font-weight-semibold: 600;
  --font-weight-ultrabold: 800;
}
```

### 2. Clases Utilitarias

#### Familias de Fuente:
```html
<h1 class="font-editorial">Título Editorial</h1>
<p class="font-mori">Texto con Mori</p>
```

#### Pesos de Fuente:
```html
<h1 class="font-editorial font-extralight">Ultralight</h1>
<h2 class="font-editorial font-regular">Regular</h2>
<h3 class="font-editorial font-semibold">SemiBold</h3>
<h4 class="font-editorial font-ultrabold">Ultrabold</h4>
```

#### Itálicas:
```html
<em class="font-editorial italic">Texto en itálica</em>
<p class="font-mori italic">Párrafo en itálica</p>
```

### 3. CSS Directo

```css
.my-title {
  font-family: var(--font-editorial);
  font-weight: 800; /* Ultrabold */
  font-style: normal;
}

.my-subtitle {
  font-family: var(--font-editorial);
  font-weight: 400; /* Regular */
  font-style: italic;
}

.my-body {
  font-family: var(--font-mori);
  font-weight: 400; /* Regular */
}

.my-button {
  font-family: var(--font-mori);
  font-weight: 600; /* SemiBold */
  text-transform: uppercase;
}
```

### 4. En Secciones Liquid

```liquid
<h1 style="font-family: var(--font-editorial); font-weight: 800;">
  {{ section.settings.title }}
</h1>

<p style="font-family: var(--font-mori); font-weight: 400;">
  {{ section.settings.description }}
</p>
```

## 📋 Ejemplos de Uso

### Hero Section
```html
<div class="hero">
  <h1 class="font-editorial font-ultrabold">
    <em class="italic">True</em> to Oneself
  </h1>
  <p class="font-mori font-regular">
    Unreservedly honest products that truly work
  </p>
  <button class="font-mori font-semibold">
    EXPLORE ALL PRODUCTS
  </button>
</div>
```

### Product Card
```html
<div class="product-card">
  <h3 class="font-editorial font-regular">
    Product Name
  </h3>
  <p class="font-mori font-extralight">
    $99.00
  </p>
  <button class="font-mori font-semibold">
    Add to Cart
  </button>
</div>
```

### Newsletter
```html
<div class="newsletter">
  <h2 class="font-editorial font-ultrabold">
    SUSCRÍBETE A LA NEWSLETTER
  </h2>
  <p class="font-mori font-regular">
    Recibe ofertas exclusivas
  </p>
</div>
```

## 🎨 Combinaciones Recomendadas

### Títulos Principales
```css
h1 {
  font-family: var(--font-editorial);
  font-weight: 800; /* Ultrabold */
}
```

### Títulos Secundarios
```css
h2 {
  font-family: var(--font-editorial);
  font-weight: 400; /* Regular */
}
```

### Texto de Cuerpo
```css
body, p {
  font-family: var(--font-mori);
  font-weight: 400; /* Regular */
}
```

### Botones
```css
button, .btn {
  font-family: var(--font-mori);
  font-weight: 600; /* SemiBold */
  text-transform: uppercase;
  letter-spacing: 0.1em;
}
```

### Navegación
```css
nav a {
  font-family: var(--font-mori);
  font-weight: 400; /* Regular */
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
```

### Precios
```css
.price {
  font-family: var(--font-mori);
  font-weight: 200; /* Extralight */
}
```

## 🔧 Personalización en Secciones

### Agregar opciones de fuente en schema:

```json
{
  "type": "select",
  "id": "title_font",
  "label": "Title Font",
  "options": [
    {
      "value": "editorial",
      "label": "PP Editorial New"
    },
    {
      "value": "mori",
      "label": "PP Mori"
    }
  ],
  "default": "editorial"
}
```

### Usar en Liquid:

```liquid
<h1 style="font-family: {% if section.settings.title_font == 'editorial' %}var(--font-editorial){% else %}var(--font-mori){% endif %};">
  {{ section.settings.title }}
</h1>
```

## 📊 Mapeo de Pesos

| Nombre | Valor | PP Editorial New | PP Mori |
|--------|-------|------------------|---------|
| Ultralight/Extralight | 200 | ✅ | ✅ |
| Regular | 400 | ✅ | ✅ |
| SemiBold | 600 | ❌ | ✅ |
| Ultrabold | 800 | ✅ | ❌ |

## ⚡ Rendimiento

- **font-display: swap** - Muestra texto inmediatamente con fuente fallback
- **Preconnect** - Ya configurado en theme.liquid para CDN de Shopify
- **Carga desde CDN** - Todas las fuentes se cargan desde Shopify CDN

## 🌐 Fuentes Fallback

### PP Editorial New
```css
font-family: 'PP Editorial New', Georgia, 'Times New Roman', serif;
```

### PP Mori
```css
font-family: 'PP Mori', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
```

## 🎯 Mejores Prácticas

### ✅ Hacer:
- Usar PP Editorial New para títulos y contenido destacado
- Usar PP Mori para texto de cuerpo, botones y UI
- Combinar pesos diferentes para jerarquía visual
- Usar itálicas para énfasis
- Aprovechar las variables CSS

### ❌ Evitar:
- Mezclar demasiados pesos en un mismo elemento
- Usar Ultrabold para texto largo
- Ignorar las fuentes fallback
- Cargar fuentes adicionales innecesarias

## 🔍 Debugging

### Verificar que las fuentes se carguen:

1. Abre DevTools (F12)
2. Ve a la pestaña **Network**
3. Filtra por **Font**
4. Recarga la página
5. Deberías ver 12 archivos .otf cargándose

### Verificar en CSS:

```css
/* En DevTools Console */
getComputedStyle(document.querySelector('h1')).fontFamily
// Debería retornar: "PP Editorial New", Georgia, serif
```

## 📝 Notas

- Las fuentes están alojadas en Shopify CDN
- Todas tienen parámetro `?v=1761100636` para cache busting
- Se cargan en formato OpenType (.otf)
- Compatible con todos los navegadores modernos

---

**Versión**: 1.0  
**Fecha**: Octubre 2024  
**Fuentes**: PP Editorial New, PP Mori
