import { Bars3Icon } from "@heroicons/react/24/outline";
import { NAVIGATION_ITEMS } from "../../utils/constants";
import { AuthButtons } from "./AuthButtons";
import { Navigation } from "./NavigationBar/Navigation";
import { UserActions } from "./UserActions";
import { MobileMenu } from "./MobileMenu";
import { useMenu } from "../context/MenuContext";
import { Title } from "./Title";

type MainNavProps = {mainNavClasses? : string};

export function MainNav({mainNavClasses} : Readonly<MainNavProps>) {
    const {isMenuOpen, toggleMenu} = useMenu();
    const mainNavdefaultClasses : string = "flex justify-between items-center";
    const navigationClasses : string = "hidden lg:flex space-x-12 flex-grow ml-15";
    const userActionsClasses : string = "space-x-2 justify-end ml-auto";
    const authButtonsClasses : string = "hidden lg:flex space-x-4 col-span-2";
    const menuClasses : string = "hidden max-lg:block size-7 text-primary";
    return (
        <nav className={`${mainNavdefaultClasses} ${mainNavClasses}`}>
            <Title fontSize="40" color="black"/>
            <Navigation
              className= {navigationClasses}
              textList={NAVIGATION_ITEMS}
            />
            <UserActions userActionsClasses= {userActionsClasses}/>
            <AuthButtons className= {authButtonsClasses}/>
            <Bars3Icon
              className= {menuClasses}
              onClick={toggleMenu}
            />
            {isMenuOpen && <MobileMenu />}
          </nav>
    )
}