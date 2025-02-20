import { TEXTS } from "../../../utils/constants";
import { ButtonClick } from "../Button/ButtonClick";
import { Text } from "../Text";

export function ConditionsButton() {
    return(
        <div className="flex flex-row items-center space-x-2">
                            <ButtonClick height="h-[16px]" text="" width="w-[16px]" additionalClassName="rounded-[4px] bg-gray-300"/>
                            <Text color="text-black" fontSize="text-[14px]" fontStyle="font-Inter" text={TEXTS.ConditionsText}/>
        </div>
    )
}