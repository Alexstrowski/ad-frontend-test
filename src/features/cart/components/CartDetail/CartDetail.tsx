import { Button } from "@/components/ui/Button";
import { CartProducts } from "../CartProducts";
import { CartSummary } from "../CartSummary";
import { useCart } from "@/hooks/useCart";

const CartDetail = () => {
  const { cartItems, total, removeItemFromCart, isMounted } = useCart();

  if (!isMounted) {
    return (
      <div className="flex justify-center items-center py-8">
        <div className="text-2xl text-gray-500">Loading...</div>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <p className="text-center text-2xl py-8 text-gray-500">
        Your cart is empty
      </p>
    );
  }

  return (
    <div className="flex flex-col gap-12 lg:flex-row lg:gap-20">
      <div className="lg:flex-1">
        <CartProducts
          cartItems={cartItems}
          removeItemFromCart={removeItemFromCart}
        />
      </div>
      <div className="flex flex-col gap-12 lg:w-[522px]">
        <CartSummary cartItems={cartItems} total={total} />
        <Button>Checkout</Button>
      </div>
    </div>
  );
};

export default CartDetail;
