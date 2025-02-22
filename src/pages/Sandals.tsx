import { useState } from "react";
import { categories} from "../../utils/constants";
import { BoxShoes } from "../components/Box/BoxShoes";
import { ButtonClick } from "../components/Button/ButtonClick";
import { SearchBar } from "../components/SearchBar";
import { SelectionBar } from "../components/SelectionBar";

export function Sandals() {
    const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({
        men: false,
        women: false,
        kids: false
    });
    const toggleSection = (category: string) => {
        setExpandedSections((prevState) => ({
            ...prevState,
            [category]: !prevState[category], 
        }));
    };
    return (
        <div className="flex flex-col items-center">
            <SearchBar />
            {categories.map(({ key, title, products }) => (
                <div key={key} className="flex flex-col justify-start items-center pt-10 pb-4 w-full">
                    <SelectionBar icon={false} text="Sandals" textItalic={title} positionText="justify-center"/>
                    <div className={`grid grid-cols-5 gap-5 w-[90dvw] pt-6 transition-all duration-500 ${expandedSections[key] ? "h-auto" : "h-[50dvh] overflow-hidden"}`}>
                        {products.map((product, index) => (
                            <BoxShoes key={index} index={index} product={product}/>
                        ))}
                    </div>
                    <div className="flex justify-center items-end w-full">
                        <ButtonClick 
                            height="h-[60px]" 
                            text={expandedSections[key] ? "See Less" : "See More"} 
                            width="w-[170px]" 
                            icon={expandedSections[key] ? "arrowUp" : "arrowDown"} 
                            iconSize="ml-2 size-6 font-bold" 
                            additionalClassName="bg-primary rounded-full text-white font-semibold text-[18px] backdrop-blur-md bg-opacity-80 shadow-lg"
                            onClick={() => toggleSection(key)}
                        />
                    </div>
                </div>
            ))}
        </div>
    );
}
