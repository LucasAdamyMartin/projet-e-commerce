import { TEXTS } from "../../utils/constants";

type TitleProps = {fontSize : string};
export function Title({fontSize} : Readonly<TitleProps>) {
    const titleDefaultClass = "font-pacifico";
    fontSize = `text-[${fontSize}px]`;
    return (
    <h1 className={`${titleDefaultClass} ${fontSize}`}>{TEXTS.Title}</h1>
    )
}