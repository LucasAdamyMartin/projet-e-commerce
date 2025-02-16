import { NavLink } from "react-router-dom";

type NavigationPartProps = {
  text: string;
  listElementClasses?: string;
  link?: string;
};

export function NavigationPart({
  text,
  listElementClasses,
  link,
}: Readonly<NavigationPartProps>) {
  return (
    <li className={listElementClasses}>
      {link ? <NavLink to={link}>{text}</NavLink> : <span>{text}</span>}
    </li>
  );
}
