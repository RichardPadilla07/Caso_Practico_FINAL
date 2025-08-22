// Modelo para la gestión de pedidos.
// Aquí se define la estructura y configuración para la tabla de pedidos en la base de datos.
// Puedes modificar la estructura, nombres de campos o lógica según la temática o cambios futuros en el proyecto.

import mongoose from "mongoose";

const pedidoSchema = new mongoose.Schema({
  codigo_pedido: { type: Number, required: true, unique: true },
  cedula_cliente: { type: Number, required: true },
  codigo_producto: { type: String, required: true, maxlength: 20 },
  cantidad: { type: Number, required: true, default: 1 }
});

const Pedido = mongoose.model("Pedido", pedidoSchema);

export default Pedido;