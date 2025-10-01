import { CardBasket } from "../CardBasket";
import { CartItem } from "@/reducers/cartReducer";

interface CartProductsProps {
  cartItems: CartItem[];
}

const CartProducts = ({ cartItems }: CartProductsProps) => {
  return (
    <div className="flex flex-col flex-1">
      {cartItems.map((item) => (
        <CardBasket key={item.id} {...item} />
      ))}
    </div>
  );
};

export default CartProducts;
