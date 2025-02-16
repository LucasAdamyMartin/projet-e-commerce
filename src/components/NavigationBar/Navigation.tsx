import { NavigationPart } from "./NavigationPart";

type NavigationProps = {
  title?: string;
  listClasses?: string;
  listElementClasses?: string;
  items: { text: string; link?: string }[];
};

export function Navigation({
  title,
  listClasses,
  listElementClasses,
  items,
}: Readonly<NavigationProps>) {
  return (
    <ul className={listClasses}>
      {title && <h3 className="text-[24px] font-bold mb-3">{title}</h3>}
      {items.map(({ text, link }) => (
        <NavigationPart
          key={text}
          text={text}
          link={link}
          listElementClasses={listElementClasses}
        />
      ))}
    </ul>
  );
}
