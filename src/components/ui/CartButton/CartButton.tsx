"use client";

import { PATHS } from "@/config/paths";
import { useCart } from "@/hooks/useCart";
import Image from "next/image";
import Link from "next/link";

const CartButton = () => {
  const { cartItems } = useCart();

  return (
    <Link
      href={PATHS.CART}
      aria-label="Abrir carrito de compras"
      className="relative"
    >
      {cartItems.length > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center min-w-[20px]">
          {cartItems.length}
        </span>
      )}
      <Image src="./cart.svg" alt="shopping-cart" width={24} height={24} />
    </Link>
  );
};

export default CartButton;
