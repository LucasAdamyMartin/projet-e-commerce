import { TEXTS } from "../../utils/constants";
import { ButtonInput } from "./Button/ButtonInput";

export function SearchBar() {
  return (
    <div className="flex items-center justify-center whitespace-nowrap p-10">
      <ButtonInput
        bgColor="bg-gray-100"
        color="text-gray-200"
        text={TEXTS.SearchText}
        space="lg:space-x-100 space-x-40"
        icon="glass"
      />
    </div>
  );
}
