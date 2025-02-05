import { ButtonInput } from "../components/Button/ButtonInput";

export function Home() {
    const containerClasses: string = "min-h-screen";
    return(
        <div className={containerClasses}>
            <div className="flex items-center justify-center p-10 bg-amber-500">
            <ButtonInput bgColor="gray" color="gray" text="SearchText"/>
            </div>
        </div>
    )
}