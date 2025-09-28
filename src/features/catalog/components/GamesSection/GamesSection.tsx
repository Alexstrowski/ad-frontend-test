import { GamesListResponse } from "@/types/api";
import { Card } from "../Card";

interface GamesSectionProps {
  initialData: GamesListResponse;
}

const GamesSection = ({ initialData }: GamesSectionProps) => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-6">
      {initialData.games.map((game) => (
        <Card {...game} key={game.id} />
      ))}
    </section>
  );
};

export default GamesSection;
