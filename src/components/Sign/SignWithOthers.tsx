import { ButtonClick } from "../Button/ButtonClick";
import { Text } from "../Text";

export function SignWithOthers({text} : Readonly<{text : "Sign In" | "Sign Up"}>) {
    const platforms : string[] = ["Google", "Facebook", "Number"];
    return (
        <div className="flex flex-col justify-center items-center space-y-6">
                    <Text color="text-black" fontSize="text-[12px]" fontStyle="font-Inter" text="Or"/>
                    <div className="flex flex-row space-x-6">
                        {platforms.map((platform) => (
                            <ButtonClick key={platform} height="h-[60px]" text={`${text} with ${platform}`} width="w-[240px]" additionalClassName="rounded-full border-2 border-primary text-primary text-[18px] font-medium"/>
                        ))}
                    </div>
        </div>
    )
}