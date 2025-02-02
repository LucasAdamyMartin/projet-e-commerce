import { useMenu } from "../context/MenuContext";

export function Backdrop() {
    const { toggleMenu } = useMenu();
    return (
    <div className="fixed inset-0 bg-black/25"
        onClick={toggleMenu}>      
    </div>)
}