import { StarIcon } from "@heroicons/react/24/solid"
import { ButtonClick } from "../Button/ButtonClick"
import { product } from "./SelectionHome"
import { useState } from "react";

type BoxShoesType = { product: product, index: number, discount?: string }

export function BoxShoes({ product, index }: Readonly<BoxShoesType>) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            key={index}
            className="relative flex flex-col border-2 border-gray-100 rounded-[8px] min-w-[350px] w-[70%] p-4 transition-all duration-300 hover:m-2 hover:bg-gray-100"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="relative flex flex-col items-center bg-white">
                <div className="absolute top-2 right-2 z-10">
                    <ButtonClick height="h-[35px]" text={`Disc ${product.discount}%`} width="w-[110px]" additionalClassName="rounded-full bg-secondary text-black font-medium" />
                </div>
                <img className="w-[242px] h-[242px] object-cover scale-x-[-1]" src={product.imgSrc} alt={product.name} />
            </div>

            <div className="flex flex-col self-start">
                <p className="text-[18px] font-bold">{product.name}</p>
                {product.discount && <p className="text-[14px] line-through text-gray-400"> <span>Rp </span> {(product.price * 100 / (100 - product.discount)).toFixed(3)}</p> }
                <p><span>Rp </span>{(product.price).toFixed(3)}</p>
            </div>

            {isHovered && 
            <div className="flex flex-row justify-between items-center pt-5 ">
                <div className="flex flex-row space-x-1">
                    <div className="size-6 text-secondary ">
                        <StarIcon/>
                    </div> 
                    <p>{product.star}/5</p>
                </div>
                <ButtonClick height="h-[35px]" width="w-[100px]" text="Shop Now" additionalClassName="text-[14px] font-medium bg-primary rounded-full text-white"/>
            </div>
}
        </div>
    )
}
