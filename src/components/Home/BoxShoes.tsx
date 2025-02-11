import { product } from "./SelectionHome"

type BoxShoesType = {product : product , index : number}
export function BoxShoes({product, index} : Readonly<BoxShoesType>) {
    return(
    <div key={index} className="flex flex-col border-2 border-gray-100 rounded-[8px] min-w-[350px] w-[70%] p-4">
        <div className="flex justify-center">
            <img className="w-[242px] h-[242px] object-cover" src={product.imgSrc} alt={product.name} />
        </div>
        <div className="flex flex-col self-start">
            <p className="text-[18px] font-bold">{product.name}</p>
            <p>{product.price}</p>
        </div>
    </div>
    )
}