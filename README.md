# 📊 Portal de Reportes

Web privada para publicar reportes de Power BI con acceso por usuario y contraseña.

---

## 🗂️ Estructura de archivos

```
portal-reportes/
├── index.html          ← Página de login
├── dashboard.html      ← Panel principal con menú y reportes
├── netlify.toml        ← Configuración de Netlify
├── css/
│   └── styles.css      ← Estilos visuales
└── js/
    ├── reports.js      ← ⭐ AQUÍ agregas tus reportes
    └── app.js          ← Lógica de la aplicación
```

---

## 🚀 Guía de publicación paso a paso

### Paso 1 — Crear repositorio en GitHub

1. Ve a [github.com](https://github.com) e inicia sesión
2. Haz clic en el botón verde **"New"** (o el ícono "+")
3. Ponle nombre: `portal-reportes`
4. Déjalo en **Private** (privado) → es tu código
5. Haz clic en **"Create repository"**
6. En la página siguiente, haz clic en **"uploading an existing file"**
7. Arrastra **todos los archivos y carpetas** de esta carpeta → **Commit changes**

### Paso 2 — Publicar en Netlify

1. Ve a [netlify.com](https://netlify.com) y crea una cuenta gratuita (puedes entrar con tu cuenta de GitHub)
2. Haz clic en **"Add new site"** → **"Import an existing project"**
3. Selecciona **GitHub** → autoriza → elige el repo `portal-reportes`
4. Deja todo como está y haz clic en **"Deploy site"**
5. En 1-2 minutos tu web estará publicada con una URL como `https://nombre-aleatorio.netlify.app`

### Paso 3 — Activar login con usuario y contraseña

1. En el panel de Netlify, ve a **Site configuration** → **Identity**
2. Haz clic en **"Enable Identity"**
3. En **Registration preferences**, selecciona **"Invite only"** (solo tú invitas usuarios)
4. Ve a la sección **"Users"** → **"Invite users"**
5. Escribe el correo de cada persona del equipo → envía la invitación
6. Cada persona recibirá un email para crear su contraseña

### Paso 4 — Agregar tus reportes de Power BI

#### Obtener el link de Power BI:
1. En Power BI Service, abre el reporte que quieres publicar
2. Ve a **Archivo** → **Insertar informe** → **Publicar en la web (público)**
3. Copia el link del `<iframe>` que te genera (el valor del atributo `src`)

#### Agregar el link al portal:
1. Abre el archivo `js/reports.js`
2. Reemplaza `"https://app.powerbi.com/view?r=TU_LINK_AQUI"` con el link copiado
3. Guarda el archivo
4. En GitHub, sube el archivo actualizado (arrastra y suelta en la misma carpeta)
5. Netlify republica automáticamente en ~30 segundos

---

## ✏️ Cómo agregar categorías y reportes

Abre `js/reports.js` y edita el arreglo `REPORTS_DATA`:

```javascript
const REPORTS_DATA = [
  {
    category: "Ventas",        // ← Nombre de la categoría
    icon: "📊",                // ← Emoji del ícono
    reports: [
      {
        id: "ventas-mensual",          // ← ID único (sin espacios)
        name: "Ventas Mensual",        // ← Nombre que se verá en el menú
        url: "https://app.powerbi.com/view?r=PEGA_TU_LINK"  // ← Link de Power BI
      }
    ]
  }
];
```

---

## 🌐 Dominio personalizado (opcional, ~$12/año)

Si quieres usar una URL como `reportes.tuempresa.com`:

1. Compra un dominio en [Namecheap](https://namecheap.com) o [Google Domains](https://domains.google)
2. En Netlify → **Domain management** → **Add custom domain**
3. Sigue las instrucciones para apuntar el dominio a Netlify

---

## ❓ Preguntas frecuentes

**¿Es seguro?**
Sí. Netlify Identity usa JWT tokens estándar. Sin login, nadie puede ver el dashboard.

**¿Cuánto cuesta?**
El hosting en Netlify es **gratis** para este caso de uso. Solo pagarías si quieres un dominio personalizado (~$12/año).

**¿Qué pasa si alguien entra directo a `/dashboard.html`?**
Netlify Identity lo redirige al login automáticamente.

**¿Puedo tener usuarios con distintos accesos?**
La versión actual da el mismo acceso a todos los usuarios. Para accesos diferenciados por rol se necesitaría una versión más avanzada.
