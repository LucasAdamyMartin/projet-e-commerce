import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { Text } from "../Text";

export function SelectionBar() {
    return (
        <div className="flex flex-row bg-gray-100 h-[104px] w-[70dvw] rounded-full justify-between items-center p-12">
                    <div className="flex flex-row space-x-2 justify-center items-center">
                        <Text color="text-primary" fontSize="text-[26px]" fontStyle="font-alice" text="Most" additionalClassName=" mb-1 font-bold italic"/>
                        <Text color="text-primary" fontSize="text-[24px]" fontStyle="font-Inter" text="Popular" additionalClassName="font-bold"/>
                    </div>
                    <div className="flex flex-row space-x-8">
                        <ChevronLeftIcon className="size-[40px] text-primary"/>
                        <ChevronRightIcon className="size-[40px] text-primary"/>
                    </div>
        </div>
    )
}