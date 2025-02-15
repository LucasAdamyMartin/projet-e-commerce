import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";

type ButtonProps = {
  text: string;
  link?:string;
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
  link,
  width,
  height,
  position,
  icon,
  iconSize,
  additionalClassName,
  onClick,
}: Readonly<ButtonProps>) {
  const iconInButton : JSX.Element = (icon) === "arrowRight" ? <ChevronRightIcon className={iconSize}/> : <ChevronDownIcon className={iconSize}/>;
  const buttonContent = (
    <div className={`flex items-center justify-center ${width} ${height}`}>
      <span>{text}</span>
      {icon && iconInButton}
    </div>
  );

  return link ? (
    <NavLink to={link} className={`${width} ${height} ${position} ${additionalClassName} flex items-center justify-center`}>
      {buttonContent}
    </NavLink>
  ) : (
    <button
      className={`${width} ${height} ${position} ${additionalClassName} flex items-center justify-center`}
      onClick={onClick}
    >
      {buttonContent}
    </button>
  );
}
