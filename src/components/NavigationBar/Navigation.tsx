import { NavigationPart } from "./NavigationPart";

type NavigationProps = {className? : string};
export function Navigation({className} : Readonly<NavigationProps>) {
    const ListNavigation : string[]  = ["Home", "Sneakers", "Slip On", "Sandals", "Others"];
    const defaultClasses = "flex justify-center items-center";
    return (
    <ul className={`${defaultClasses} ${className}`}>
    {ListNavigation.map((element, index) => (<NavigationPart key={index} text={element}></NavigationPart>))}
    </ul>
    )
}