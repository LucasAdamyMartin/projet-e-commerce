import { FooterElements } from "../components/Footer/FooterElements";

export function Footer() {
    return (
    <div className= "flex flex-col bg-primary">
        <div className="flex flex-col">
            <FooterElements />
        </div>
        <div className= "bg-primary-dark text-center p-4 text-white">
            Copyright 2023. All Right Reserverd
        </div>    
    </div>
)
}