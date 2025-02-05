import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { Text } from "../Text";
import { bgColorVariants } from "../../../utils/constants";

type ButtonInputProps = {bgColor : string, color : string, text : string};

export function ButtonInput ({bgColor, color, text}: Readonly<ButtonInputProps>) {
    const buttonClasses = `${bgColorVariants[bgColor]} p-3 pr-6 pl-6 flex flex-row items-center space-x-10 rounded-full`;
    const arrowSize = "size-6 text-primary";
    return (
        <button className={buttonClasses}>
            <Text fontSize="14" color={color} fontStyle="Inter" text={text}/>
            <ChevronRightIcon className={arrowSize}/>
        </button>
    )
}