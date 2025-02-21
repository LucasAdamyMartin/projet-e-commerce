import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { Text } from "./Text";

type SelectionBarProps = {textItalic : string, text : string, icon : boolean, positionText : "justify-center" | "justify-between"}
export function SelectionBar({textItalic, text, icon, positionText } : Readonly<SelectionBarProps>) {
  return (
    <div className={`flex flex-row bg-gray-100 h-[104px] w-[90dvw] rounded-full ${positionText} items-center p-12`}>
      <div className="flex flex-row space-x-2 justify-center items-center">
        <Text
          color="text-primary"
          fontSize="text-[26px]"
          fontStyle="font-alice"
          text={textItalic}
          additionalClassName=" mb-1 font-bold italic"
        />
        <Text
          color="text-primary"
          fontSize="text-[24px]"
          fontStyle="font-Inter"
          text={text}
          additionalClassName="font-bold"
        />
      </div>
      {icon && <div className="flex flex-row space-x-8">
        <ChevronLeftIcon className="size-[40px] text-primary" />
        <ChevronRightIcon className="size-[40px] text-primary" />
      </div> }
    </div>
  );
}
