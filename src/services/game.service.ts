// Importamos el modelo que define la estructura de un videojuego.
import type { Game } from "../models/game.model.js";

// Catálogo temporal de videojuegos.
// Más adelante reemplazaremos estos datos por PostgreSQL.
const games: Game[] = [
  {
    id: 1,
    title: "Elden Ring",
    genre: "RPG",
    price: 59.99,
    releaseYear: 2022,
    developer: "FromSoftware",
    inStock: true,
  },
  {
    id: 2,
    title: "Cyberpunk 2077",
    genre: "Action RPG",
    price: 49.99,
    releaseYear: 2020,
    developer: "CD Projekt Red",
    inStock: true,
  },
  {
    id: 3,
    title: "Hollow Knight",
    genre: "Metroidvania",
    price: 14.99,
    releaseYear: 2017,
    developer: "Team Cherry",
    inStock: true,
  },
  {
    id: 4,
    title: "Stardew Valley",
    genre: "Simulation",
    price: 14.99,
    releaseYear: 2016,
    developer: "ConcernedApe",
    inStock: true,
  },
  {
    id: 5,
    title: "Baldur's Gate 3",
    genre: "RPG",
    price: 59.99,
    releaseYear: 2023,
    developer: "Larian Studios",
    inStock: true,
  },
];

// Devuelve todos los videojuegos disponibles.
export const getAllGames = (): Game[] => {
  return games;
};