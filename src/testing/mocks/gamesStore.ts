import { createGame } from "@/testing/data-generators";
import { Game } from "@/utils/endpoint";

export const ALL_TEST_GAMES: Game[] = [
  createGame({
    name: "Game 1",
    genre: "RPG",
  }),
  createGame({
    name: "Game 2",
    genre: "Shooter",
  }),
  createGame({
    name: "Game 3",
    genre: "RPG",
  }),
  createGame({
    name: "Game 4",
    genre: "Puzzle",
  }),
  createGame({
    name: "Game 5",
    genre: "Action",
  }),
  createGame({
    name: "Game 6",
    genre: "Adventure",
  }),
  createGame({
    name: "Game 7",
    genre: "Action",
  }),
  createGame({
    name: "Game 8",
    genre: "Puzzle",
  }),
  createGame({
    id: "game-9",
    name: "Game 9",
    genre: "Shooter",
  }),
  createGame({
    name: "Game 10",
    genre: "Adventure",
  }),
];

export const STORE_CONFIG = {
  totalItems: 10,
  itemsPerPage: 6,
  totalPages: 2,
} as const;

export const GAMES_BY_PAGE = {
  1: ALL_TEST_GAMES.slice(0, 6),
  2: ALL_TEST_GAMES.slice(6, 10),
} as const;

export const AVAILABLE_CATEGORIES = Array.from(
  new Set(ALL_TEST_GAMES.map((game) => game.genre))
);

export const TEST_SCENARIOS = {
  INITIAL_PAGE: {
    games: GAMES_BY_PAGE[1],
    currentPage: 1,
    totalPages: STORE_CONFIG.totalPages,
    availableFilters: AVAILABLE_CATEGORIES,
  },
  SECOND_PAGE: {
    games: GAMES_BY_PAGE[2],
    currentPage: 2,
    totalPages: STORE_CONFIG.totalPages,
    availableFilters: AVAILABLE_CATEGORIES,
  },
} as const;
