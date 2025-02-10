import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

type ButtonProps = {
  text: string;
  variant: "outline" | "inline";
  width: string;
  height: string;
  position?: string;
  icon?: "arrowRight" | "arrowDown" | "plus" | "min";
  iconSize? : string
  additionalClassName?: string;
  onClick?: () => void;
};
export function ButtonClick({
  text,
  variant,
  width,
  height,
  position,
  icon,
  iconSize,
  additionalClassName,
  onClick,
}: Readonly<ButtonProps>) {
  const variantClasses =
    variant === "outline"
      ? "bg-primary text-white"
      : "bg-white text-primary border-primary border-2";
  const iconInButton : JSX.Element = (icon) === "arrowRight" ? <ChevronRightIcon className={iconSize}/> : <ChevronDownIcon className={iconSize}/>;
  return (
    <button
      className={`${variantClasses} ${width} ${height} ${position} ${additionalClassName}`}
      onClick={onClick}
    >
      {text}
      {icon && iconInButton}
    </button>
  );
}
