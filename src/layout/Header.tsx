import { MainNav } from "../components/MainNav";
import { TopBorder } from "../components/TopBorder";

export function Header() {
  const containerClasses : string = "flex h-32 w-full justify-center items-center bg-white shadow-md";
  const navWrapperClasses : string = "flex justify-center items-center w-full h-full";
  const mainNavClasses : string = "h-fit w-full m-16  space-x-8";
  return (
    <header>
      <TopBorder/>
      <div className={containerClasses}>
        <div className={navWrapperClasses}>
        <MainNav mainNavClasses={mainNavClasses}/>
        </div>
      </div> 
    </header>
  );
}