import { Navigation } from "./NavigationBar/Navigation";
import { NAVIGATION_ITEMS } from "../../utils/constants";
import { Backdrop } from "./Backdrop";

export function MobileMenu() {
    return( 
        <>
        <Backdrop/>
        <div className="absolute top-0 right-0 w-1/4 h-screen bg-white backdrop-blur-sm">
            <Navigation className="flex-col space-y-4 mt-20" textList={NAVIGATION_ITEMS}></Navigation>
        </div>
        </>
    ) 
}