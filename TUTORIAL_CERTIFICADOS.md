# 📜 Tutorial: Cómo Subir y Gestionar Certificados

## 🎯 Objetivo
Este tutorial te guiará paso a paso para añadir, editar y gestionar tus certificados en la sección de certificaciones del portafolio.

## 📁 Estructura de Archivos

### Ubicación de Imágenes
```
public/
├── projects/           # Imágenes de proyectos
│   ├── project1.png
│   ├── project2.png
│   └── project3.png
└── certifications/     # 📁 CREAR ESTA CARPETA
    ├── certificate1.jpg
    ├── certificate2.png
    └── certificate3.pdf
```

### Archivo de Configuración
```
src/components/CertificationsSection.jsx
```

## 🔧 Paso a Paso

### 1. **Preparar las Imágenes de Certificados**

#### Formatos Recomendados:
- **JPG/JPEG**: Para certificados escaneados
- **PNG**: Para certificados con transparencia
- **PDF**: Para certificados en formato original

#### Tamaños Recomendados:
- **Ancho**: 800-1200px
- **Alto**: 600-900px
- **Peso**: Máximo 2MB por imagen

#### Nombres de Archivo:
```bash
# Usar nombres descriptivos y sin espacios
✅ aws-cloud-practitioner.jpg
✅ google-analytics-certified.png
✅ cisco-networking-fundamentals.jpg

# Evitar
❌ certificado 1.jpg
❌ mi certificado.PNG
❌ cert!@#.jpg
```

### 2. **Subir Imágenes al Proyecto**

```bash
# 1. Crear carpeta de certificaciones
mkdir public/certifications

# 2. Copiar tus certificados
# Arrastra y suelta los archivos a: public/certifications/
```

### 3. **Editar el Archivo de Certificaciones**

Abre: `src/components/CertificationsSection.jsx`

Busca la sección `certifications` (alrededor de la línea 8):

```jsx
const certifications = [
    {
        id: "cert-1",                                     // 📝 EDITAR: ID único (formato: "cert-X")
        title: "AWS Cloud Practitioner",                 // 📝 EDITAR: Nombre del certificado
        issuer: "Amazon Web Services",                   // 📝 EDITAR: Quien lo emitió
        date: "2024-03-15",                             // 📝 EDITAR: Fecha (YYYY-MM-DD)
        verificationUrl: "https://aws.amazon.com/...",  // 📝 EDITAR: URL de verificación
        image: "/certifications/aws-cert.jpg",          // 📝 EDITAR: Ruta de la imagen
        skills: ["AWS", "Cloud Computing", "S3"],       // 📝 EDITAR: Habilidades relacionadas
        status: "verified",                              // 📝 EDITAR: "verified" o "pending"
        type: "certification",                           // 📝 EDITAR: "certification" o "course"
        description: "Certificación fundamental...",     // 📝 EDITAR: Descripción detallada
        credentialId: "AWS-CCP-2024-001"               // 📝 EDITAR: ID del credential
    },
    // Añadir más certificados aquí...
];
```

### 4. **Plantilla para Nuevo Certificado**

Copia y pega este código para añadir un nuevo certificado:

```jsx
{
    id: "cert-X", // 🔢 CAMBIAR X por el siguiente número
    title: "NOMBRE_DEL_CERTIFICADO",
    issuer: "INSTITUCIÓN_QUE_LO_EMITIÓ",
    date: "YYYY-MM-DD", // Formato de fecha completo
    verificationUrl: "https://link-de-verificacion.com", // URL real de verificación
    image: "/certifications/NOMBRE_ARCHIVO.jpg", // 📁 Debe existir en public/certifications/
    skills: ["Habilidad1", "Habilidad2", "Habilidad3"],
    status: "verified", // "verified" o "pending"
    type: "certification", // "certification" o "course"
    description: "Descripción detallada de lo que cubre este certificado y por qué es relevante para tu perfil profesional.",
    credentialId: "ID_UNICO_DEL_CERTIFICADO"
},
```

## 📝 Ejemplos Completos

### Ejemplo 1: Certificado de AWS
```jsx
{
    id: "cert-1",
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2024-03-15",
    verificationUrl: "https://aws.amazon.com/verification/ABC123",
    image: "/certifications/aws-cloud-practitioner.jpg",
    skills: ["Cloud Computing", "AWS Services", "Security", "EC2", "S3"],
    status: "verified",
    type: "certification",
    description: "Certificación fundamental de AWS que valida el conocimiento general de la nube de AWS, incluyendo servicios principales, seguridad y arquitectura.",
    credentialId: "AWS-CCP-2024-001"
},
```

