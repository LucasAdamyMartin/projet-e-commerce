import { ButtonClick } from "../Button/ButtonClick";
import { Text } from "../Text";

export function SignWithOthers() {
    return (
        <div className="flex flex-col justify-center items-center space-y-6">
                    <Text color="text-black" fontSize="text-[12px]" fontStyle="font-Inter" text="Or"/>
                    <div className="flex flex-row space-x-6">
                        <ButtonClick height="h-[60px]" text="Sign Up with Google" width="w-[240px]" additionalClassName="rounded-full border-2 border-primary text-primary text-[18px] font-medium"/>
                        <ButtonClick height="h-[60px]" text="Sign Up with Facebook" width="w-[240px]" additionalClassName="rounded-full border-2 border-primary text-primary text-[18px] font-medium"/>
                        <ButtonClick height="h-[60px]" text="Sign Up with Number" width="w-[240px]" additionalClassName="rounded-full border-2 border-primary text-primary text-[18px] font-medium"/>
                    </div>
        </div>
    )
}