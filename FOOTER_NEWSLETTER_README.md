# Footer Newsletter Section - Documentación

## 📋 Descripción

Sección de footer elegante con:
- **Imagen de fondo** con opacidad ajustable
- **Columnas de menús** personalizables (Explorar, Síguenos, Contáctanos)
- **Newsletter box** con formulario de suscripción
- **Logo y copyright** en la parte inferior
- **Links legales** (Política de privacidad, Términos, Contacto)
- **100% editable** desde el personalizador

## 🎨 Elementos de la Sección

### 1. Imagen de Fondo
- Imagen de arquitectura/ambiente
- Opacidad ajustable (0-100%)
- Cubre toda la sección

### 2. Columnas de Menús (Izquierda)
- Bloques ilimitados
- Título personalizable por columna
- Menús de Shopify asignables
- Colores y tamaños configurables

### 3. Newsletter Box (Derecha)
- Título grande personalizable
- Descripción
- Input de email con placeholder
- Botón circular con icono
- Texto de privacidad
- Fondo oscuro con opacidad

### 4. Footer Bottom
- Logo de la tienda
- Copyright automático o personalizado
- Links legales en línea

## 📁 Archivos Creados

```
sections/
  └── footer-newsletter.liquid

assets/
  ├── component-footer-newsletter.css
  └── footer-newsletter.js
```

## 🚀 Instalación

### Como Sección de Footer:

1. Ve al **Editor de temas** de Shopify
2. Haz clic en **"Footer"** en la barra lateral
3. Haz clic en **"Agregar sección"**
4. Busca **"Footer Newsletter"**
5. Agrégala al footer

## ⚙️ Configuración

### Container Settings

- **Container Width**: Default, 1170px, 1370px, 1770px, Full Width
- **Background Color**: Color de fondo de la sección
- **Text Color**: Color del texto general
- **Padding Top**: 0-150px
- **Padding Bottom**: 0-150px

### Background Image

- **Background Image**: Sube imagen de fondo (recomendado: 1920x800px)
- **Background Image Opacity**: 0-100% (default: 30%)

**Ejemplo:**
```
Image: Arquitectura con arcos
Opacity: 30%
```

### Newsletter Settings

- **Show Newsletter Box**: Mostrar/ocultar caja de newsletter
- **Newsletter Title**: Título del newsletter
- **Title Font Size**: 20-60px
- **Title Font Weight**: Normal a Bold
- **Newsletter Description**: Texto descriptivo
- **Description Font Size**: 12-20px

