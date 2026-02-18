# Seguridad - Portfolio Cybersecurity

## Medidas implementadas

### 1. Enlaces externos (Tabnabbing)
- Todos los enlaces con `target="_blank"` incluyen `rel="noopener noreferrer"` para evitar que la página de destino pueda modificar la ventana original.

### 2. Credenciales EmailJS
- Las credenciales de EmailJS usan variables de entorno (`NEXT_PUBLIC_EMAILJS_*`).
- Archivo `.env.example` como plantilla (no incluir datos reales en el repositorio).
- Valores por defecto en código solo como fallback; configurar `.env.local` en producción.

### 3. Headers de seguridad (next.config.mjs)
- **X-Frame-Options: SAMEORIGIN** – Evita clickjacking.
- **X-Content-Type-Options: nosniff** – Evita MIME-sniffing.
- **Referrer-Policy: strict-origin-when-cross-origin** – Limita la información del referrer.
- **X-DNS-Prefetch-Control: on** – Optimiza prefetch DNS.

### 4. Formulario de contacto
- **Validación de longitud**: name (100), email (254), phone (20), message (2000 caracteres).
- **autocomplete** en campos para mejor UX y patrones de autocompletado seguros.
- Validación `required` en campos obligatorios.

### 5. Dependencias
- Ejecutado `npm audit fix` para corregir vulnerabilidades conocidas.
- Next.js actualizado a la última versión disponible en el rango definido.

## Recomendaciones adicionales

1. **Variables de entorno en producción**
   - Crear `.env.local` (o configurar en Vercel/Netlify) con:
     - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
     - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
     - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`

2. **EmailJS**
   - La Public Key es de uso público por diseño.
   - Configurar restricciones de dominio en el dashboard de EmailJS si es posible.
   - Revisar límites de envío para reducir abuso del formulario.

3. **Deployment**
   - Usar HTTPS en producción.
   - Revisar la documentación del proveedor de hosting para headers de seguridad adicionales.

4. **Actualizaciones**
   - Ejecutar `npm audit` periódicamente.
   - Mantener `next`, `react` y dependencias actualizadas.
