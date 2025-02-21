import { SelectionBar } from "../components/SelectionBar";
import { SearchBar } from "../components/SearchBar";
import { BoxShoes } from "../components/Box/BoxShoes";
import { product } from "../../utils/constants";

export function Sandals() {
    const products: product[] = Array(10).fill({
        name: "Jackson Ask 6JP Men’s Sandals  - Navy",
        price: 199,
        imgSrc: "bg-[url('img/sandalsMen.png')]",
        discount: 10,
        star: 4.5,
      });
    return (
        <div>
            <SearchBar/>
            <div className="flex flex-col justify-center items-center pt-10 pb-4">
                <SelectionBar icon={false} text="Sandals" textItalic="Man's" positionText="justify-center"/>
                <div className="grid grid-cols-5 gap-5 w-[90dvw] pt-6 h-[70dvh] overflow-hidden">
                    {products.map((product, index) => (
                        <BoxShoes key={index} index={index} product={product}/>
                    ))}
                </div>
            </div>
        </div>
    )
}