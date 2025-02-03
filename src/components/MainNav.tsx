import { Bars3Icon } from "@heroicons/react/24/outline";
import { NAVIGATION_ITEMS } from "../../utils/constants";
import { AuthButtons } from "./AuthButtons";
import { Navigation } from "./NavigationBar/Navigation";
import { UserActions } from "./UserActions";
import { MobileMenu } from "./MobileMenu";
import { useMenu } from "../context/MenuContext";

type MainNavProps = {className? : string};

export function MainNav({className} : Readonly<MainNavProps>) {
    const {isMenuOpen, toggleMenu} = useMenu();
    const defaultClass = "flex justify-between items-center"
    return (
        <nav className={`${defaultClass} ${className}`}>
            <h1 className="font-pacifico text-[40px]">vantela</h1>
            <Navigation
              className="hidden lg:flex space-x-12 flex-grow ml-15"
              textList={NAVIGATION_ITEMS}
            />
            <UserActions className="space-x-2 justify-end ml-auto"/>
            <AuthButtons className="hidden lg:flex space-x-4 col-span-2"/>
            <Bars3Icon
              className="hidden max-lg:block size-7 text-primary"
              onClick={toggleMenu}
            />
            {isMenuOpen && <MobileMenu />}
          </nav>
    )
}