type NavigationPartProps = {text : string};
export function NavigationPart({text} : Readonly<NavigationPartProps>) {
    return (
        <li>{text}</li>
    )
}