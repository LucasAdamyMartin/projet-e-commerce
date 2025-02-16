import { StarIcon } from "@heroicons/react/24/solid";
import { ButtonClick } from "../../Button/ButtonClick";
import { product } from "../SelectionHome";

type HoveredBoxType = { product: product };

export function HoveredBox({ product }: Readonly<HoveredBoxType>) {
  const containerClasses = "flex flex-row justify-between items-center pt-5 ";
  return (
    <div className={containerClasses}>
      <div className="flex flex-row space-x-1">
        <div className="size-6 text-secondary ">
          <StarIcon />
        </div>
        <p>{product.star}/5</p>
      </div>
      <ButtonClick
        height="h-[35px]"
        width="w-[100px]"
        text="Shop Now"
        additionalClassName="text-[14px] font-medium bg-primary rounded-full text-white"
      />
    </div>
  );
}
