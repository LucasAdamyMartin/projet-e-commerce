import { fontSizeVariants, fontStyleVariants, textColorVariants, TEXTS } from "../../utils/constants";

type TextProps = {fontSize : string, color : string, fontStyle : string, text :string};
export function Text({fontSize, color, fontStyle,text} : Readonly<TextProps>) {
    return (
    <p className={`${fontSizeVariants[fontSize]}  ${fontStyleVariants[fontStyle]} ${textColorVariants[color]}`}>{TEXTS[text]}</p>
    )
}