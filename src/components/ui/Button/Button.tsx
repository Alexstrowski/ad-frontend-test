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
  const baseStyles = "font-bold w-full";

  const variants = {
    primary: "rounded-2xl text-white bg-[#585660] py-5",
    secondary:
      "rounded-lg text-stroke-primary border-stroke-primary border-2 px-6 py-4",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className || ""}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
