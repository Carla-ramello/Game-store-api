// Define la estructura de datos de un videojuego.
// Cada propiedad tiene un tipo específico.

export interface Game {
  id: number;
  title: string;
  genre: string;
  price: number;
  releaseYear: number;
  developer: string;
  inStock: boolean;
}