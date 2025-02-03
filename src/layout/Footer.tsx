import { Copyright } from "../components/Copyright";
import { FooterElements } from "../components/FooterElements";

export function Footer() {
    const containerClasses : string = "flex flex-col min-h-screen bg-primary";
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