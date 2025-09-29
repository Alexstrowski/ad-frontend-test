import { Button } from "@/components/ui/Button";
import React from "react";
import { Card } from "../Card";
import { Game } from "@/utils/endpoint";

interface GamesListProps {
  games: Game[];
  hasMore: boolean;
  isLoading: boolean;
  handleLoadMore: () => Promise<void>;
}

const GamesList = ({
  games,
  hasMore,
  isLoading,
  handleLoadMore,
}: GamesListProps) => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-6 py-8 px-6">
      {games.map((game) => (
        <Card {...game} key={game.id} />
      ))}
      {hasMore && (
        <Button onClick={handleLoadMore} disabled={isLoading}>
          {isLoading ? "LOADING..." : "SEE MORE"}
        </Button>
      )}
    </section>
  );
};

export default GamesList;
