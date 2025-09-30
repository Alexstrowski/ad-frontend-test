import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { GamesListResponse } from "@/types/api";
import { Game } from "@/utils/endpoint";
import { API_ROUTES } from "@/services/routes";

export function useGamesCatalog(initialData: GamesListResponse) {
  const [games, setGames] = useState<Game[]>(initialData.games);
  const [currentPage, setCurrentPage] = useState<number>(
    initialData.currentPage
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const router = useRouter();
  const searchParams = useSearchParams();
  const currentGenre = searchParams.get("genre") || "";

  const handleLoadMore = async () => {
    setIsLoading(true);
    try {
      const nextPage = currentPage + 1;
      const params = new URLSearchParams({
        page: nextPage.toString(),
        ...(currentGenre && { genre: currentGenre }),
      });

      const res = await fetch(`${API_ROUTES.GET_GAMES}?${params}`);
      const data: GamesListResponse = await res.json();

      setGames((prev) => [...prev, ...data.games]);
      setCurrentPage(data.currentPage);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFilterChange = async (genre: string) => {
    setIsLoading(true);

    const params = new URLSearchParams();

    if (genre) params.set("genre", genre);
    router.push(`?${params.toString()}`);

    try {
      const fetchParams = new URLSearchParams({
        page: "1",
        ...(genre && { genre }),
      });

      const res = await fetch(`${API_ROUTES.GET_GAMES}?${fetchParams}`);
      const data: GamesListResponse = await res.json();

      setGames(data.games);
      setCurrentPage(1);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    games,
    isLoading,
    hasMore: currentPage < initialData.totalPages,
    currentGenre,
    handleLoadMore,
    handleFilterChange,
  };
}
