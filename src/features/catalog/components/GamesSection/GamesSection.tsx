"use client";

import { GamesListResponse } from "@/types/api";
import { useGamesCatalog } from "@/hooks/useGamesCatalog";
import { GamesSectionHeader } from "../GamesSectionHeader";
import GamesList from "../GamesList/GamesList";

interface GamesSectionProps {
  initialData: GamesListResponse;
}

const GamesSection = ({ initialData }: GamesSectionProps) => {
  const {
    games,
    handleLoadMore,
    isLoading,
    hasMore,
    currentGenre,
    handleFilterChange,
  } = useGamesCatalog(initialData);
  return (
    <>
      <GamesSectionHeader
        genres={initialData.availableFilters || []}
        currentGenre={currentGenre}
        onGenreChange={handleFilterChange}
        isLoading={isLoading}
      />
      <GamesList
        games={games}
        handleLoadMore={handleLoadMore}
        hasMore={hasMore}
        isLoading={isLoading}
      />
    </>
  );
};

export default GamesSection;
