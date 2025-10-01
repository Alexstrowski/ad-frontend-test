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
  const { addItemToCart, isItemInCart, removeItemFromCart } = useCart();

  return (
    <>
      <section
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-6 py-8 px-6 lg:py-12 lg:px-32"
        aria-labelledby="game-list-section"
      >
        {games.map((game) => (
          <Card
            {...game}
            key={game.id}
            addItemToCart={addItemToCart}
            removeItemFromCart={removeItemFromCart}
            isItemInCart={isItemInCart(game.id)}
          />
        ))}
        {hasMore && !isLoading && (
          <Button
            onClick={handleLoadMore}
            disabled={isLoading}
            className="w-fit py-5 px-6"
          >
            {isLoading ? "LOADING..." : "SEE MORE"}
          </Button>
        )}
      </section>
      {isLoading && (
        <div className="flex justify-center items-center py-8">
          <div className="text-2xl text-gray-500">Loading more games...</div>
        </div>
      )}
    </>
  );
};

export default GamesList;
