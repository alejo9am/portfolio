# Guía de mantenimiento del portafolio

Este documento es una referencia personal para actualizar contenido del portafolio de forma rápida y segura.

## Objetivo

Mantener el contenido editable desde GitHub sin tocar componentes Astro, usando archivos Markdown.

## Dónde se edita cada sección

- Experiencia profesional: `src/content/experience/*.md`
- Proyectos: `src/content/work/*.md`

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
description: |
  Descripción de la experiencia.
---
```

Reglas:
- `date` debe ir entre comillas para que sea string.
- `order` define el orden visual (menor número aparece antes).

## Editar una experiencia existente

1. Abrir el archivo correspondiente en `src/content/experience/`.
2. Modificar campos del frontmatter.
3. Hacer commit y push a `main`.

## Añadir o editar proyectos

Usar `src/content/work/*.md` con el mismo formato actual de cada proyecto (`title`, `description`, `publishDate`, `tags`, `img`, etc.).

## Verificación antes de publicar

En local, ejecutar:

```bash
npm install
npm run build
```

Si el build compila, el contenido está válido para despliegue.
