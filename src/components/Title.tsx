import { TEXTS } from "../../utils/constants";

type TitleProps = {fontSize : string, color : string};
export function Title({fontSize, color} : Readonly<TitleProps>) {
    const titleDefaultClass = "font-pacifico";
    fontSize = `text-[${fontSize}px]`;
    color = `text-${color}`;
    return (
    <h1 className={`${titleDefaultClass} ${fontSize} ${color}`}>{TEXTS.Title}</h1>
    )
}