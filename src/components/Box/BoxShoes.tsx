import { useState } from "react";
import { HoveredBox } from "./HoveredBox";
import { BoxPrices } from "./BoxPrices";
import { BoxImage } from "./BoxImage";
import { product } from "../../../utils/constants";

type BoxShoesType = { product: product; index: number; isHoveredActive?: boolean };

export function BoxShoes({ product, index, isHoveredActive = false }: Readonly<BoxShoesType>) {
  const [isHovered, setIsHovered] = useState(false);

  const containerClasses = `flex flex-col items-center border-2 border-gray-100 rounded-[8px] p-4 ${
    isHoveredActive ? "transition-all duration-300 hover:m-2 hover:bg-gray-100" : ""
  }`;

  return (
    <div
      key={index}
      className={containerClasses}
      onMouseEnter={isHoveredActive ? () => setIsHovered(true) : undefined}
      onMouseLeave={isHoveredActive ? () => setIsHovered(false) : undefined}
    >
      <BoxImage product={product} />
      <BoxPrices product={product} />
      {isHoveredActive && isHovered && <HoveredBox product={product} />}
      {!(isHoveredActive) && <HoveredBox product={product} />}
    </div>
  );
}
