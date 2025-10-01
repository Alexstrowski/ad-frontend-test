import { PATHS } from "@/config/paths";
import { CartSection } from "@/features/cart/components/CartSection";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Cart = () => {
  return (
    <main className="flex min-h-screen flex-col text-base px-6 lg:px-32">
      <Link href={PATHS.HOME} className="flex gap-2 items-center my-4 lg:mt-6">
        <Image
          src="/back-arrow.svg"
          alt="back arrow icon"
          height={12}
          width={12}
        />
        <span className="font-medium leading-4 text-stroke-primary">
          Back to catalog
        </span>
      </Link>
      <CartSection />
    </main>
  );
};

export default Cart;
