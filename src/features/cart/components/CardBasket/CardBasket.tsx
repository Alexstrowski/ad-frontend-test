import Image from "next/image";
import { Game } from "@/utils/endpoint";

interface CardBasketProps extends Game {
  removeItemFromCart: (id: string) => void;
}

const CardBasket = ({
  id,
  name,
  price,
  description,
  genre,
  image,
  isNew,
  removeItemFromCart,
}: CardBasketProps) => {
  const handleRemove = () => {
    removeItemFromCart(id);
  };

  return (
    <div className="flex flex-col py-5 px-4 gap-4 lg:gap-6 lg:flex-row [&:not(:last-child)]:border-b-[0.5px] [&:not(:last-child)]:border-stroke-secondary">
      <div className="flex gap-3 items-start lg:contents">
        <div className="relative flex-1 aspect-[16/9] lg:flex-none lg:w-64">
          {isNew && (
            <span
              aria-label="New release"
              className="absolute top-3 left-3 z-10 bg-stone-100 rounded py-1 px-2 text-stroke-primary leading-4"
            >
              New
            </span>
          )}
          <Image
            alt={`${name} cover`}
            src={image}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <button
          onClick={handleRemove}
          aria-label={`Remove ${name} from cart`}
          className="flex lg:order-3 items-baseline"
        >
          <Image
            src="./close.svg"
            alt="delete-button"
            width={12}
            height={12}
            className="my-3"
          />
        </button>
      </div>

      <div className="flex flex-col gap-6 lg:flex-1 lg:justify-between lg:order-2  lg:gap-0 lg:py-2">
        <div className="text-neutral-500">
          <p className="font-bold text-sm leading-4 uppercase mb-3 ">{genre}</p>
          <h3 className="text-xl font-bold leading-6 text-stroke-primary mb-2">
            {name}
          </h3>
          <p className="font-normal leading-5 ">{description}</p>
        </div>
        <p className="text-xl font-bold leading-6 tracking-wide text-end">
          ${price.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default CardBasket;
