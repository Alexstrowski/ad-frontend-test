import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
}

const Button = ({
  variant = "primary",
  children,
  className,
  ...props
}: ButtonProps) => {
  const baseStyles = "font-bold w-full focus:ring-2";

  const variants = {
    primary: "rounded-2xl text-white bg-[#585660] hover:brightness-125 py-5",
    secondary:
      "rounded-lg text-stroke-primary border-stroke-primary border-2 px-6 py-4 hover:bg-slate-200",
  };

  return (
    <button
      className={twMerge(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
