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

// 1. Definir corsOptions antes de usarlo
const corsOptions = {
  origin: function (origin, callback) {
    const allowedOrigins = [
      "http://127.0.0.1:5500",
      "http://localhost:3000",
      "https://casoproductosfrontend.netlify.app"
    ];
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true
};

// 2. Usar CORS antes de cualquier otro middleware o ruta
app.use(cors(corsOptions));

// 3. Luego el resto de middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 4. Archivos estáticos y rutas
app.use(express.static(path.join(path.resolve(), '../../frontend')));

// Redirigir todas las rutas que no sean API al index.html del frontend
app.get(/^\/(?!api).*/, (req, res) => {
  res.sendFile(path.join(path.resolve(), '../../frontend/index.html'));
});

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
