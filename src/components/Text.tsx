
type TextProps = {fontSize : string, color : string, text : string}
export function Text({fontSize, color, text } : Readonly<TextProps>) {
    const textClasses = `text-[${fontSize}px] text-${color}-500`;
    return (
        <p className={textClasses}>{text}</p>
    )
}