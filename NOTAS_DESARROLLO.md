# Notas de Desarrollo - Tours Con Amigos

## ✅ Implementación Completada

### Estructura del Proyecto
- ✅ Proyecto React + Vite configurado
- ✅ Estructura de carpetas organizada (components, data, hooks, styles)
- ✅ Variables de entorno configuradas correctamente

### Componentes Implementados

1. **Navbar** (`src/components/Navbar.jsx`)
   - Logo con efecto hover lift (translateY)
   - Scroll al inicio al hacer clic
   - Menú responsive con hamburguesa en móvil
   - Navegación por anclas suave

2. **Hero** (`src/components/Hero.jsx`)
   - Diseño de dos columnas
   - Patrón de fondo sutil
   - Botones CTA: "Consultar" y "Ver Paquetes"
   - Animaciones de entrada (fadeIn)

3. **DestinosSection** (`src/components/DestinosSection.jsx`)
   - Cards dinámicas desde `src/data/destinos.js`
   - Badges de tipo (educativo/recreativo)
   - Hover con zoom en imágenes
   - Grid responsive

4. **PaquetesSection** (`src/components/PaquetesSection.jsx`)
   - Cards desde `src/data/paquetes.js`
   - Información: fechas, precios, descripción
   - Botón "Consultar" con scroll a contacto
   - Layout adaptativo

5. **WhyUs** (`src/components/WhyUs.jsx`)
   - Iconos con react-icons
   - 6 razones editables desde `src/data/whyUs.js`
   - Hover con elevación y cambio de fondo
   - Iconos circulares con gradiente

6. **About** (`src/components/About.jsx`)
   - Misión, Visión y Filosofía
   - Contadores animados (IntersectionObserver)
   - 4 estadísticas desde `src/data/stats.js`
   - Animación smooth al entrar en viewport

7. **InstagramEmbed** (`src/components/InstagramEmbed.jsx`)
   - Iframe de Instagram
   - URL: https://www.instagram.com/tourconamigos21/embed/
   - Botón CTA para ver más
   - Container responsive

8. **Contact** (`src/components/Contact.jsx`)
   - Formulario con EmailJS
   - reCAPTCHA v3 integrado
   - Datos de contacto clickeables
   - Validaciones y estados (success/error)
   - Links a WhatsApp, teléfono, email, dirección
   - Iconos de redes sociales

9. **MapEmbed** (`src/components/MapEmbed.jsx`)
   - Iframe de Google Maps
   - Ubicación del local en Santa Fe
   - Filtro grayscale con hover

10. **PreFooter** (`src/components/PreFooter.jsx`)
    - Imagen de fondo con overlay
    - Frase: "¡Viví el viaje que siempre soñaste!"
    - Hashtag: #ColeccionáMomentosNoCosas
    - CTA "Comenzá tu aventura"

11. **Footer** (`src/components/Footer.jsx`)
    - 4 columnas: Logo, Navegación, Contacto, Horarios
    - Botón "Volver arriba"
    - Links a redes sociales
    - Copyright dinámico

12. **StickyWhatsApp** (`src/components/StickyWhatsApp.jsx`)
    - Botón fijo en esquina inferior derecha
    - Aparece después de scroll (300px)
    - Animación de pulso
    - Tooltip "¡Consultanos!"

### Datos Editables

Todos los datos están centralizados en `src/data/`:

- **destinos.js**: Array de destinos con imagen, nombre, descripción, tipo
- **paquetes.js**: Array de paquetes con destino, fechas, precio, descripción, imagen
- **whyUs.js**: Array de razones con ícono, título, descripción
- **stats.js**: Array de estadísticas con número, sufijo, descripción
- **contactData.js**: Objeto con todos los datos de contacto y redes

### Integraciones

1. **EmailJS**
   - Service ID: `service_toursConAmigos`
   - Template ID: `template_35p3ez5`
   - Public Key: `BbIcmVASSvHgh-j8J`
   - Campos del template: from_name, from_email, phone, message, g-recaptcha-response

2. **reCAPTCHA v3**
   - Site Key: `6Ld_p2AsAAAAAA8sxDUk0RBmyFpKQIz0Hqu_plb1`
   - Integrado en el formulario de contacto
   - Ejecución automática al enviar

3. **Google Maps**
   - Embed del local en Pedro Zenteno 1436, Santa Fe
   - Responsive y con hover effect

4. **Instagram**
   - Embed del feed de @tourconamigos21
   - Fallback con link directo

### Estilos y Diseño

