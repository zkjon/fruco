# Guía: Cómo Agregar Contenido Legal

Esta guía explica cómo agregar contenido a las páginas legales del sitio web de Fruco.

## 📁 Ubicación de los Archivos

Los documentos legales se encuentran en:

```
src/content/legal/
├── es/  (Español)
├── en/  (Inglés)
├── fr/  (Francés)
└── pt/  (Portugués)
```

## 📝 Documentos Disponibles

Cada carpeta de idioma contiene 7 documentos:

1. `aviso-legal.md` - Aviso Legal
2. `politica-cookies.md` - Política de Cookies
3. `politica-privacidad.md` - Política de Privacidad
4. `politica-calidad.md` - Política de Calidad
5. `politica-confidencialidad.md` - Política de Confidencialidad y Propiedad Industrial e Intelectual
6. `canal-etico.md` - Canal Ético
7. `codigo-conducta.md` - Código de Conducta

## ✍️ Cómo Editar

### Paso 1: Abrir el Archivo

1. Navega a la carpeta del idioma que quieres editar (por ejemplo, `src/content/legal/es/`)
2. Abre el archivo `.md` correspondiente

### Paso 2: Agregar Contenido

Los archivos están en formato Markdown. Aquí tienes un ejemplo:

```markdown
# Aviso Legal

## 1. Información General

**FRUCO, S.A.** con domicilio en [dirección completa], con CIF [número],
es la propietaria del sitio web www.fruco.es.

## 2. Condiciones de Uso

El acceso y uso de este sitio web implica la aceptación de estas condiciones.

### 2.1 Propiedad Intelectual

Todos los contenidos de este sitio web, incluyendo textos, imágenes,
logotipos y marcas, son propiedad de FRUCO, S.A.

### 2.2 Uso Permitido

Los usuarios pueden:

- Navegar por el sitio
- Descargar información para uso personal
- Compartir enlaces en redes sociales

## 3. Responsabilidad

FRUCO, S.A. se esfuerza por mantener la información actualizada...

## 4. Contacto

Para cualquier consulta relacionada con este aviso legal:

- Email: legal@fruco.es
- Teléfono: 660 85 80 90
```

### Paso 3: Guardar

Simplemente guarda el archivo. Los cambios se reflejarán automáticamente la próxima vez que se compile el sitio.

## 🎨 Formato Markdown Soportado

### Títulos

```markdown
# Título Principal (H1)

## Título de Sección (H2)

### Título de Subsección (H3)
```

### Formato de Texto

```markdown
**Texto en negrita**
_Texto en cursiva_
```

### Párrafos

Simplemente escribe el texto. Los párrafos se separan con una línea en blanco.

```markdown
Este es un párrafo.

Este es otro párrafo.
```

### Listas

```markdown
- Item 1
- Item 2
- Item 3
```

## 🌐 URLs de las Páginas

Las páginas legales están disponibles en:

### Español

- `/legal/es/aviso-legal`
- `/legal/es/politica-cookies`
- `/legal/es/politica-privacidad`
- `/legal/es/politica-calidad`
- `/legal/es/politica-confidencialidad`
- `/legal/es/canal-etico`
- `/legal/es/codigo-conducta`

### Inglés, Francés y Portugués

Reemplaza `es` por `en`, `fr` o `pt` respectivamente.

## 🔗 Enlaces en el Footer

Los enlaces a estas páginas aparecen automáticamente en el footer de todas las páginas del sitio.
No necesitas hacer ninguna configuración adicional.

## 🧪 Probar los Cambios

### En Desarrollo

```bash
pnpm dev
```

Luego navega a `http://localhost:4321/legal/es/aviso-legal` (por ejemplo).

### Construir para Producción

```bash
pnpm build
```

## 💡 Consejos

1. **Sé consistente**: Usa el mismo estilo de formato en todos los documentos
2. **Actualiza todos los idiomas**: Cuando actualices un documento en español, recuerda actualizar las otras versiones
3. **Revisa el formato**: Previsualiza el documento después de editarlo
4. **Usa secciones claras**: Divide el contenido en secciones lógicas con títulos

## ⚠️ Notas Importantes

- Los comentarios HTML (`<!-- -->`) serán eliminados automáticamente al renderizar
- No uses HTML directamente - usa Markdown
- El sistema convierte automáticamente el Markdown a HTML con los estilos apropiados
- El estilo de la página (colores, fuentes) se aplica automáticamente

## 🆘 Soporte

Si tienes problemas o preguntas, consulta la documentación técnica en `docs/` o contacta al equipo de desarrollo.
