# Assets

Esta carpeta contiene los recursos estáticos de la aplicación.

## Estructura

```
assets/
├── images/     # Imágenes (logos, backgrounds, etc.)
├── icons/      # Iconos personalizados
└── fonts/      # Fuentes tipográficas
```

## Uso

Para referenciar assets en tu código:

```html
<!-- En HTML -->
<img src="assets/images/logo.png" alt="Logo">
```

```scss
// En SCSS
background-image: url('/assets/images/background.jpg');
```

```typescript
// En TypeScript
const logoUrl = 'assets/images/logo.png';
```
