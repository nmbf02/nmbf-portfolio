# Portfolio de Nathaly Berroa

Portfolio profesional desarrollado con Next.js que muestra proyectos, habilidades y experiencia como desarrolladora Full Stack. El sitio incluye animaciones fluidas, modo oscuro/claro, y un diseño completamente responsive.

## 🚀 Características

- **Diseño Moderno y Responsive**: Interfaz adaptativa que se ve perfecta en todos los dispositivos
- **Modo Oscuro/Claro**: Soporte para temas claro, oscuro y sistema con persistencia
- **Animaciones Fluidas**: Transiciones y animaciones suaves usando Framer Motion
- **Sección de Proyectos**: Carrusel interactivo con Swiper mostrando proyectos destacados
- **Formulario de Contacto**: Integración con EmailJS para envío de mensajes
- **Estadísticas Dinámicas**: Contadores animados con React CountUp
- **Navegación Suave**: Scroll suave entre secciones con navbar fijo
- **Optimización de Imágenes**: Uso de Next.js Image para carga optimizada

## 🛠️ Tecnologías Utilizadas

### Frontend
- **Next.js 15.1.7** - Framework React con App Router
- **React 19.0.0** - Biblioteca de UI
- **Tailwind CSS 3.4.1** - Framework de estilos utility-first
- **Framer Motion 12.4.7** - Biblioteca de animaciones
- **Swiper 11.2.4** - Carrusel de proyectos
- **React Icons 5.5.0** - Iconos populares
- **Next Themes 0.4.4** - Gestión de temas

### Backend/Servicios
- **EmailJS 4.4.1** - Servicio de envío de emails desde el cliente

### Herramientas de Desarrollo
- **ESLint** - Linter para código JavaScript/TypeScript
- **PostCSS** - Procesador de CSS

## 📦 Instalación

### Prerrequisitos

- Node.js 18.x o superior
- npm, yarn, pnpm o bun

### Pasos de Instalación

1. **Clonar el repositorio**
   ```bash
   git clone <url-del-repositorio>
   cd nmbf-portfolio
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   # o
   yarn install
   # o
   pnpm install
   ```

3. **Configurar variables de entorno (opcional)**
   
   Si necesitas configurar EmailJS, crea un archivo `.env.local`:
   ```env
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=tu_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=tu_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=tu_public_key
   ```

4. **Ejecutar el servidor de desarrollo**
   ```bash
   npm run dev
   # o
   yarn dev
   # o
   pnpm dev
   ```

5. **Abrir en el navegador**
   
   Navega a [http://localhost:3000](http://localhost:3000)

## 🎯 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo en modo watch
- `npm run build` - Construye la aplicación para producción
- `npm run start` - Inicia el servidor de producción (requiere build previo)
- `npm run lint` - Ejecuta ESLint para verificar el código

## 📁 Estructura del Proyecto

```
nmbf-portfolio/
├── app/
│   ├── components/          # Componentes React reutilizables
│   │   ├── About.jsx        # Sección "Sobre mí"
│   │   ├── Contact.jsx      # Formulario de contacto
│   │   ├── Footer.jsx       # Pie de página
│   │   ├── Hero.jsx         # Sección principal/hero
│   │   ├── Navbar.js        # Barra de navegación
│   │   ├── Projects.jsx     # Carrusel de proyectos
│   │   ├── Skills.jsx       # Sección de habilidades
│   │   ├── Statistics.jsx   # Estadísticas animadas
│   │   └── ThemeToggle.jsx  # Toggle de tema
│   ├── layout.js            # Layout principal de la aplicación
│   ├── page.js              # Página principal
│   ├── providers.jsx        # Proveedores de contexto (Theme)
│   └── globals.css          # Estilos globales
├── public/                  # Archivos estáticos
│   ├── images/              # Imágenes del proyecto
│   ├── icons/               # Iconos de tecnologías
│   └── projects/            # Imágenes de proyectos
├── next.config.mjs          # Configuración de Next.js
├── tailwind.config.mjs      # Configuración de Tailwind CSS
├── postcss.config.mjs       # Configuración de PostCSS
└── package.json             # Dependencias y scripts
```

## 🎨 Componentes Principales

### Hero
Sección principal con presentación personal, enlaces a redes sociales y estadísticas. Incluye animaciones de entrada y soporte para modo oscuro.

### About
Sección que describe la experiencia y enfoque como desarrolladora, con gráfica SVG animada.

### Skills
Muestra las tecnologías y herramientas principales con iconos interactivos y animaciones hover.

### Projects
Carrusel de proyectos destacados con:
- Navegación y paginación
- Efectos hover 3D
- Enlaces a repositorios de GitHub
- Diseño responsive

### Contact
Formulario de contacto con:
- Integración con EmailJS
- Selección de tipo de proyecto
- Validación de campos
- Mensajes de éxito/error
- Enlaces a redes sociales

### Navbar
Barra de navegación fija con:
- Menú responsive
- Toggle de tema (claro/oscuro/sistema)
- Enlace al CV
- Scroll suave a secciones

## ⚙️ Configuración

### EmailJS

El formulario de contacto utiliza EmailJS. Para configurarlo:

1. Crea una cuenta en [EmailJS](https://www.emailjs.com/)
2. Configura un servicio de email
3. Crea una plantilla de email
4. Actualiza los valores en `app/components/Contact.jsx`:
   ```javascript
   const serviceID = "tu_service_id";
   const templateID = "tu_template_id";
   const publicKey = "tu_public_key";
   ```

### Personalización

- **Colores**: Edita `tailwind.config.mjs` para cambiar la paleta de colores
- **Contenido**: Modifica los componentes en `app/components/` para actualizar información
- **Proyectos**: Edita el array `projects` en `app/components/Projects.jsx`
- **Habilidades**: Modifica el array `topSkills` en `app/components/Skills.jsx`

## 🚀 Despliegue

### Vercel (Recomendado)

1. Conecta tu repositorio a [Vercel](https://vercel.com)
2. Vercel detectará automáticamente Next.js
3. Configura las variables de entorno si es necesario
4. Despliega con un clic

### Otros Proveedores

El proyecto puede desplegarse en cualquier plataforma que soporte Next.js:
- Netlify
- AWS Amplify
- Railway
- Digital Ocean

Para producción, ejecuta:
```bash
npm run build
npm run start
```

## 📝 Notas

- El proyecto utiliza Next.js 15 con App Router
- Las imágenes deben estar optimizadas y en formato WebP cuando sea posible
- El modo oscuro se persiste usando `localStorage`
- El formulario de contacto requiere configuración de EmailJS para funcionar

## 👤 Autor

**Nathaly Berroa**
- GitHub: [@nmbf02](https://github.com/nmbf02)
- LinkedIn: [nathalyberroa](https://www.linkedin.com/in/nathalyberroa/)
- Twitter: [@nmbf02](https://x.com/nmbf02)
- Instagram: [@nmbf02](https://www.instagram.com/nmbf02)

## 📄 Licencia

Este proyecto es privado y propiedad de Nathaly Berroa.

---

⭐ Si te gusta este proyecto, ¡no olvides darle una estrella!
