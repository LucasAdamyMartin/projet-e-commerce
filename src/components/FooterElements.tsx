import { ButtonNewsletter } from "./Button/ButtonNewsletter"
import { Title } from "./Title"

export function FooterElements() {
    const firstPartClasses : string = "flex justify-between items-center p-10 flex-row ml-26 mr-26"
    // const secondPartClasses : string = "grid bg-black"
    return(
        <>
        <div className={firstPartClasses}>
            <Title fontSize="40" color="white"/>
            <ButtonNewsletter />
        </div>
        <div className="grid grid-cols-4 p-10 ml-28 mr-28 justify-center">
            <div>Company</div>
            <div>Help</div>
            <div>Social Media</div>
            <div>Contact</div>
        </div>
        </>
    )
}