**Colores:**
- **Newsletter Box Background**: Color de fondo de la caja (default: #2a2a2a)
- **Newsletter Text Color**: Color del texto (default: #ffffff)

**Input:**
- **Email Placeholder**: Texto del placeholder
- **Input Background**: Color de fondo del input
- **Input Text Color**: Color del texto del input
- **Input Border Color**: Color del borde

**Botón:**
- **Button Label**: Texto debajo del botón (ej: "REGISTRARSE")
- **Button Label Font Size**: 10-16px
- **Button Icon SVG**: Código SVG del icono
- **Button Background**: Color de fondo del botón
- **Button Icon Color**: Color del icono

**Privacidad:**
- **Privacy Text**: Texto de privacidad
- **Privacy Text Font Size**: 10-14px
- **Privacy Text Color**: Color del texto

**Ejemplo de configuración:**
```
Title: SUSCRÍBETE A LA NEWSLETTER
Description: Recibe ofertas exclusivas, novedades y guías...
Email Placeholder: TU CORREO ELECTRÓNICO
Button Label: REGISTRARSE
Box Background: #2a2a2a
Text Color: #ffffff
```

### Footer Bottom

- **Footer Logo**: Sube el logo de la tienda
- **Logo Width**: 80-300px
- **Show Copyright**: Mostrar/ocultar copyright
- **Copyright Text**: Texto personalizado (vacío = automático)
- **Copyright Suffix**: Texto después del año (ej: "Todos los derechos reservados.")
- **Copyright Font Size**: 10-16px
- **Copyright Color**: Color del texto

**Legal Links:**
- **Legal Links Menu**: Selecciona menú con links legales
- **Legal Links Font Size**: 10-16px
- **Legal Links Color**: Color de los links

**Ejemplo:**
```
Logo: marsella-logo.png
Logo Width: 150px
Copyright: Automático (© 2025 Marsella Perfumería)
Suffix: Todos los derechos reservados.
Legal Menu: footer-legal (Política de privacidad, Términos, Contacto)
```

## 🎯 Bloques: Menu Column

Cada columna de menú tiene:

### Settings
- **Column Title**: Título de la columna (ej: "EXPLORAR")
- **Menu**: Selecciona menú de Shopify
- **Title Color**: Color del título
- **Title Font Size**: 10-18px
- **Title Font Weight**: Normal a Bold
- **Link Color**: Color de los links
- **Link Font Size**: 12-18px

**Ejemplo Columna 1 - EXPLORAR:**
```
Title: EXPLORAR
Menu: footer-explorar
  - Tienda
  - Para él
  - Para ella
  - Árabes
  - Ingresar
Title Size: 11px
Link Size: 14px
```

**Ejemplo Columna 2 - SÍGUENOS:**
```
Title: SÍGUENOS
Menu: footer-social
  - Instagram
  - Facebook
Title Size: 11px
Link Size: 14px
```

**Ejemplo Columna 3 - CONTÁCTANOS:**
```
Title: CONTÁCTANOS
Menu: footer-contact
  - info@marsellaperfumeria.com
  - 1111-2222-3333
Title Size: 11px
Link Size: 14px
```

## 📋 Crear Menús en Shopify

### 1. Menú "EXPLORAR" (footer-explorar)
1. Ve a **Navigation** en Shopify Admin
2. Crea nuevo menú: "Footer - Explorar"
3. Agrega links:
   - Tienda → /collections/all
   - Para él → /collections/para-el
   - Para ella → /collections/para-ella
   - Árabes → /collections/arabes
   - Ingresar → /account/login

### 2. Menú "SÍGUENOS" (footer-social)
1. Crea nuevo menú: "Footer - Social"
2. Agrega links:
   - Instagram → https://instagram.com/tu-cuenta
   - Facebook → https://facebook.com/tu-pagina

### 3. Menú "CONTÁCTANOS" (footer-contact)
1. Crea nuevo menú: "Footer - Contact"
2. Agrega links:
   - Email → mailto:info@marsellaperfumeria.com
   - Teléfono → tel:+11112222333

### 4. Menú "Legal" (footer-legal)
1. Crea nuevo menú: "Footer - Legal"
2. Agrega links:
   - Política de privacidad → /pages/privacy-policy
   - Términos y condiciones → /pages/terms-of-service
   - Contacto → /pages/contact

## 🎨 Iconos SVG Recomendados

### Icono de Flecha (Botón Newsletter):
```svg
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
  <path d="M5 12h14M12 5l7 7-7 7"/>
</svg>
```

### Icono de Email:
```svg
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
  <rect x="2" y="4" width="20" height="16" rx="2"/>
  <path d="m2 7 10 7 10-7"/>
</svg>
```

### Icono de Check:
```svg
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
  <polyline points="20 6 9 17 4 12"/>
</svg>
```

## 🎯 Ejemplo de Configuración Completa

### Recrear el diseño de la imagen:

1. **Section Settings:**
   - Container: 1370px
   - Background Color: #ffffff
   - Text Color: #000000
   - Padding Top: 80px
   - Padding Bottom: 60px

2. **Background Image:**
   - Upload: Imagen de arquitectura con arcos
   - Opacity: 30%

3. **Newsletter Box:**
   - Show: Yes
   - Title: "SUSCRÍBETE A LA NEWSLETTER"
   - Title Size: 36px
   - Description: "Recibe ofertas exclusivas, novedades y guías de perfumería directo a tu bandeja."
   - Box Background: #2a2a2a
   - Text Color: #ffffff

4. **Newsletter Input:**
   - Placeholder: "TU CORREO ELECTRÓNICO"
   - Input Background: rgba(255,255,255,0.1)
   - Input Text Color: #ffffff
   - Input Border: rgba(255,255,255,0.3)

5. **Newsletter Button:**
   - Label: "REGISTRARSE"
   - Icon: [Flecha SVG]
   - Background: #ffffff
   - Icon Color: #000000

6. **Privacy Text:**
   - Text: "Tus datos están siempre en control para nosotros y son más robustos."
   - Size: 11px
   - Color: rgba(255,255,255,0.6)

7. **Add Menu Block 1:**
   - Title: "EXPLORAR"
   - Menu: footer-explorar
   - Title Color: #000000
   - Link Color: #000000

8. **Add Menu Block 2:**
   - Title: "SÍGUENOS"
   - Menu: footer-social
   - Title Color: #000000
   - Link Color: #000000

9. **Add Menu Block 3:**
   - Title: "CONTÁCTANOS"
   - Menu: footer-contact
   - Title Color: #000000
   - Link Color: #000000

10. **Footer Bottom:**
    - Logo: marsella-logo.png
    - Logo Width: 150px
    - Show Copyright: Yes
    - Copyright: Automático
    - Suffix: "Todos los derechos reservados."
    - Legal Menu: footer-legal

## 📱 Responsive

La sección es completamente responsive:
- **Desktop**: Layout horizontal con newsletter a la derecha
- **Tablet**: Newsletter debajo de los menús
- **Mobile**: Layout vertical, columnas apiladas

## ✨ Funcionalidades del Formulario

### Validación
- Validación de email en tiempo real
- Mensajes de error/éxito
- Prevención de envíos duplicados

### Integración con Shopify
- Se integra con el sistema de contactos de Shopify
- Tag automático "newsletter" para segmentación
- Compatible con apps de email marketing

### Estados
- **Loading**: Botón deshabilitado durante envío
- **Success**: Mensaje verde de confirmación
- **Error**: Mensaje rojo de error

## 🔧 Personalización Avanzada

### Cambiar estilo del newsletter box

Puedes ajustar:
- Padding interno (en el CSS)
- Border radius (en el CSS)
- Sombras (en el CSS)
- Animaciones (en el CSS)

### Agregar más columnas de menú

Simplemente agrega más bloques "Menu Column" desde el personalizador.

### Cambiar layout

El layout es responsive automáticamente, pero puedes modificar los breakpoints en el CSS.

## 🐛 Troubleshooting

### El formulario no envía
- Verifica que el formulario esté conectado a `/contact`
- Revisa la consola del navegador por errores
- Asegúrate de que JavaScript esté habilitado

### Los menús no aparecen
- Verifica que hayas creado los menús en Navigation
- Asegúrate de haber seleccionado el menú correcto en cada bloque
- Revisa que los menús tengan links

### La imagen de fondo no se ve
- Verifica que la imagen esté subida
- Ajusta la opacidad (puede estar en 0%)
- Revisa el tamaño de la imagen (muy grande puede tardar en cargar)

### El newsletter box está muy grande/pequeño
- Ajusta el `max-width` en el CSS (default: 450px)
- Modifica el padding interno
- Cambia el tamaño de fuente del título

## 📐 Mejores Prácticas

### ✅ Hacer:
- Usar imagen de fondo de alta calidad
- Mantener el texto del newsletter conciso
- Probar el formulario antes de publicar
- Usar colores con buen contraste
- Agregar 3-4 columnas de menú máximo

### ❌ Evitar:
- Imágenes de fondo muy pesadas (>500KB)
- Texto muy largo en el newsletter
- Más de 5 links por columna de menú
- Colores con bajo contraste
- Ignorar la configuración móvil

## ⚡ Rendimiento

- Imagen de fondo lazy loading
- JavaScript asíncrono
- CSS optimizado
- Formulario con prevención de spam

## 🔒 Privacidad y GDPR

- Incluye texto de privacidad editable
- Compatible con políticas de privacidad
- Tag de newsletter para segmentación
- Cumple con mejores prácticas de GDPR

---

**Versión**: 1.0  
**Fecha**: Octubre 2024  
**Compatibilidad**: Shopify 2.0+  
**Tipo**: Footer Section
