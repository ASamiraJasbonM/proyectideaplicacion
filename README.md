# 🧬 Portafolio de Ingeniería Biomédica - Adriana Jasbón Mutis

> Proyecto de desarrollo web Full Stack para la presentación de servicios de ingeniería biomédica, análisis ergonómico y soluciones de software en salud.

## 📋 Descripción del Proyecto

Este proyecto web tiene como objetivo demostrar habilidades fundamentales en desarrollo web (Frontend y Backend). La aplicación simula el sitio web profesional de una **Ingeniera Biomédica**, ofreciendo servicios especializados como:
*   Análisis ergonómico y biomecánico.
*   Desarrollo de software para gestión de salud y cuidado de adultos mayores.
*   Implementación de modelos de Inteligencia Artificial en medicina.

La aplicación permite a los usuarios visualizar el portafolio de servicios y **enviar consultas en tiempo real** mediante un formulario interactivo que almacena la información en una base de datos persistente.

## 🛠️ Tecnologías Utilizadas

### Frontend (Interfaz de Usuario)
*   **HTML5 Semántico:** Estructura limpia y accesible.
*   **CSS3:** Diseño personalizado con tema "Dark Medical" (Azul oscuro/Cian), responsive design (adaptable a móviles) y CSS Grid para la galería.
*   **JavaScript (Vanilla):** Manejo del DOM y comunicación asíncrona (`fetch`) con el backend.

### Backend (Servidor y Datos)
*   **Node.js:** Entorno de ejecución.
*   **Express.js:** Framework para el servidor web y manejo de rutas API.
*   **SQLite:** Base de datos relacional ligera y sin servidor para la persistencia de los comentarios.

---

## 🚀 Instrucciones de Instalación y Ejecución

Para probar este proyecto en un entorno local (tu computadora), sigue estos pasos:

1.  **Clonar o Descargar el proyecto:**
    Asegúrate de tener los archivos en una carpeta local.

2.  **Instalar dependencias:**
    Abre una terminal en la carpeta del proyecto y ejecuta:
    ```bash
    npm install
    ```
    *(Esto instalará `express` y `sqlite3`).*

3.  **Iniciar el Servidor:**
    Ejecuta el siguiente comando:
    ```bash
    node index.js
    ```
    Deberías ver el mensaje:
    > `Conexión exitosa a la Base de Datos SQLite.`
    > `Sistema de Gestión Biomédica online en: http://localhost:3000`

4.  **Abrir en el Navegador:**
    Visita `http://localhost:3000` en tu navegador de preferencia.

---

## 📂 Estructura del Proyecto

```text
portafolio-biomedica/
├── public/                 # Archivos accesibles por el navegador
│   ├── index.html          # Página principal
│   ├── style.css           # Estilos visuales
│   └── script.js           # Lógica del cliente (Frontend)
├── index.js                # Lógica del servidor y Base de Datos (Backend)
├── biomedica.db            # Archivo de Base de Datos (se crea automáticamente)
├── package.json            # Configuración de dependencias
└── README.md               # Documentación del proyecto

# 2. Añadir archivos importantes
git add .gitignore index.js package.json package-lock.json public/

# 3. Hacer commit
git commit -m "Configuración inicial del proyecto"

# 4. Subir a GitHub
git push origin main
