import { Button } from "@/components/ui/Button";
import { CartItem } from "@/reducers/cartReducer";
import { Game } from "@/utils/endpoint";
import Image from "next/image";

interface CardProps extends Game {
  addItemToCart: (item: CartItem) => void;
  removeItemFromCart: (id: string) => void;
  isItemInCart: boolean;
}

const Card = ({
  image,
  genre,
  name,
  price,
  isNew,
  id,
  description,
  isItemInCart,
  addItemToCart,
  removeItemFromCart,
}: CardProps) => {
  const onClickCardButton = () => {
    if (isItemInCart) {
      removeItemFromCart(id);
    } else {
      addItemToCart({ id, name, price, description, genre, image, isNew });
    }
  };

  return (
    <article className="flex flex-col border-[0.5px] border-stroke-secondary p-6 rounded-2xl gap-5 min-w-[327px]">
      <div className="relative w-full aspect-[93/80]">
        {isNew && (
          <span
            aria-label="New release"
            className="absolute top-3 left-3 z-10 bg-stone-100 rounded py-2 px-3 text-stroke-primary leading-4"
          >
            New
          </span>
        )}
        <Image
          alt={`${name} cover`}
          src={image}
          fill
          className="rounded-t-2xl object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="font-bold">
        <p className="mb-3 leading-4 text-neutral-500">{genre.toUpperCase()}</p>
        <div className="flex justify-between items-center text-stroke-primary gap-2 min-h-10 tracking-wide">
          <h2 className="text-lg leading-5">{name}</h2>
          <p
            aria-label={`Price: ${price} dollars`}
            className="text-xl leading-6"
          >
            ${price}
          </p>
        </div>
      </div>
      <Button
        aria-label={`Add ${name} to cart`}
        variant="secondary"
        onClick={onClickCardButton}
        className={
          isItemInCart
            ? "bg-red-600 text-white border-red-600 hover:bg-red-500 hover:border-red-500"
            : ""
        }
      >
        {isItemInCart ? "REMOVE" : "ADD TO CART"}
      </Button>
    </article>
  );
};

export default Card;
