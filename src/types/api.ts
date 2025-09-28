import { Game } from "@/utils/endpoint";

export type GamesListResponse = {
  games: Game[];
  availableFilters: string[];
  totalPages: number;
  currentPage: number;
};
