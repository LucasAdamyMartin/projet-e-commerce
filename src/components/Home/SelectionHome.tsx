import { BoxShoes } from "./BoxShoes";
import { SelectionBar } from "./SelectionBar";
export type product = {name:string, price:number, discount?:number, star:number, imgSrc:string}
export function SelectionHome() {
    const products : product[] = Array(6).fill({
        name: "Vantela Republic Low Black Natural",
        price: 159,
        imgSrc: "/img/chaussure1.png",
        discount: 10,
        star : 5,
    }); 
    const containerClasses = "flex flex-col w-screen h-fit justify-center items-center mt-20 mb-20 gap-10";
    return (
        <div className={containerClasses}>
                <SelectionBar />
                <div className="flex flex-row gap-5 overflow-x-auto w-[90dvw] scrollbar-hidden overflow-hidden">
                    {products.map((product, index) => (
                        <BoxShoes key={index} index={index} product={product}/>
                    ))}
                </div>
        </div>
    )
}