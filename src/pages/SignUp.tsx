import { TEXTS } from "../../utils/constants";
import { ButtonClick } from "../components/Button/ButtonClick";
import { Form } from "../components/Form";
import { Text } from "../components/Text";

export function SignUp() {
    const containerClasses =
    "flex flex-col rounded-2xl lg:bg-[url('/img/img_SignUp.png')] bg-[url('/img/chaussure_hero_mobile.webp')] bg-cover bg-center w-[382px] h-[452px]";
    return (
    <div className="flex flex-col  ml-[90px] mr-[90px] p-8 space-y-6">
        <div className="flex items-center border-b-2 p-[40px] border-gray-300">
            <Text color="text-gray-200" fontSize="text-[36px]" fontStyle="text-Inter" text="Sign up"/>
        </div>
        <div className="flex flex-row space-x-10">
            <div className="flex flex-col space-y-6">
                <div className="flex border-b-2 border-gray-300">
                    <Form/>
                </div>
                <Form/>
                <div className="flex flex-row items-center space-x-2">
                    <ButtonClick height="h-[24px]" text="" width="w-[24px]" additionalClassName="rounded-lg bg-gray-300"/>
                    <Text color="text-black" fontSize="text-[14px]" fontStyle="font-Inter" text={TEXTS.ConditionsText}/>
                </div>
                <ButtonClick height="h-[60px]" text="Sign Up" width="w-[800px]" additionalClassName="rounded-lg bg-primary text-white text-[24px] font-semibold"/>
                <div className="flex flex-col justify-center items-center space-y-6">
                    <Text color="text-black" fontSize="text-[12px]" fontStyle="font-Inter" text="Or"/>
                    <div className="flex flex-row space-x-6">
                        <ButtonClick height="h-[60px]" text="Sign Up with Google" width="w-[240px]" additionalClassName="rounded-full border-2 border-primary text-primary text-[18px] font-medium"/>
                        <ButtonClick height="h-[60px]" text="Sign Up with Facebook" width="w-[240px]" additionalClassName="rounded-full border-2 border-primary text-primary text-[18px] font-medium"/>
                        <ButtonClick height="h-[60px]" text="Sign Up with Number" width="w-[240px]" additionalClassName="rounded-full border-2 border-primary text-primary text-[18px] font-medium"/>
                    </div>
                </div>
            </div>
            <div className={containerClasses}>
               <div className="flex pt-4 pl-4">
                    <Text color="text-primary" fontSize="text-[22px]" fontStyle="font-pacifico" text="vantela"/>
                </div>
                <div className="flex-grow items-end">
                    <Text color="text-white" fontSize="text-[30px]" fontStyle="font-Inter" text="Easy shopping" additionalClassName="font-bold -rotate-12"/>
                    <div className="flex flex-row space-x-2 -rotate-12">
                        <Text color="text-white" fontSize="text-[30px]" fontStyle="font-Inter" text="just from" additionalClassName="font-bold"/>
                        <Text color="text-secondary" fontSize="text-[30px]" fontStyle="font-Inter" text="home" additionalClassName="font-bold"/>
                    </div>
               </div>
            </div>
        </div>
    </div>
    )
}