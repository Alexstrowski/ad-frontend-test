import { PATHS } from "@/config/paths";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-neutral-700 flex justify-center py-16">
      <Link href={PATHS.HOME} aria-label="Ir al inicio">
        <Image
          alt="Apply Digital Logo"
          src="/logo.png"
          width={170}
          height={44}
        />
      </Link>
    </footer>
  );
};

export default Footer;
