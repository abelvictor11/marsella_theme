# 🌊 Guía del Efecto Parallax - Fragrance Universe

## ¿Qué es el Efecto Parallax?

El efecto parallax crea una sensación de **profundidad 3D** haciendo que diferentes elementos se muevan a velocidades diferentes mientras haces scroll. Es como ver a través de una ventana: los objetos cercanos se mueven más rápido que los lejanos.

## 🎯 Cómo Funciona en Esta Sección

### Elementos que tienen Parallax:
✅ **Info Cards** (tarjetas de información)
✅ **Decorative Elements** (elementos decorativos)

### Elementos SIN Parallax:
❌ **Video** (permanece estático en el centro)
❌ **Títulos** (solo tienen animación de entrada)

## 📊 Velocidades y Efectos

```
┌─────────────────────────────────────────────────────┐
│  SCROLL HACIA ABAJO ↓                               │
├─────────────────────────────────────────────────────┤
│                                                     │
│  Speed 20  →  ↑ (se mueve poco hacia arriba)       │
│  Speed 35  →  ↑↑ (se mueve medio hacia arriba)     │
│  Speed 50  →  ↑↑↑ (se mueve mucho hacia arriba)    │
│  Speed 80  →  ↑↑↑↑ (se mueve muy rápido)           │
│                                                     │
└─────────────────────────────────────────────────────┘
```

## 🎨 Configuración Recomendada por Posición

### Layout Típico:
```
        [Card 2]              [Card 3]
  [Card 1]        [VIDEO]          [Card 4]
                 (estático)
```

### Velocidades Sugeridas:

**Card 1** (Izquierda inferior)
- Speed: **20-25**
- Efecto: Movimiento sutil, como fondo
- Razón: Está en el borde, no debe distraer

**Card 2** (Izquierda superior)
- Speed: **30-35**
- Efecto: Movimiento medio-suave
- Razón: Complementa sin competir con el video

**Card 3** (Derecha media)
- Speed: **40-50**
- Efecto: Movimiento notable
- Razón: Elemento destacado, llama la atención

**Card 4** (Derecha inferior)
- Speed: **20-30**
- Efecto: Movimiento sutil-medio
- Razón: Balance con Card 1

**Elementos Decorativos** (hojas, líneas)
- Speed: **60-80**
- Efecto: Movimiento rápido
- Razón: Añaden dinamismo sin contenido importante

## 🔬 Fórmula Técnica

```javascript
// Cálculo del desplazamiento
offset = -scrollProgress × speed × multiplier

Donde:
- scrollProgress: -1 a 1 (posición de la sección en viewport)
- speed: 0 a 100 (configurado por ti)
- multiplier: 1 en desktop, 0.3 en móvil
```

### Ejemplo Práctico:

Si una card tiene `speed = 40`:

```
Inicio de scroll:
  scrollProgress = -0.5
  offset = -(-0.5) × 40 × 1 = +20px (abajo)

Centro del viewport:
  scrollProgress = 0
  offset = -(0) × 40 × 1 = 0px (posición original)

Fin de scroll:
  scrollProgress = 0.5
  offset = -(0.5) × 40 × 1 = -20px (arriba)
```

**Resultado**: La card se mueve 40px en total (20px arriba + 20px abajo)

## 🎭 Efectos Visuales Creativos

### 1. Efecto "Olas"
Cards centrales más rápidas que laterales:
```
Card 1: 20
Card 2: 45  ← Rápida
Card 3: 50  ← Más rápida
Card 4: 25
```

### 2. Efecto "Cascada"
Velocidad aumenta de izquierda a derecha:
```
Card 1: 20
Card 2: 30
Card 3: 40
Card 4: 50
```

### 3. Efecto "Simétrico"
Velocidades espejo:
```
Card 1: 30
Card 2: 45
Card 3: 45
Card 4: 30
```

### 4. Efecto "Caótico"
Velocidades aleatorias para dinamismo:
```
Card 1: 25
Card 2: 55
Card 3: 35
Card 4: 65
```

## 📱 Comportamiento en Móvil

En dispositivos móviles (< 768px):
- El efecto parallax se **reduce automáticamente al 30%**
- Esto previene movimientos bruscos en pantallas pequeñas
- Las posiciones de las cards se ajustan según configuración móvil

```
Desktop: offset = -scrollProgress × 40 × 1 = ±40px
Mobile:  offset = -scrollProgress × 40 × 0.3 = ±12px
```

## 🎬 Optimización de Rendimiento

El efecto usa técnicas avanzadas para mantener 60 FPS:

1. **GPU Acceleration**: `translate3d()` en lugar de `top/left`
2. **RequestAnimationFrame**: Sincronizado con el refresh del navegador
3. **Throttling**: Solo actualiza cuando es necesario
4. **Passive Listeners**: No bloquea el scroll

## 🐛 Troubleshooting

### El efecto no se ve
- ✅ Verifica que `Parallax Speed` no esté en 0
- ✅ Asegúrate de hacer scroll suficiente
- ✅ Revisa la consola del navegador por errores

### El movimiento es muy brusco
- ⚙️ Reduce el valor de `Parallax Speed`
- ⚙️ Usa valores entre 20-40 para efecto suave

### El movimiento es muy sutil
- ⚙️ Aumenta el valor de `Parallax Speed`
- ⚙️ Usa valores entre 50-80 para efecto notable

### Las cards se salen de posición
- 🔧 Ajusta las posiciones `Top` y `Left`
- 🔧 Reduce la velocidad de parallax
- 🔧 Aumenta el `min-height` de la sección

## 🎓 Mejores Prácticas

### ✅ Hacer:
- Usar velocidades variadas (20-50) para crear profundidad
- Probar en diferentes tamaños de pantalla
- Mantener el video estático como punto focal
- Usar velocidades altas (60-100) solo en elementos decorativos

### ❌ Evitar:
- Poner todas las cards a la misma velocidad
- Usar velocidades muy altas (>80) en cards con texto
- Sobrecargar con demasiados elementos parallax
- Ignorar la configuración móvil

## 📐 Plantilla de Configuración

Copia esta configuración como punto de partida:

```yaml
Card 1 - Garantía de Autenticidad:
  Position: Top 350px, Left 5%
  Parallax Speed: 20
  
Card 2 - Catálogo Curado:
  Position: Top 200px, Left 20%
  Parallax Speed: 35
  
Card 3 - Próximo Clásico:
  Position: Top 450px, Left 60%
  Parallax Speed: 45
  
Card 4 - Compra Consciente:
  Position: Top 550px, Left 75%
  Parallax Speed: 25

Video:
  Position: Top 150px, Width 50%
  Parallax: None (estático)

Decorative Element (Hoja):
  Position: Top 250px, Left 75%
  Parallax Speed: 60
```

## 🚀 Experimentación

No tengas miedo de experimentar! El personalizador de Shopify te permite ver los cambios en tiempo real. Prueba diferentes combinaciones hasta encontrar el efecto que mejor represente tu marca.

---

**Tip Pro**: Graba un video de tu pantalla mientras haces scroll para ver el efecto en cámara lenta y ajustar con precisión.
