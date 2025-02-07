import { Copyright } from "../components/Footer/Copyright";
import { FooterElements } from "../components/Footer/FooterElements";

export function Footer() {
    const containerClasses : string = "flex flex-col bg-primary";
    const WrapperClasses : string ="flex flex-col";
    return (
    <div className={containerClasses}>
        <div className={WrapperClasses}>
            <FooterElements />
        </div>
        <Copyright />
    </div>
)
}