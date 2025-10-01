import { CardBasket } from "../CardBasket";
import { CartItem } from "@/reducers/cartReducer";

interface CartProductsProps {
  cartItems: CartItem[];
  removeItemFromCart: (id: string) => void;
}

const CartProducts = ({ cartItems, removeItemFromCart }: CartProductsProps) => {
  return (
    <div className="flex flex-col flex-1">
      {cartItems.map((item) => (
        <CardBasket
          key={item.id}
          {...item}
          removeItemFromCart={removeItemFromCart}
        />
      ))}
    </div>
  );
};

export default CartProducts;
