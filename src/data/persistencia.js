import { writeFileSync, readFileSync } from 'fs';

// Datos que deseas guardar
const datos = { producto: 'Nombre del producto', cantidad: 3 };

// Convertir a formato de cadena (puedes elegir otros formatos)
const datosString = JSON.stringify(datos);

// Ruta del archivo
const rutaArchivo = './miArchivo.txt';

// Escribir en el archivo
writeFileSync(rutaArchivo, datosString);

// Leer desde el archivo
const datosLeidos = readFileSync(rutaArchivo, 'utf-8');

// Convertir la cadena a objeto
const datosRecuperados = JSON.parse(datosLeidos);

console.log('Datos recuperados:', datosRecuperados);
