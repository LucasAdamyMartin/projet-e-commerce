import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { Text } from "../Text";
import { TEXTS } from "../../../utils/constants";

export function ButtonNewsletter () {
    const buttonClasses = "bg-white p-3 pr-6 pl-6 flex flex-row items-center space-x-10 rounded-full";
    const arrowSize = "size-6 text-primary";
    return (
        <button className={buttonClasses}>
            <Text fontSize="14" color="gray" text={TEXTS.NewsletterText}/>
            <ChevronRightIcon className={arrowSize}/>
        </button>
    )
}