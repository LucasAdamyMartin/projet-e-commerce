type ButtonProps = {text : string, variant : string};
export function Button({text, variant} : Readonly<ButtonProps>) {
    const variantStyle = variant === 'outline' 
    ? { backgroundColor: '#1F3E97', color:'white'} 
    : { color: '#1F3E97', backgroundColor:'white', border: '2px solid #1F3E97'};
    return <button className="font-bold h-[39px] w-[78px] text-[12px] font-inter rounded-full m-2" style={variantStyle}>{text}</button>
}