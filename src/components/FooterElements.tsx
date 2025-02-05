import { COMPANY_ITEMS, CONTACT_ITEMS, HELP_ITEMS, SOCIAL_MEDIA_ITEMS} from "../../utils/constants"
import { ButtonInput } from "./Button/ButtonInput"
import { Navigation } from "./NavigationBar/Navigation"
import { Text } from "./Text"

export function FooterElements() {
    const firstPartClasses : string = "flex justify-between items-center p-10 flex-row ml-26 mr-26"
    const secondPartClasses : string = "flex flex-row justify-between text-white"
    const companyListClasses : string = "flex flex-col p-10 ml-28 text-left"
    const helpListClasses : string = "flex flex-col p-10"
    const socialMediaListClasses : string = "flex flex-col p-10 justify-center"
    const contactListClasses : string = "flex flex-col p-10 mr-28 justify-center" 
    return(
        <>
        <div className={firstPartClasses}>
            <Text fontSize="title" color="white" fontStyle="pacifico" text="Title"/>
            <ButtonInput bgColor="gray" color="gray" text="NewsletterText" space="medium" icon="arrow"/>
        </div>
        <div className={secondPartClasses}>
        <Navigation title="Company" textList={COMPANY_ITEMS} listClasses={companyListClasses} listElementClasses="underline mb-2"/>
        <Navigation title="Help" textList={HELP_ITEMS} listClasses={helpListClasses} listElementClasses="underline mb-2"/>
        <Navigation title="Social Media" textList={SOCIAL_MEDIA_ITEMS} listClasses={socialMediaListClasses} listElementClasses=" underline mb-2"/>
        <Navigation title="Contact" textList={CONTACT_ITEMS} listClasses={contactListClasses} listElementClasses="mb-2"/>
        </div>
        </>
    )
}