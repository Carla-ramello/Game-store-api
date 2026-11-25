// Importamos el tipo de Fastify.
import type { FastifyInstance } from "fastify";

// Importamos el controlador encargado de obtener los videojuegos.
import { getGamesController } from "../controllers/game.controller.js";

// Registramos los endpoints relacionados con videojuegos.
export const gameRoutes = async (app: FastifyInstance) => {
  // GET /games devuelve el catálogo completo.
  app.get("/games", getGamesController);
};