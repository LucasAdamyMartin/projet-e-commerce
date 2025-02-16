import { Navigation } from "../NavigationBar/Navigation";
import { NAVIGATION_ITEMS } from "../../../utils/constants";
import { Backdrop } from "../Backdrop";

export function MobileMenu() {
  const containerClasses: string =
    "fixed top-0 right-0 w-1/4 h-full bg-white backdrop-blur-sm z-50 overflow-hidden";
  const navigationClasses: string =
    "flex items-center justify-center flex-col space-y-4 mt-20";
  return (
    <>
      <Backdrop />
      <div className={containerClasses}>
        <Navigation listClasses={navigationClasses} items={NAVIGATION_ITEMS} />
      </div>
    </>
  );
}
