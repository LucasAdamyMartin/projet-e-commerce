import { Bars3Icon, ChatBubbleOvalLeftEllipsisIcon, HeartIcon, ShoppingBagIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import { Button } from "../components/Button";
import { Navigation } from "../components/NavigationBar/Navigation";
import {TEXTS, NAVIGATION_ITEMS} from "../../utils/constants"
import { MobileMenu } from "../components/MobileMenu";
import { useMenu } from "../context/MenuContext";

export function Header() {
  const { isMenuOpen, toggleMenu } = useMenu();
    return (
    <>
        <div className="h-8.5 w-screen bg-gray-100"></div>
        <div className="flex h-32 w-screen">
        <div className="flex justify-center items-center w-full h-full">
            <nav className="flex justify-between items-center h-fit w-full m-15  space-x-8">
            <h1 className="font-pacifico text-[40px]">vantela</h1>
            <Navigation className="hidden lg:flex space-x-12 flex-grow ml-15" textList={NAVIGATION_ITEMS}></Navigation>
            <div className='flex space-x-2 justify-end ml-auto'>
                <ChatBubbleOvalLeftEllipsisIcon className='size-7 text-primary'></ChatBubbleOvalLeftEllipsisIcon>
                <HeartIcon className='hidden lg:flex size-7 text-primary'></HeartIcon>
                <ShoppingBagIcon className="size-7 text-primary"></ShoppingBagIcon>
                <UserCircleIcon className="hidden max-lg:flex size-7 text-primary"></UserCircleIcon>
            </div>
            <div className='hidden lg:flex space-x-4 col-span-2'>
                <Button text={TEXTS.SignIn} variant='outline'></Button>
                <Button text={TEXTS.SignOut} variant='inline'></Button>
            </div>
            <Bars3Icon
                className="hidden max-lg:block size-7 text-primary"
                onClick={toggleMenu}
            ></Bars3Icon>
            {isMenuOpen && <MobileMenu/>}
            </nav>
        </div>
        </div>
    </>
    )
}