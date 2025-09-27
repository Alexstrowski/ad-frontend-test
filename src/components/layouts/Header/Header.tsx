import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header className="flex h-16 py-5 px-6 bg-surface-secondary justify-between 2xl:px-32">
      <a href="/">
        <h1 className="font-bold text-2xl leading-6 tracking-wide text-center">
          GamerShop
        </h1>
      </a>
      <button aria-label="Abrir carrito de compras">
        <Image src="./cart.svg" alt="shopping-cart" width={24} height={24} />
      </button>
    </header>
  );
};

export default Header;
