import { Navigation } from "../NavigationBar/Navigation";
import { NAVIGATION_ITEMS } from "../../../utils/constants";
import { Backdrop } from "../Backdrop";

export function MobileMenu() {
  const backdropClasses : string = "absolute top-0 right-0 w-1/4 h-screen bg-white backdrop-blur-sm";
  const navigationClasses : string = "flex items-center justify-center flex-col space-y-4 mt-20";
  return (
    <>
      <Backdrop />
      <div className= {backdropClasses}>
        <Navigation
          listClasses= {navigationClasses}
          textList={NAVIGATION_ITEMS}
        ></Navigation>
      </div>
    </>
  );
}