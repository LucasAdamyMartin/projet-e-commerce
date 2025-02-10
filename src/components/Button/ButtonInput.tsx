import { ChevronRightIcon} from "@heroicons/react/24/solid";
import { Text } from "../Text";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

type ButtonInputProps = {bgColor : string, color : string, text : string, space: string, icon : "arrow" | "glass"};

export function ButtonInput ({bgColor, color, text, space, icon}: Readonly<ButtonInputProps>) {
    const buttonClasses = `${bgColor} p-4 pr-7 pl-7 flex flex-row items-center ${space} rounded-full`;
    const iconSize = "size-6 text-primary";
    const iconInButton : JSX.Element = (icon) === "arrow" ? <ChevronRightIcon className={iconSize}/> : <MagnifyingGlassIcon className={iconSize}/>
    return (
        <button className={buttonClasses}>
            <Text fontSize="14" color={color} fontStyle="Inter" text={text}/>
            {iconInButton}
        </button>
    )
}