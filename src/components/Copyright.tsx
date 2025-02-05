import { TEXTS } from "../../utils/constants"

export function Copyright() {
    const copyrightClasses = "bg-primary-dark text-center p-4 text-white"
    return (
        <div className= {copyrightClasses}>
            {TEXTS.CopyrightText}
        </div>
    )
}