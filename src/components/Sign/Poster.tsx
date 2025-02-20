import { ButtonNavigation } from "../Button/ButtonNavigation";
import { Text } from "../Text";

export function Poster({urlImage} : Readonly<{urlImage : string}>) {
    const containerClasses =
    `flex flex-col rounded-2xl ${urlImage} hidden lg:flex bg-cover bg-center w-[442px] h-[512px]`;

    return(
        <div className={containerClasses}>
               <div className="flex pt-4 pl-4">
                    <Text color="text-primary" fontSize="text-[22px]" fontStyle="font-pacifico" text="vantela"/>
                </div>
                <div className="flex flex-col justify-end items-center flex-grow pb-10">
                    <Text color="text-white" fontSize="text-[36px]" fontStyle="font-Inter" text="Easy shopping" additionalClassName="font-bold -rotate-6"/>
                    <div className="flex flex-row space-x-2 -rotate-6">
                        <Text color="text-white" fontSize="text-[36px]" fontStyle="font-Inter" text="just from" additionalClassName="font-bold"/>
                        <Text color="text-secondary" fontSize="text-[36px]" fontStyle="font-Inter" text="home" additionalClassName="font-bold"/>
                    </div>
               </div>
               <ButtonNavigation colorOnClick="bg-white" containerClasses="flex flex-row justify-end pr-2 pb-2 space-x-2"/>
        </div>
    )
}