import { COMPANY_ITEMS, CONTACT_ITEMS, HELP_ITEMS, SOCIAL_MEDIA_ITEMS, TEXTS} from "../../../utils/constants"
import { ButtonInput } from "../Button/ButtonInput"
import { Navigation } from "../NavigationBar/Navigation"
import { Text } from "../Text"

export function FooterElements() {
    const firstPartClasses : string = "flex justify-between items-center p-10 lg:flex-row flex-col lg:ml-26 lg:mr-26"
    const secondPartClasses : string = "flex lg:flex-row flex-col not-lg:ml-25 justify-between text-white"
    const companyListClasses : string = "flex flex-col p-10 lg:ml-28 text-left"
    const helpListClasses : string = "flex flex-col p-10"
    const socialMediaListClasses : string = "flex flex-col p-10 justify-center"
    const contactListClasses : string = "flex flex-col p-10 lg:mr-28 justify-center" 
    return(
        <>
        <div className={firstPartClasses}>
            <Text fontSize="text-[46px]" color="text-white" fontStyle="font-pacifico" text={TEXTS.Title} additionalClassName="flex"/>
            <ButtonInput bgColor="bg-gray-100" color="text-gray-200" text={TEXTS.NewsletterText} space="space-x-10" icon="arrow"/>
        </div>
        <div className={secondPartClasses}>
        <Navigation title="Company" items={COMPANY_ITEMS} listClasses={companyListClasses} listElementClasses="underline mb-2"/>
        <Navigation title="Help" items={HELP_ITEMS} listClasses={helpListClasses} listElementClasses="underline mb-2"/>
        <Navigation title="Social Media" items={SOCIAL_MEDIA_ITEMS} listClasses={socialMediaListClasses} listElementClasses=" underline mb-2"/>
        <Navigation title="Contact Us" items={CONTACT_ITEMS} listClasses={contactListClasses} listElementClasses="mb-2"/>
        </div>
        </>
    )
}