// Modelo para la gestión de productos.
// Aquí se define la estructura y configuración para la tabla de productos en la base de datos.
// Puedes modificar la estructura, nombres de campos o lógica según la temática o cambios futuros en el proyecto.

import mongoose from "mongoose";

const productoSchema = new mongoose.Schema({
  nombre: { type: String, required: true, maxlength: 10 },
  codigo: { type: String, required: true, unique: true, maxlength: 20 },
  descripcion: { type: String, maxlength: 30 },
  categoria: { type: String, maxlength: 20 },
  precio: { type: Number },
  stock: { type: Number },
  fecha_ingreso: { type: Date },
  proveedor: { type: String, maxlength: 20 }
});

const Producto = mongoose.model("Producto", productoSchema);

export default Producto;