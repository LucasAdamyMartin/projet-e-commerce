type ButtonProps = { text: string; variant: string };
export function Button({ text, variant }: Readonly<ButtonProps>) {
  const variantClasses =
    variant === "outline"
      ? "bg-primary text-white"
      : "bg-white text-primary border-primary border-2";
  const buttonClasses: string =
    "font-bold h-[39px] w-[78px] text-[12px] font-inter rounded-full";
  return (
    <button className={`${variantClasses} ${buttonClasses}`}>{text}</button>
  );
}
