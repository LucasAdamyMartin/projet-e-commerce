import { NavigationPart } from "./NavigationPart";

type NavigationProps = { title?: string, listClasses?: string, listElementClasses?: string, textList: string[] };

export function Navigation({ title, listClasses, listElementClasses, textList }: Readonly<NavigationProps>) {
  return (
    <ul className={listClasses}>
      {(title) ? <h3 className="text-[24px] font-bold mb-3">{title}</h3>: ""}
      {textList.map((element) => (
        <NavigationPart key={element} text={element} listElementClasses={listElementClasses}></NavigationPart>
      ))}
    </ul>
  );
}