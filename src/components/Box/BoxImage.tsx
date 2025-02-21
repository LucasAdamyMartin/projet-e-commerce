import { product } from "../../../utils/constants";
import { ButtonClick } from "../Button/ButtonClick";

type boxImageType = {product : product}
export function BoxImage({product} : Readonly<boxImageType>) {
    return (
        <div className={`flex flex-col items-end ${product.imgSrc} bg-cover bg-no-repeat w-[250px] h-[250px]`}>
                <ButtonClick height="h-[30px]" text={`Disc ${product.discount}%`} width="w-[90px]" additionalClassName="mt-4 mr-4 rounded-full bg-secondary text-black text-[14px] font-medium" />
        </div>
    )
}