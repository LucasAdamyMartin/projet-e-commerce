import { COMPANY_ITEMS, CONTACT_ITEMS, HELP_ITEMS, SOCIAL_MEDIA_ITEMS } from "../../utils/constants"
import { ButtonNewsletter } from "./Button/ButtonNewsletter"
import { Navigation } from "./NavigationBar/Navigation"
import { Text } from "./Text"

export function FooterElements() {
    const firstPartClasses : string = "flex justify-between items-center p-10 flex-row ml-26 mr-26"
    // const secondPartClasses : string = "grid bg-black"
    return(
        <>
        <div className={firstPartClasses}>
            <Text fontSize="title" color="white" fontStyle="pacifico" text="Title"/>
            <ButtonNewsletter />
        </div>
        <div className="flex flex-row text-white">
        <Navigation title="Company" textList={COMPANY_ITEMS} listClasses="flex flex-col p-10 ml-28 mr-28 text-left" listElementClasses="underline mb-2"/>
        <Navigation title="Help" textList={HELP_ITEMS} listClasses="flex flex-col p-10 ml-28 mr-28" listElementClasses="underline mb-2"/>
        <Navigation title="Social Media" textList={SOCIAL_MEDIA_ITEMS} listClasses="flex flex-col p-10 ml-28 mr-28 justify-center" listElementClasses=" underline mb-2"/>
        <Navigation title="Contact" textList={CONTACT_ITEMS} listClasses="flex flex-col p-10 ml-28 mr-28 justify-center" listElementClasses="mb-2"/>
        </div>
        </>
    )
}