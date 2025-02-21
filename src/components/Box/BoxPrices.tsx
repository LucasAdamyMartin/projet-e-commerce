import { product } from "../../../utils/constants";
import { Text } from "../Text";

type boxPricesType = { product: product };
export function BoxPrices({ product }: Readonly<boxPricesType>) {
  const oldPrice = product.discount
    ? ((product.price * 100) / (100 - product.discount)).toFixed(3)
    : null;
  return (
    <div className="flex flex-col self-start pr-4 pl-4">
      <Text
        color="text-black"
        fontSize="text-[18px]"
        fontStyle="font-Inter"
        text={product.name}
        additionalClassName="font-bold"
      />
      {product.discount && (
        <p className="text-[14px] line-through text-gray-400">
          {" "}
          <span>Rp </span> {oldPrice}
        </p>
      )}
      <p>
        <span>Rp </span>
        {product.price.toFixed(3)}
      </p>
    </div>
  );
}
