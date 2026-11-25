// Importamos los tipos de Fastify.
import type { FastifyReply, FastifyRequest } from "fastify";

// Importamos el servicio que obtiene los videojuegos.
import { getAllGames } from "../services/game.service.js";

// Controlador encargado de responder a GET /games.
export const getGamesController = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  // Obtenemos los videojuegos desde el servicio.
  const games = getAllGames();

  // Devolvemos una respuesta HTTP 200 con el catálogo.
  return reply.code(200).send({
    success: true,
    total: games.length,
    data: games,
  });
};