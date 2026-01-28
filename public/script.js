// public/script.js

// Esperamos a que todo el HTML cargue antes de ejecutar el código
document.addEventListener('DOMContentLoaded', () => {
    // 1. Al cargar la página, pedimos al servidor los comentarios existentes
    cargarComentarios();
    
    // 2. Configuramos el botón de enviar
    configurarFormulario();
});

/**
 * FUNCIÓN 1: OBTENER DATOS (GET)
 * Pide la lista de comentarios al backend y la muestra en pantalla.
 */
function cargarComentarios() {
    // Usamos 'fetch' para llamar a la ruta que definimos en index.js
    fetch('/api/comentarios')
        .then(response => response.json()) // Convertimos la respuesta cruda a JSON
        .then(data => {
            // 'data' ahora es el array de comentarios que viene del servidor
            console.log("Datos recibidos del servidor:", data);
            mostrarEnPantalla(data);
        })
        .catch(error => console.error('Error al cargar comentarios:', error));
}

/**
 * FUNCIÓN 2: MOSTRAR EN HTML (DOM Manipulation)
 * Recibe el array de datos y crea los elementos <li>
 */
function mostrarEnPantalla(listaDeDatos) {
    const contenedor = document.getElementById('lista-comentarios');
    
    // Limpiamos la lista actual para no duplicar datos al recargar
    contenedor.innerHTML = '';

    // Si no hay datos, mostramos un mensaje
    if (listaDeDatos.length === 0) {
        contenedor.innerHTML = '<li>No hay consultas aún.</li>';
        return;
    }

    // Recorremos cada comentario y creamos su HTML
    listaDeDatos.forEach(item => {
        // Creamos un elemento <li>
        const elementoLista = document.createElement('li');
        
        // Insertamos el contenido (Nombre, Mensaje, Fecha)
        elementoLista.innerHTML = `
            <div style="border-bottom: 1px solid #ccc; padding: 10px; margin-bottom: 5px;">
                <strong>${item.nombre}</strong> <small>(${item.fecha})</small>
                <p>${item.mensaje}</p>
            </div>
        `;
        
        // Agregamos el elemento a la lista en el HTML
        contenedor.appendChild(elementoLista);
    });
}

/**
 * FUNCIÓN 3: ENVIAR DATOS (POST)
 * Captura el evento submit, empaqueta los datos y los envía.
 */
function configurarFormulario() {
    const formulario = document.getElementById('form-comentarios');

    formulario.addEventListener('submit', (evento) => {
        // IMPORTANTE: Evitamos que la página se recargue (comportamiento por defecto)
        evento.preventDefault();

        // 1. Capturamos lo que escribió el usuario
        const nombreInput = document.getElementById('nombre');
        const mensajeInput = document.getElementById('mensaje');

        const nuevoComentario = {
            nombre: nombreInput.value,
            mensaje: mensajeInput.value
        };

        // 2. Enviamos los datos al backend usando POST
        fetch('/api/comentarios', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' // Avisamos que enviamos JSON
            },
            body: JSON.stringify(nuevoComentario) // Convertimos el objeto JS a texto JSON
        })
        .then(response => response.json())
        .then(respuestaServidor => {
            console.log("Respuesta del servidor:", respuestaServidor);
            
            // 3. Si todo salió bien:
            // a) Limpiamos el formulario
            nombreInput.value = '';
            mensajeInput.value = '';
            
            // b) Volvemos a cargar la lista para ver el nuevo mensaje
            cargarComentarios(); 
        })
        .catch(error => {
            console.error('Error al enviar:', error);
            alert('Error al conectar con el servidor.');
        });
    });
}