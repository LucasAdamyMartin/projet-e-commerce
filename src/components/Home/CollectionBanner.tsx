import { ButtonClick } from "../Button/ButtonClick";
import { ButtonNavigation } from "../Button/ButtonNavigation";

export function CollectionBanner() {
    const buttonHeroAddClasses =  "flex flex-row justify-center items-center font-bold text-[20px] gap-x-2 bg-secondary rounded-full mb-10 ml-10";
    const containerClasses = "flex  justify-between items-end w-[70dvw] h-[130dvh] rounded-2xl lg:bg-[url('/img/chaussure_hero.png')] bg-[url('/img/chaussure_hero_mobile.webp')] bg-cover bg-center bg-no-repeat"
    return (
        <div className= {containerClasses}>
                    <ButtonClick height="h-[56px]" text="See More" variant="outline" width="w-[180px]" icon="arrowRight" iconSize="size-6" additionalClassName={buttonHeroAddClasses}/>
                    <ButtonNavigation colorOnClick="bg-white" containerClasses="flex  flex-row space-x-4 mb-15 mr-10 justify-center items-center"/>
        </div>
    )
}