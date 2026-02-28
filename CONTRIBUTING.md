# Guía de mantenimiento del portafolio

Este documento es una referencia personal para actualizar contenido del portafolio de forma rápida y segura.

## Objetivo

Mantener el contenido editable desde GitHub sin tocar componentes Astro, usando archivos Markdown.

## Dónde se edita cada sección

- Experiencia profesional: `src/content/experience/*.md`
- Proyectos: `src/content/proyects/*.md`

## Añadir una nueva experiencia

1. Crear un archivo `.md` dentro de `src/content/experience/`.
2. Usar este frontmatter:

```md
---
title: Título del puesto
company: Nombre de la empresa
link: https://empresa.com
date: "2024 - Presente"
order: 3
description: Descripción redactada en un único párrafo.
technologies:
  - name: Python
    icon: python
  - name: Flask
    icon: flask-light
    iconDark: flask-dark
---
```

Reglas:
- `date` debe ir entre comillas para que sea string.
- `order` define el orden visual (menor número aparece antes).
- `description` usa redacción narrativa (sin listas).
- En `technologies`, `iconDark` solo es necesario si existe versión dark.

## Editar una experiencia existente

1. Abrir el archivo correspondiente en `src/content/experience/`.
2. Modificar campos del frontmatter.
3. Hacer commit y push a `main`.

## Añadir o editar proyectos

Usar `src/content/proyects/*.md` con el formato actual de cada proyecto (`title`, `description`, `publishDate`, `tags`, `img`, etc.).

Reglas para `tags`:
- Si la etiqueta coincide con una tecnología mapeada (ej. `PHP`, `MySQL`, `MongoDB`, `Express.js`, `Vercel`, `Figma`), se muestra con icono.
- Si no coincide, se muestra como tag conceptual sin icono en una línea separada.

## Verificación antes de publicar

En local, ejecutar:

```bash
npm install
npm run build
```

Si el build compila, el contenido está válido para despliegue.
