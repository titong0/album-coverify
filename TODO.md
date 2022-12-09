## MIGRATION

### Typescript

Create types for all editors

### Other

Create general inputs for

- Fixed Position Image: it needs defaultSrc, src, setSrc
- Image: it needs defaultSrc, src, setSrc. accepts: x, y, size
- Text: should have name, label, color, setValue and value

Create general Functions

- DrawFixedImage: needs only src
- DrawImage: needs params for src. accepts: width, height, x and y
- DrawText: needs params for: font, color, content

change all editors to use controlled inputs

## What it should look like

- Entry Point - pages/album-abbr.tsx
- Editor - Components/\*\*Editor.tsx
