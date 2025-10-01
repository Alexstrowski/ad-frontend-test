import { CartButton } from "@/components/ui/CartButton";
import { PATHS } from "@/config/paths";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex h-16 py-5 px-6 bg-surface-secondary justify-between lg:px-32">
      <Link href={PATHS.HOME}>
        <Image
          src="/GamerShop.png"
          alt="gamershop logo"
          height={24}
          width={150}
        />
      </Link>
      <CartButton />
    </header>
  );
};

export default Header;
