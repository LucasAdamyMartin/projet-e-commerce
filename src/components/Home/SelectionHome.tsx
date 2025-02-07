import { BoxShoes } from "./BoxShoes";
import { SelectionBar } from "./SelectionBar";
export type product = {name:string, price:string, imgSrc:string}
export function SelectionHome() {
    const products : product[] = Array(4).fill({
        name: "Vantela Republic Low Black Natural",
        price: "Rp 159.000",
        imgSrc: "/img/chaussure1.png"
    });
    return (
        <div className="flex flex-col w-screen h-fit justify-center items-center mt-20 mb-20 gap-10">
                <SelectionBar />
                <div className="flex flex-wrap justify-center gap-5">
                    {products.map((product, index) => (
                        <BoxShoes key={index} index={index} product={product}/>
                    ))}
                </div>
        </div>
    )
}