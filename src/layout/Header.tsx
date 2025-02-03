import { MainNav } from "../components/MainNav";

export function Header() {
  return (
    <>
      <div className="h-8.5 w-screen bg-gray-100"></div>
      <div className="flex h-32 w-screen">
        <div className="flex justify-center items-center w-full h-full">
        <MainNav className="h-fit w-full m-15  space-x-8" />
        </div>
      </div>
    </>
  );
}