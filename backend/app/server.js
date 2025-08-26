import dotenv from "dotenv";
dotenv.config();
import express from "express";
import "./config/mongoDB.js";
import cors from "cors";
import path from "path";
import usuarioRoutes from "./routes/usuario.routes.js";
import clienteRoutes from "./routes/cliente.routes.js";
import productoRoutes from "./routes/producto.routes.js";
import pedidoRoutes from "./routes/pedido.routes.js";
import carritoRoutes from "./routes/carrito.routes.js";

const app = express();

const corsOptions = {
  origin: [
    "https://casoproductosfrontend.vercel.app",
    "https://caso-practico-final-1.onrender.com"
  ],
  credentials: true
};

app.use(cors(corsOptions));

// Servir archivos estáticos del frontend
app.use(express.static(path.join(path.resolve(), '../../frontend')));

// Redirigir todas las rutas que no sean API al index.html del frontend
app.get(/^\/(?!api).*/, (req, res) => {
  res.sendFile(path.join(path.resolve(), '../../frontend/index.html'));
});

// Esto es para manejar las solicitudes JSON y URL-encoded
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Ruta de inicio
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

// Rutas de la API
app.use("/api/usuarios", usuarioRoutes);
app.use("/api/clientes", clienteRoutes);
app.use("/api/productos", productoRoutes);
app.use("/api/pedidos", pedidoRoutes);
app.use("/api/carrito", carritoRoutes);

// Configuración del servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(` El servidor esta corriendo en el puerto ${PORT}.`);
});
