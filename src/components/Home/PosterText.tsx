import { TEXTS } from "../../../utils/constants";
import { ButtonClick } from "../Button/ButtonClick";
import { Text } from "../Text";

export function PosterText() {
    const containerClasses = "flex flex-col w-full lg:h-full";
    return(
        <div className={containerClasses}>
            <Text color="text-primary" fontSize="text-[125px]" fontStyle="font-pacifico" text={TEXTS.Title} additionalClassName="flex -mb-8 mt-15 lg:ml-28 ml-10"/>
            <div className="flex lg:flex-row  flex-col w-fit space-x-4 ml-10 lg:ml-28">
                <Text color="text-secondary" fontSize="text-[45px]" fontStyle="font-Inter" text={TEXTS.HomeTitleStrong} additionalClassName="flex whitespace-nowrap font-bold"/>
                <Text color="text-secondary" fontSize="text-[45px]" fontStyle="font-Inter" text={TEXTS.HomeTitleNotStrong} additionalClassName="flex whitespace-nowrap"/>
            </div>
            <Text color="text-gray-400" fontSize="text-[18px]" fontStyle="font-Inter" text={TEXTS.HomeParagraphe} additionalClassName="flex lg:ml-28 ml-10"/>
            <ButtonClick text="Shop Now" variant="outline" height="h-[60px]" width="w-[160px]" position="flex" additionalClassName="justify-center items-center font-semibold text-[20px] rounded-full mt-5 ml-28"/>
        </div>
    )
}