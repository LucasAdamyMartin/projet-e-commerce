import { product } from "../SelectionHome";
import { useState } from "react";
import { HoveredBox } from "./HoveredBox";
import { BoxPrices } from "./BoxPrices";
import { BoxImage } from "./BoxImage";

type BoxShoesType = { product: product; index: number; discount?: string };

export function BoxShoes({ product, index }: Readonly<BoxShoesType>) {
  const [isHovered, setIsHovered] = useState(false);
  const containerClasses =
    "relative flex flex-col border-2 border-gray-100 rounded-[8px] min-w-[350px] w-[70%] p-4 transition-all duration-300 hover:m-2 hover:bg-gray-100";
  return (
    <div
      key={index}
      className={containerClasses}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <BoxImage product={product} />
      <BoxPrices product={product} />
      {isHovered && <HoveredBox product={product} />}
    </div>
  );
}
