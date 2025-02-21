import { products } from "../../utils/constants";
import { BackgroundText } from "../components/Footer/BackgoundText";
import { BoxShoes } from "../components/Box/BoxShoes";
import { CollectionBanner } from "../components/Home/CollectionBanner";
import { PosterImage } from "../components/Home/PosterImage";
import { PosterText } from "../components/Home/PosterText";
import { SearchBar } from "../components/SearchBar";
import { SelectionBar } from "../components/SelectionBar";

export function Home() {
    const containerClasses = "flex flex-col";
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
            <div className="flex flex-col w-screen h-fit justify-center items-center mt-20 mb-20 gap-10">
                  <SelectionBar icon={true} positionText="justify-between" text="Popular" textItalic="Most"/>
                  <div className="flex flex-row gap-5 overflow-x-auto w-[90dvw] scrollbar-hidden overflow-hidden">
                    {products.map((product, index) => (
                      <BoxShoes key={index} index={index} product={product} isHoveredActive={true}/>
                    ))}
                  </div>
            </div>
            <div className="flex h-fit w-full justify-center items-center mb-10">
                <CollectionBanner/>
            </div>
        </div>
    );
}
