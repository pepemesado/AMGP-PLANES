# AMGP PLANES - Vehículos de Lujo Premium

Landing page premium para importación y compraventa de vehículos de lujo de Europa. Built with **Next.js 14**, **Tailwind CSS**, **Framer Motion**, y **Supabase**.

## 🎯 Características

- **Premium Design**: Paleta de colores elegante (granate, plata, negro) inspirada en marcas de lujo (Porsche, Mercedes-Benz, Brabus)
- **Responsive**: Totalmente responsivo en móvil, tablet y desktop
- **Animaciones**: Animaciones suaves con Framer Motion
- **CMS Conectado**: Integración con Supabase para gestionar vehículos y leads
- **Formulario de Contacto**: Captura de leads directamente en la base de datos
- **Deploy Ready**: Configurado para deployment en Netlify con GitHub

## 🚀 Stack Tecnológico

- **Frontend**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS 4 con colores custom
- **Tipografía**: Playfair Display (títulos) + Inter (cuerpo)
- **Animaciones**: Framer Motion
- **Backend**: Supabase (PostgreSQL)
- **Iconos**: Lucide React
- **Hosting**: Netlify
- **Versionado**: GitHub

## 📋 Requisitos Previos

- Node.js 18+ 
- npm o yarn
- Cuenta en Supabase (gratuita)
- Cuenta en Netlify (gratuita)
- Repositorio en GitHub

## 🔧 Instalación Local

### 1. Clonar el Repositorio

```bash
git clone https://github.com/pepemesado/AMGP-PLANES.git
cd AMGP-PLANES
```

### 2. Instalar Dependencias

```bash
npm install
```

### 3. Configurar Variables de Entorno

Copiar `.env.local.example` a `.env.local` y completar con tus credenciales:

```bash
cp .env.local.example .env.local
```

Editar `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=https://qzqzcykerlzlcmquijvq.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
```

### 4. Crear Tablas en Supabase

En el SQL Editor de tu proyecto Supabase, ejecutar:

```sql
-- Tabla de Vehículos
CREATE TABLE vehicles (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  brand text NOT NULL,
  model text NOT NULL,
  year integer,
  price numeric,
  km integer,
  image_url text,
  available boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

-- Tabla de Leads (Solicitudes de Contacto)
CREATE TABLE leads (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  nombre text NOT NULL,
  email text NOT NULL,
  telefono text,
  vehiculo text,
  mensaje text,
  created_at timestamptz DEFAULT now()
);

-- Índices para mejor rendimiento
CREATE INDEX idx_vehicles_available ON vehicles(available);
CREATE INDEX idx_leads_created_at ON leads(created_at DESC);
```

### 5. Ejecutar Localmente

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:3000`

## 📱 Estructura de Carpetas

```
AMGP-PLANES/
├── app/
│   ├── layout.tsx          # Layout principal con fuentes Google
│   ├── page.tsx            # Página de inicio
│   └── globals.css         # Estilos globales
├── components/
│   └── sections/
│       ├── Navbar.tsx      # Navegación
│       ├── Hero.tsx        # Sección hero
│       ├── Services.tsx    # Servicios ofrecidos
│       ├── WhyUs.tsx       # Por qué elegirnos
│       ├── Catalog.tsx     # Catálogo de vehículos
│       ├── About.tsx       # Información sobre nosotros
│       ├── Contact.tsx     # Formulario de contacto
│       └── Footer.tsx      # Pie de página
├── lib/
│   ├── supabase.ts         # Cliente Supabase
│   └── database.types.ts   # Tipos TypeScript
├── public/                 # Assets estáticos
├── tailwind.config.ts      # Configuración de Tailwind
├── tsconfig.json           # Configuración de TypeScript
├── .env.local.example      # Variables de entorno (ejemplo)
├── netlify.toml            # Configuración Netlify
└── package.json            # Dependencias
```

## 🎨 Sistema de Diseño

### Colores Brand

- **brand-black**: `#0A0A0A` - Fondo principal
- **brand-carbon**: `#111111` - Secciones alternas
- **brand-garnet**: `#8B0000` - Color primario (granate)
- **brand-garnet-light**: `#A50000` - Hover garante
- **brand-silver**: `#C0C0C0` - Texto secundario
- **brand-silver-light**: `#E8E8E8` - Texto hover
- **brand-white**: `#F5F5F5` - Texto primario

### Tipografía

- **Playfair Display**: Títulos (h1, h2, h3)
- **Inter**: Cuerpo de texto y botones

## 📊 Base de Datos

### Tabla: vehicles
| Campo | Tipo | Descripción |
|-------|------|-------------|
| id | uuid | Identificador único |
| brand | text | Marca del vehículo |
| model | text | Modelo |
| year | integer | Año de fabricación |
| price | numeric | Precio en EUR |
| km | integer | Kilómetros |
| image_url | text | URL de la imagen |
| available | boolean | Disponibilidad |
| created_at | timestamptz | Fecha de creación |

### Tabla: leads
| Campo | Tipo | Descripción |
|-------|------|-------------|
| id | uuid | Identificador único |
| nombre | text | Nombre del contacto |
| email | text | Email |
| telefono | text | Teléfono |
| vehiculo | text | Tipo de vehículo buscado |
| mensaje | text | Mensaje |
| created_at | timestamptz | Fecha de creación |

## 🚀 Deploy en Netlify

### Opción 1: Deploy Automático (Recomendado)

1. **Pushear a GitHub**:
   ```bash
   git add .
   git commit -m "feat: initial AMGP PLANES landing page"
   git push origin main
   ```

2. **Conectar con Netlify**:
   - Ir a [app.netlify.com](https://app.netlify.com)
   - Click en "New site from Git"
   - Seleccionar GitHub y el repositorio `AMGP-PLANES`
   - Permitir acceso
   - Configuración automática detectará `netlify.toml`
   - Click "Deploy"

3. **Agregar Variables de Entorno en Netlify**:
   - En la configuración del sitio → "Build & deploy" → "Environment"
   - Agregar:
     ```
     NEXT_PUBLIC_SUPABASE_URL=https://qzqzcykerlzlcmquijvq.supabase.co
     NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
     ```

4. **Redeploy**: El sitio se construirá automáticamente

### Opción 2: Deploy Manual

```bash
npm run build
# Subir carpeta .next a Netlify
```

## 📧 Configuración de Email

Para notificaciones de leads, configura webhooks en Supabase:

1. En Supabase → Database → Webhooks
2. Crear webhook en tabla `leads` con evento `INSERT`
3. Enviar a tu servicio de email (SendGrid, Resend, etc.)

## 🔐 Seguridad

- **RLS (Row Level Security)**: Configurar en Supabase para proteger datos
- **CORS**: Validado automáticamente por Supabase
- **Validación**: Validar inputs en el servidor (próxima versión)

## 📈 Próximas Mejoras

- [ ] Detalle de vehículo individual
- [ ] Filtros avanzados en catálogo
- [ ] Galería de imágenes por vehículo
- [ ] Sistema de favoritos
- [ ] Dashboard admin
- [ ] Notificaciones por email
- [ ] Multi-idioma (ES/EN)

## 📝 Licencia

Todos los derechos reservados © 2025 AMGP PLANES

## 👤 Autor

Created with ❤️ for AMGP PLANES