### Ejemplo 2: Certificado de Google
```jsx
{
    id: "cert-2",
    title: "Google Analytics Individual Qualification",
    issuer: "Google",
    date: "2023-09-20",
    verificationUrl: "https://skillshop.exceedlms.com/profiles/verification",
    image: "/certifications/google-analytics-iq.png",
    skills: ["Google Analytics", "Data Analysis", "Web Analytics", "Digital Marketing"],
    status: "verified",
    type: "certification",
    description: "Certificación que valida el dominio de Google Analytics para el análisis de datos web y comprensión del comportamiento del usuario.",
    credentialId: "GOOGLE-GA-2023-045"
},
```

### Ejemplo 3: Certificado Académico
```jsx
{
    id: "cert-3",
    title: "Diplomado en Desarrollo Web Full Stack",
    issuer: "Universidad XYZ",
    date: "2023-12-15",
    verificationUrl: "https://universidad-xyz.edu/verificacion/diploma-123",
    image: "/certifications/diplomado-fullstack.jpg",
    skills: ["React", "Node.js", "JavaScript", "MongoDB", "Express.js"],
    status: "verified",
    type: "course",
    description: "Programa intensivo de 6 meses cubriendo desarrollo frontend y backend con tecnologías modernas como React, Node.js y bases de datos.",
    credentialId: "UXY-DFS-2023-078"
},
```

## 🛠️ Guía de Edición Rápida

### Añadir Certificado:
1. Subir imagen a `public/certifications/`
2. Copiar plantilla en `CertificationsSection.jsx`
3. Editar todos los campos marcados con 📝
4. Incrementar el `id`
5. Guardar archivo

### Editar Certificado Existente:
1. Buscar por `title` o `id`
2. Modificar los campos necesarios
3. Guardar archivo

### Eliminar Certificado:
1. Buscar el certificado por `id`
2. Eliminar todo el objeto `{ id: X, ... },`
3. Opcional: eliminar imagen de `public/certifications/`

## 🎨 Personalización Visual

### Cambiar Colores del Badge:
En el archivo `CertificationsSection.jsx`, busca las clases CSS:

```jsx
// Línea ~275 aproximadamente
<span className="px-2 py-1 bg-primary/20 text-primary rounded-full text-sm">
    {skill}
</span>
```

**Opciones de color:**
- `bg-primary/20 text-primary` - Azul (por defecto)
- `bg-green-500/20 text-green-700` - Verde
- `bg-purple-500/20 text-purple-700` - Morado
- `bg-orange-500/20 text-orange-700` - Naranja

## 🚀 Después de Editar

### 1. Verificar Cambios:
```bash
npm run dev
```
Visita: http://localhost:5173/#certifications

### 2. Probar la Funcionalidad:
- ✅ Las imágenes cargan correctamente
- ✅ Los modales se abren al hacer clic
- ✅ La información se muestra completa
- ✅ Los filtros funcionan (si los hay)

### 3. Compilar para Producción:
```bash
npm run build
```

## 📋 Checklist Final

### Antes de Subir a Producción:
- [ ] Todas las imágenes están en `public/certifications/`
- [ ] Los nombres de archivo coinciden con las rutas en el código
- [ ] No hay errores de compilación (`npm run build`)
- [ ] Las imágenes son de tamaño apropiado (< 2MB)
- [ ] La información es precisa y actualizada
- [ ] Los enlaces de verificación funcionan (si los hay)

## 🆘 Solución de Problemas

### Imagen no se muestra:
1. ✅ Verificar que el archivo existe en `public/certifications/`
2. ✅ Verificar que el nombre del archivo coincide exactamente
3. ✅ Verificar que la ruta empieza con `/certifications/`

### Error de compilación:
1. ✅ Verificar que no faltan comas (`,`) entre certificados
2. ✅ Verificar que los strings están entre comillas (`"`)
3. ✅ Verificar que los arrays de skills están bien cerrados (`[]`)

### Certificado no aparece:
1. ✅ Verificar que el `id` es único
2. ✅ Verificar que el objeto está dentro del array `certifications`
3. ✅ Verificar que el archivo se guardó correctamente

## 📞 Contacto de Soporte

Si tienes problemas con este tutorial, revisa:
1. La consola del navegador (F12) para errores
2. La terminal donde ejecutas `npm run dev` para errores de compilación
3. El archivo `CLEANUP_REPORT.md` para información adicional del proyecto

---

💡 **Tip**: Guarda una copia de respaldo de `CertificationsSection.jsx` antes de hacer cambios importantes.
