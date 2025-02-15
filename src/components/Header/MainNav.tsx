import { Bars3Icon } from "@heroicons/react/24/outline";
import { NAVIGATION_ITEMS, TEXTS} from "../../../utils/constants";
import { AuthButtons } from "./AuthButtons";
import { Navigation } from "../NavigationBar/Navigation";
import { UserActions } from "./UserActions";
import { MobileMenu } from "./MobileMenu";
import { useMenu } from "../../context/MenuContext";
import { Text } from "../Text";

type MainNavProps = {mainNavClasses? : string};

export function MainNav({mainNavClasses} : Readonly<MainNavProps>) {
    const {isMenuOpen, toggleMenu} = useMenu();
    const mainNavdefaultClasses : string = "flex justify-between items-center";
    const navigationClasses : string = "hidden lg:flex justify-center items-center space-x-12 flex-grow ml-15";
    const userActionsClasses : string = "space-x-2 justify-end ml-auto";
    const authButtonsClasses : string = "hidden lg:flex space-x-4 col-span-2";
    const menuClasses : string = "hidden max-lg:block size-7 text-primary";
    return (
        <nav className={`${mainNavdefaultClasses} ${mainNavClasses}`}>
            <Text fontSize="text-[46px]" color="text-primary" fontStyle="font-pacifico" text={TEXTS.Title} additionalClassName="flex"/>
            <Navigation
              listClasses= {navigationClasses}
              items={NAVIGATION_ITEMS}
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