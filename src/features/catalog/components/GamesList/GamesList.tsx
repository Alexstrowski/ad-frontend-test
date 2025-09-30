import { Button } from "@/components/ui/Button";
import React from "react";
import { Card } from "../Card";
import { Game } from "@/utils/endpoint";
import { useCart } from "@/hooks/useCart";

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
  const { addItemToCart } = useCart();
  return (
    <section
      className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-6 py-8 px-6 2xl:py-12 2xl:px-32"
      aria-labelledby="game-list-section"
    >
      {games.map((game) => (
        <Card {...game} key={game.id} addItemToCart={addItemToCart} />
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
