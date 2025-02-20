import { ButtonNavigation } from "../Button/ButtonNavigation";
import { Text } from "../Text";
type PosterProps = {urlImage : string, firstText : string, secondText : string, yellowText : string};
export function Poster({urlImage, firstText, secondText, yellowText} : Readonly<PosterProps>) {
    const containerClasses =
    `flex flex-col rounded-2xl ${urlImage} hidden lg:flex bg-cover bg-center w-[442px] h-[512px]`;

    return(
        <div className={containerClasses}>
               <div className="flex pt-4 pl-4">
                    <Text color="text-primary" fontSize="text-[22px]" fontStyle="font-pacifico" text="vantela"/>
                </div>
                <div className="flex flex-col justify-end items-center flex-grow pb-10">
                    <Text color="text-white" fontSize="text-[42px]" fontStyle="font-Inter" text={firstText} additionalClassName="font-bold -rotate-6"/>
                    <div className="flex flex-row space-x-2 -rotate-6">
                        <Text color="text-white" fontSize="text-[42px]" fontStyle="font-Inter" text={secondText} additionalClassName="font-bold"/>
                        <Text color="text-secondary" fontSize="text-[42px]" fontStyle="font-Inter" text={yellowText} additionalClassName="font-bold"/>
                    </div>
               </div>
               <ButtonNavigation colorOnClick="bg-white" containerClasses="flex flex-row justify-end pr-2 pb-2 space-x-2"/>
        </div>
    )
}