// Importamos Fastify para crear nuestro servidor HTTP.
import Fastify from "fastify";

// Importamos las rutas de nuestro catálogo de videojuegos.
import { gameRoutes } from "./routes/game.routes.js";
// Creamos una instancia de Fastify.
// logger: true permite visualizar las solicitudes y errores en la terminal.
const app = Fastify({
  logger: true,
});

// Endpoint de salud de nuestra API.
// GET /health permite comprobar que el servidor está funcionando.
app.get("/health", async (request, reply) => {
  return {
    status: "ok",
    message: "Game Store API is running",
    timestamp: new Date().toISOString(),
  };
});
// Registramos las rutas del catálogo de videojuegos.
// Esto permite que Fastify reconozca el endpoint GET /games.
app.register(gameRoutes);

// Función encargada de iniciar nuestro servidor.
const start = async () => {
  try {
    // Iniciamos el servidor en el puerto 3000.
    await app.listen({
      port: 3000,
      host: "127.0.0.1",
    });
  } catch (error) {
    // Registramos cualquier error durante el inicio.
    app.log.error(error);

    // Finalizamos el proceso si el servidor no puede iniciarse.
    process.exit(1);
  }
};

// Ejecutamos la función que inicia nuestra API.
start();