import { useMenu } from "../context/MenuContext";

export function Backdrop() {
  const { toggleMenu } = useMenu();
  const backdropClasses: string = "fixed inset-0 z-50 bg-black/25";
  return <button className={backdropClasses} onClick={toggleMenu}></button>;
}
