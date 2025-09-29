import { ChangeEvent, useState } from "react";

interface GamesSectionHeaderProps {
  genres: string[];
  currentGenre: string;
  onGenreChange: (genre: string) => void;
  isLoading?: boolean;
}

const GamesSectionHeader = ({
  genres,
  currentGenre,
  onGenreChange,
  isLoading,
}: GamesSectionHeaderProps) => {
  const [genre, setGenre] = useState(currentGenre);
  const onChangeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    setGenre(e.target.value);
    onGenreChange(e.target.value);
  };

  return (
    <section className="flex flex-col py-8 px-6 gap-8 border-b border-stroke-tertiary ">
      <h2 className="font-bold text-2xl leading-7 text-stroke-primary">
        TOP SELLERS
      </h2>
      <div className="flex gap-6 items-center text-xl md:justify-end xl:justify-end 2xl:justify-end">
        <span className="font-bold leading-6 text-stroke-primary">Genre</span>
        <span>|</span>
        <select
          value={genre}
          onChange={onChangeSelect}
          disabled={isLoading}
          className="px-4 py-2 border rounded-lg w-full 2xl:w-1/6 bg-white"
        >
          <option value="">All</option>
          {genres.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>
      </div>
    </section>
  );
};

export default GamesSectionHeader;
