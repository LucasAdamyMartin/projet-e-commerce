import { BackgroundText } from "../components/Footer/BackgoundText";
import { SearchBar } from "../components/SearchBar";
import { PosterText } from "../components/Home/PosterText";
import { PosterImage } from "../components/Home/PosterImage";
import { Text } from "../components/Text";

export function Home() {
    const containerClasses: string = "min-h-screen";
    const containerPosterClasses : string = "flex bg-gray-100 overflow-hidden w-screen relative";
    const PosterClasses : string = "flex justify-between lg:flex-row-reverse flex-col-reverse w-full h-full";

    return(
        <div className={containerClasses}>
            <SearchBar/>
            <div className={containerPosterClasses}>
                <div className={PosterClasses}>
                    <PosterImage/>
                    <PosterText/>
                </div>
            <BackgroundText/>
            </div>
            <div className="flex w-screen h-fit justify-center items-center mt-20">
                <div className="flex flex-row bg-gray-100 h-[104px] w-[70dvw] rounded-full items-center p-12">
                    <div className="flex flex-row space-x-2 justify-center items-center">
                        <Text color="text-primary" fontSize="text-[26px]" fontStyle="font-alice" text="Most" additionalClassName=" mb-1 font-bold italic"/>
                        <Text color="text-primary" fontSize="text-[24px]" fontStyle="font-Inter" text="Popular" additionalClassName="font-bold"/>
                    </div>
                </div>
            </div>
        </div>
    )
}