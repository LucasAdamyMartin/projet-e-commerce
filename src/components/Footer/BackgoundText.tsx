import { TEXTS } from "../../../utils/constants";
import { Text } from "../Text";

export function BackgroundText() {
    return (
    <>
        <Text color="text-black/2" fontSize="text-[32vh]" fontStyle="text-Inter" text={TEXTS.BackgroundText} additionalClassName="absolute -top-[350px] m-15 font-bold pointer-events-none slect-none whitespace-nowrap"/>
        <Text color="text-black/2" fontSize="text-[32vh]" fontStyle="text-Inter" text={TEXTS.BackgroundText} additionalClassName="absolute -top-[50px] m-15 font-bold pointer-events-none slect-none whitespace-nowrap"/>
        <Text color="text-black/2" fontSize="text-[32vh]" fontStyle="text-Inter" text={TEXTS.BackgroundText} additionalClassName="absolute top-[250px] m-15 font-bold pointer-events-none slect-none whitespace-nowrap"/>
        <Text color="text-black/2" fontSize="text-[32vh]" fontStyle="text-Inter" text={TEXTS.BackgroundText} additionalClassName="absolute top-[550px] m-15 font-bold pointer-events-none slect-none whitespace-nowrap"/>
    </>
    )
}