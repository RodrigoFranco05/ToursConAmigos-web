# Tours Con Amigos - Web Oficial

One-page moderna y minimalista para Tours Con Amigos, agencia de turismo de Santa Fe especializada en viajes grupales educativos y recreativos.

## 🚀 Tecnologías

- **React 18** + **Vite** - Framework y build tool
- **EmailJS** - Envío de formularios de contacto
- **reCAPTCHA v3** - Protección contra spam
- **React Icons** - Iconografía

## 📁 Estructura del Proyecto

```
ToursConAmigos-Web/
├── src/
│   ├── components/     # Componentes React
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── DestinosSection.jsx
│   │   ├── PaquetesSection.jsx
│   │   ├── WhyUs.jsx
│   │   ├── About.jsx
│   │   ├── InstagramEmbed.jsx
│   │   ├── Contact.jsx
│   │   ├── MapEmbed.jsx
│   │   ├── PreFooter.jsx
│   │   ├── Footer.jsx
│   │   └── StickyWhatsApp.jsx
│   ├── data/          # Datos editables
│   │   ├── destinos.js
│   │   ├── paquetes.js
│   │   ├── whyUs.js
│   │   ├── stats.js
│   │   └── contactData.js
│   ├── hooks/         # Custom hooks
│   │   └── useCounter.js
│   ├── styles/        # Estilos globales
│   │   └── global.css
│   ├── App.jsx
│   └── main.jsx
├── source/
│   └── img/           # Assets e imágenes
├── .env               # Variables de entorno
├── index.html
├── vite.config.js
└── package.json
```

## 🎨 Características

- ✅ Diseño one-page con scroll suave
- ✅ Navbar con logo hover y menú responsive
- ✅ Secciones: Hero, Destinos, Paquetes, Por qué elegirnos, Quiénes somos, Instagram, Contacto, Mapa
- ✅ Contadores animados (años, pasajeros, viajes)
- ✅ Formulario de contacto con EmailJS + reCAPTCHA v3
- ✅ Embeds de Instagram y Google Maps
- ✅ Botón sticky de WhatsApp
- ✅ 100% responsive (mobile, tablet, desktop)
- ✅ Datos editables desde archivos JS

## 🛠️ Instalación

1. **Clonar/Descargar el proyecto**

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Configurar variables de entorno:**
   
   El archivo `.env` ya está configurado con las credenciales correctas:
   - reCAPTCHA Site Key
   - EmailJS Service ID, Template ID y Public Key

4. **Iniciar servidor de desarrollo:**
   ```bash
   npm run dev
   ```

   La aplicación se abrirá en `http://localhost:3000`

5. **Build para producción:**
   ```bash
   npm run build
   ```

   Los archivos optimizados estarán en la carpeta `dist/`

## ✏️ Editar Contenido

### Destinos y Paquetes

Edita los archivos en `src/data/`:

- **`destinos.js`** - Cards de destinos (educativos/recreativos)
- **`paquetes.js`** - Paquetes destacados con fechas y precios
- **`whyUs.js`** - Razones "Por qué elegirnos"
- **`stats.js`** - Contadores animados (años, pasajeros, viajes)
- **`contactData.js`** - Datos de contacto (teléfono, email, dirección, horarios, redes)

### Agregar Imágenes

1. Coloca tus imágenes en `source/img/`
2. Actualiza las rutas en los archivos de datos correspondientes

### Cambiar Colores

Edita las variables CSS en `src/styles/global.css`:

```css
:root {
  --color-primary: #1e5aa8;
  --color-primary-dark: #153f7a;
  --color-secondary: #5ba8d8;
  /* ... */
}
```

## 📧 Configuración de EmailJS

El formulario ya está configurado. Si necesitas cambiar la configuración:

1. Ve a [EmailJS](https://www.emailjs.com/)
2. Crea/actualiza el template con estos campos:
   - `from_name` - Nombre del usuario
   - `from_email` - Email del usuario
   - `phone` - Teléfono (opcional)
   - `message` - Mensaje
   - `g-recaptcha-response` - Token de reCAPTCHA

3. Actualiza las variables en `.env` si es necesario

## 🔒 Seguridad

- reCAPTCHA v3 activo en el formulario
- Variables de entorno con prefijo `VITE_`
- Secret key de reCAPTCHA no expuesta en frontend

## 📱 Responsive

- Mobile first design
- Breakpoints optimizados
- Menú hamburguesa en móviles
- Imágenes y embeds adaptativos

## 🚀 Deployment

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Arrastra la carpeta dist/ a Netlify
```

### GitHub Pages
```bash
npm run build
# Sube la carpeta dist/ a la rama gh-pages
```

## 📞 Contacto

**Tours Con Amigos**
- 📍 Pedro Zenteno 1436, Santa Fe
- 📞 342 6520038
- 📱 342 5043239
- ✉️ info@tourconamigos.com.ar
- 🕒 Lunes a Viernes 12-18hs

## 📄 Licencia

© 2026 Tours Con Amigos. Todos los derechos reservados.
