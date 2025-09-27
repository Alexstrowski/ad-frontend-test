import { PATHS } from "@/config/paths";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex h-16 py-5 px-6 bg-surface-secondary justify-between 2xl:px-32">
      <Link href={PATHS.HOME}>
        <h1 className="font-bold text-2xl leading-6 tracking-wide text-center">
          GamerShop
        </h1>
      </Link>
      <Link href={PATHS.CART} aria-label="Abrir carrito de compras">
        <Image src="./cart.svg" alt="shopping-cart" width={24} height={24} />
      </Link>
    </header>
  );
};

export default Header;
