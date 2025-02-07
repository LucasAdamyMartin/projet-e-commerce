type TextProps = {
  fontSize: string;
  color: string;
  fontStyle: string;
  text: string;
  additionalClassName?: string;
};
export function Text({
  fontSize,
  color,
  fontStyle,
  text,
  additionalClassName,
}: Readonly<TextProps>) {
  return (
    <p
      className={`${fontSize} ${fontStyle} ${color} ${additionalClassName}`}
    >
      {text}
    </p>
  );
}
