
<p align="center">
  <img src="./src/assets/images/svg/whereismymoney.svg" width="400" height="auto">
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Angular-21-dd0031?style=for-the-badge&logo=angular" alt="Angular 21">
  <img src="https://img.shields.io/badge/Material-21-3f51b5?style=for-the-badge&logo=material-design" alt="Material 21">
  <img src="https://img.shields.io/badge/TypeScript-5.x-3178c6?style=for-the-badge&logo=typescript" alt="TypeScript">
  <img src="https://img.shields.io/badge/SCSS-Styling-cc6699?style=for-the-badge&logo=sass" alt="SCSS">
</p>

<p align="center">
  <strong>Aplicación de gestión financiera personal</strong><br>
  Controla tus ingresos, gastos y mantén tus finanzas organizadas
</p>

---

## 📋 Descripción

**WhereIsMyMoney** es una aplicación web moderna para la gestión de finanzas personales, desarrollada con Angular 21 y Angular Material 21. Permite a los usuarios llevar un control detallado de sus movimientos financieros.

## ✨ Características

- 🔐 **Autenticación** - Login y registro de usuarios
- 📊 **Dashboard** - Panel de control con resumen financiero
- 💵 **Balance** - Visualización de balance total
- 📈 **Ingresos** - Registro y seguimiento de ingresos
- 📉 **Gastos** - Control de gastos por categorías
- 📱 **Responsive** - Diseño adaptable a cualquier dispositivo

## 🎨 Paleta de Colores

| Color                                                        | Hex       | Uso          |
| ------------------------------------------------------------ | --------- | ------------ |
| ![#022b3a](https://via.placeholder.com/15/022b3a/022b3a.png) | `#022b3a` | Primary Dark |
| ![#1F7A8C](https://via.placeholder.com/15/1F7A8C/1F7A8C.png) | `#1F7A8C` | Primary      |
| ![#BFDBF7](https://via.placeholder.com/15/BFDBF7/BFDBF7.png) | `#BFDBF7` | Secondary    |
| ![#E1E5F2](https://via.placeholder.com/15/E1E5F2/E1E5F2.png) | `#E1E5F2` | Background   |
| ![#FFFFFF](https://via.placeholder.com/15/FFFFFF/FFFFFF.png) | `#FFFFFF` | White        |

## 🚀 Inicio Rápido

### Prerrequisitos

- Node.js 20+
- npm 10+
- Angular CLI 21

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/whereismymoney.git

# Entrar al directorio
cd whereismymoney-app

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
ng serve
```

Abre tu navegador en `http://localhost:4200/`

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── pages/
│   │   ├── login/           # Página de inicio de sesión
│   │   ├── register/        # Página de registro
│   │   └── dashboard/       # Panel principal
│   ├── app.routes.ts        # Configuración de rutas
│   ├── app.config.ts        # Configuración de la app
│   └── app.ts               # Componente raíz
├── styles.scss              # Estilos globales y tema
└── index.html               # HTML principal
```

## 🛠️ Scripts Disponibles

| Comando    | Descripción                         |
| ---------- | ----------------------------------- |
| `ng serve` | Inicia el servidor de desarrollo    |
| `ng build` | Compila el proyecto para producción |
| `ng test`  | Ejecuta pruebas unitarias           |
| `ng lint`  | Analiza el código                   |

## 🔧 Tecnologías

- **Framework**: Angular 21
- **UI Components**: Angular Material 21
- **Estilos**: SCSS
- **Lenguaje**: TypeScript
- **SSR**: Angular Universal

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

---

<p align="center">
  Hecho con ❤️ usando Angular
</p>
