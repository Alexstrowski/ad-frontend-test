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
      addItemToCart({ id, name, price, description });
    }
  };

  return (
    <article className="flex flex-col border-[0.5px] border-stroke-secondary p-6 rounded-2xl gap-5 min-w-[327px]">
      <div className="relative w-full aspect-[93/80]">
        {isNew && (
          <span
            aria-label="New release"
            className="absolute top-3 left-3 z-10 bg-stone-100 rounded py-2 px-3 text-stroke-primary"
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
        <div className="flex justify-between text-stroke-primary gap-2">
          <h2 className="text-lg leading-5 tracking-wide">{name}</h2>
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
      >
        {isItemInCart ? "REMOVE" : "ADD TO CART"}
      </Button>
    </article>
  );
};

export default Card;
