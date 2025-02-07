import { BackgroundText } from "../components/Footer/BackgoundText";
import { PosterImage } from "../components/Home/PosterImage";
import { PosterText } from "../components/Home/PosterText";
import { SelectionHome } from "../components/Home/SelectionHome";
import { SearchBar } from "../components/SearchBar";

export function Home() {
    const containerClasses = "min-h-screen";
    const containerPosterClasses = "flex bg-gray-100 overflow-hidden w-screen relative";
    const PosterClasses = "flex justify-between lg:flex-row-reverse flex-col-reverse w-full h-full";


    return (
        <div className={containerClasses}>
            <SearchBar />
            <div className={containerPosterClasses}>
                <div className={PosterClasses}>
                    <PosterImage />
                    <PosterText />
                </div>
                <BackgroundText />
            </div>
            <SelectionHome/>
        </div>
    );
}
