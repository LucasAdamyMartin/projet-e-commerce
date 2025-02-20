import { Text } from "../Text";

export function Title( {title} : Readonly<{title : string}>) {
    return(
        <div className="flex items-center border-b-2 p-[40px] border-gray-300">
            <Text color="text-gray-200" fontSize="text-[36px]" fontStyle="text-Inter" text={title}/>
        </div>
    )
}