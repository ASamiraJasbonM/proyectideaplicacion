// index.js - Servidor Backend Profesional con SQLite
const express = require('express');
const sqlite3 = require('sqlite3').verbose(); // Importamos el driver de BD
const path = require('path');

const app = express();
const port = 3000;

// Middleware para JSON y archivos estáticos
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// --- CONEXIÓN A BASE DE DATOS (Persistencia) ---

// 1. Conectamos (creará el archivo 'biomedica.db' automáticamente)
const db = new sqlite3.Database('./biomedica.db', (err) => {
    if (err) {
        console.error('Error crítico de BD:', err.message);
    } else {
        console.log('Conexión exitosa a la Base de Datos SQLite.');
    }
});

// 2. Inicialización: Crear tabla si no existe
db.run(`CREATE TABLE IF NOT EXISTS comentarios (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT,
    mensaje TEXT,
    fecha TEXT
)`, (err) => {
    if (err) {
        console.error("Error al crear tabla:", err);
    } else {
        // Opcional: Insertar un dato de prueba si la tabla está vacía
        // para que no se vea vacío al inicio.
        console.log("Tabla 'comentarios' verificada correctamente.");
    }
});

// --- RUTAS DE LA API ---

// GET: Leer desde la Base de Datos
app.get('/api/comentarios', (req, res) => {
    // SQL: Seleccionar todo ordenado por el más reciente (ID descendente)
    const sql = "SELECT * FROM comentarios ORDER BY id DESC";
    
    db.all(sql, [], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(rows); // Enviamos las filas encontradas al frontend
    });
});

// POST: Escribir en la Base de Datos
app.post('/api/comentarios', (req, res) => {
    const { nombre, mensaje } = req.body;
    const fecha = new Date().toLocaleDateString();

    // Validación
    if (!nombre || !mensaje) {
        return res.status(400).json({ error: "Faltan datos requeridos." });
    }

    // SQL Insert seguro (evita inyecciones usando '?')
    const sql = "INSERT INTO comentarios (nombre, mensaje, fecha) VALUES (?, ?, ?)";
    const params = [nombre, mensaje, fecha];

    db.run(sql, params, function(err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        
        console.log(`Nuevo registro guardado con ID: ${this.lastID}`);
        
        // Respondemos al frontend confirmando el guardado
        res.json({
            status: 'exito',
            data: {
                id: this.lastID,
                nombre,
                mensaje,
                fecha
            }
        });
    });
});

// Iniciar servidor
app.listen(port, () => {
    console.log(`Sistema de Gestión Biomédica online en: http://localhost:${port}`);
});