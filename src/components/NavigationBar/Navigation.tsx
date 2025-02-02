import { NavigationPart } from "./NavigationPart";

type NavigationProps = {className? : string, textList : string[]};
export function Navigation({className, textList} : Readonly<NavigationProps>) {
    const defaultClasses = "flex justify-center items-center";
    return (
    <ul className={`${defaultClasses} ${className}`}>
    {textList.map((element, index) => (<NavigationPart key={index} text={element}></NavigationPart>))}
    </ul>
    )
}