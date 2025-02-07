import { TEXTS } from "../../utils/constants";
import { ButtonInput } from "./Button/ButtonInput";

export function SearchBar() {
    return (
        <div className="flex items-center justify-center whitespace-nowrap p-10">
                <ButtonInput bgColor="gray" color="gray" text={TEXTS.SearchText} space="large" icon="search"/>
            </div>
    )
}