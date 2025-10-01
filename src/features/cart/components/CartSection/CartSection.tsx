"use client";

import { useCart } from "@/hooks/useCart";
import { CartDetail } from "../CartDetail";

const CartTitle = () => {
  const { cartItems } = useCart();
  const itemsInCart = cartItems.length;

  return (
    <div className="flex flex-col gap-3 text-stroke-primary">
      <h2 className="font-bold text-2xl leading-7 ">Your Cart</h2>
      {!!itemsInCart && (
        <p className="text-xl leading-6">
          {itemsInCart} {itemsInCart === 1 ? "item" : "items"}
        </p>
      )}
    </div>
  );
};

const CartSection = () => {
  return (
    <div className="flex flex-col gap-8 py-8">
      <CartTitle />
      <CartDetail />
    </div>
  );
};

export default CartSection;
