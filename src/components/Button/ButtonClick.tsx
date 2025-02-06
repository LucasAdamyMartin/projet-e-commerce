type ButtonProps = {
  text: string;
  variant: "outline" | "inline";
  width: string;
  height: string;
  position?: string;
  additionalClassName?: string;
  onClick?: () => void;
};
export function ButtonClick({
  text,
  variant,
  width,
  height,
  position,
  additionalClassName,
  onClick,
}: Readonly<ButtonProps>) {
  const variantClasses =
    variant === "outline"
      ? "bg-primary text-white"
      : "bg-white text-primary border-primary border-2";
  return (
    <button
      className={`${variantClasses} ${width} ${height} ${position} ${additionalClassName}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
