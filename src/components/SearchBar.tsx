import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export function SearchBar() {
  return (
    <div className="flex items-center justify-center whitespace-nowrap p-10">
      <div className="bg-gray-100 rounded-4xl w-[487px] pr-8 pl-8 p-4 flex justify-between items-center">
        <input className="w-full outline-none" placeholder="Search ..."/>
        <MagnifyingGlassIcon className="size-6 text-primary"/>
      </div>
    </div>
  );
}
