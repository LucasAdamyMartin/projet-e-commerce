import { BoxShoes } from "./BoxShoes";
import { SelectionBar } from "./SelectionBar";
export type product = {name:string, price:string, imgSrc:string}
export function SelectionHome() {
    const products : product[] = Array(6).fill({
        name: "Vantela Republic Low Black Natural",
        price: "Rp 159.000",
        imgSrc: "/img/chaussure1.png"
    });
    const containerClasses = "flex flex-col w-screen h-fit justify-center items-center mt-20 mb-20 gap-10";
    return (
        <div className={containerClasses}>
                <SelectionBar />
                <div className="flex flex-row pl-5 gap-5 overflow-x-auto w-screen">
                    {products.map((product, index) => (
                        <BoxShoes key={index} index={index} product={product}/>
                    ))}
                </div>
        </div>
    )
}