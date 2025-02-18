import { ButtonClick } from "../../Button/ButtonClick";
import { Image } from "../../Image";
import { product } from "../SelectionHome";

type boxImageType = {product : product}
export function BoxImage({product} : Readonly<boxImageType>) {
    return (
        <div className="relative flex flex-col items-center bg-white">
            <div className="absolute top-2 right-2 z-10">
                <ButtonClick height="h-[35px]" text={`Disc ${product.discount}%`} width="w-[110px]" additionalClassName="rounded-full bg-secondary text-black font-medium" />
            </div>
            <Image alt={product.name} className="w-[242px] h-[242px] object-cover scale-x-[-1]" src={product.imgSrc} />
        </div>
    )
}