**Paleta de Colores:**
- Primary: `#1e5aa8` (azul fuerte del logo)
- Primary Dark: `#153f7a`
- Secondary: `#5ba8d8`
- Accent: `#8ec5e8`
- Grises y blancos

**Características:**
- Mobile-first design
- Sombras suaves (`--shadow-sm`, `--shadow-md`, `--shadow-lg`)
- Bordes redondeados (`--radius-sm`, `--radius-md`, `--radius-lg`)
- Transiciones suaves (`--transition: all 0.3s ease`)
- Scroll suave (`scroll-behavior: smooth`)

**Animaciones:**
- Hover en cards (translateY, scale, shadow)
- Contadores animados con IntersectionObserver
- Fade in en Hero
- Pulso en botón WhatsApp sticky
- Zoom en imágenes

### Responsive

**Breakpoints:**
- Desktop: >768px
- Mobile: ≤768px

**Adaptaciones:**
- Navbar con menú hamburguesa en móvil
- Grid de 2-3 columnas pasa a 1 columna
- Tamaños de fuente reducidos
- Espaciados optimizados
- Imágenes y embeds adaptables

## 📝 Próximos Pasos Recomendados

### Imágenes
1. Reemplazar las imágenes placeholder en `source/img/` con fotos reales de:
   - Destinos (Buenos Aires, Córdoba, Termas, Bariloche, etc.)
   - Paquetes destacados
   - Paisaje argentino para PreFooter

2. Optimizar imágenes:
   - Usar formato WebP para mejor performance
   - Tamaño máximo recomendado: 1920px de ancho
   - Compresión con herramientas como TinyPNG

### Contenido
1. Ajustar textos en `src/data/` según necesidad
2. Agregar más destinos o paquetes
3. Actualizar estadísticas (años, pasajeros, viajes)

### SEO
1. Agregar meta tags en `index.html`:
   ```html
   <meta name="keywords" content="turismo santa fe, viajes grupales, tours educativos">
   <meta property="og:title" content="Tours Con Amigos">
   <meta property="og:description" content="...">
   <meta property="og:image" content="/source/img/logo_trasparente_angulado.png">
   ```

2. Crear `robots.txt` y `sitemap.xml`

3. Agregar Google Analytics

### Performance
1. Lazy loading de imágenes
2. Code splitting si la app crece
3. Minificación de assets

### Testing
1. Probar formulario de contacto en diferentes navegadores
2. Verificar responsive en dispositivos reales
3. Test de velocidad con Lighthouse

### Deployment
1. Elegir plataforma (Vercel, Netlify, GitHub Pages)
2. Configurar dominio personalizado
3. Configurar SSL/HTTPS
4. Configurar redirects si aplica

## 🔧 Solución de Problemas

### EmailJS no funciona
- Verificar que las credenciales en `.env` sean correctas
- Revisar que el template en EmailJS tenga los campos correctos
- Verificar la consola del navegador para errores

### reCAPTCHA no carga
- Verificar que la Site Key sea correcta
- Revisar que el script esté en `index.html`
- Verificar dominio autorizado en Google reCAPTCHA Console

### Imágenes no se ven
- Verificar que las rutas empiecen con `/source/img/`
- Confirmar que los archivos existan en la carpeta
- Revisar permisos de archivos

### Estilos no se aplican
- Verificar imports en componentes
- Limpiar caché del navegador
- Revisar consola por errores de CSS

## 📦 Build y Deploy

### Build para producción:
```bash
npm run build
```

### Preview del build:
```bash
npm run preview
```

### Deploy en Vercel:
1. Instalar CLI: `npm i -g vercel`
2. Ejecutar: `vercel`
3. Seguir instrucciones

### Deploy en Netlify:
1. Drag & drop la carpeta `dist/` en Netlify
2. O conectar repo de GitHub

## 🎯 Funcionalidades Destacadas

✅ **Navbar con hover lift** - Logo con animación al pasar mouse
✅ **Scroll suave** - Navegación por anclas con smooth scroll
✅ **Contadores animados** - Incremento progresivo al entrar en viewport
✅ **Formulario funcional** - EmailJS + reCAPTCHA v3 integrado
✅ **WhatsApp sticky** - Botón flotante siempre visible
✅ **Datos editables** - Sin hardcode, todo desde archivos JS
✅ **100% responsive** - Optimizado para todos los dispositivos
✅ **Embeds integrados** - Instagram y Google Maps
✅ **Links clickeables** - Teléfono, email, dirección, redes

## 📞 Soporte

Si necesitas ayuda o personalizaciones adicionales, toda la estructura está lista para escalar y agregar nuevas secciones o funcionalidades.
