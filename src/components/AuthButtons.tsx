import { TEXTS } from "../../utils/constants";
import { ButtonClick } from "./Button/ButtonClick";

type AuthButtonsProps = {className? : string};

export function AuthButtons({className}: Readonly<AuthButtonsProps>) {
  const defaultClass = "flex";
  return (
    <div className={`${defaultClass} ${className}`}>
      <ButtonClick text={TEXTS.SignUp} variant="outline" height="h-[39px]" width="w-[78px]" additionalClassName="text-[12px] font-bold font-inter rounded-full"/>
      <ButtonClick text={TEXTS.SignIn} variant="inline" height="h-[39px]" width="w-[78px]" additionalClassName="text-[12px] font-bold font-inter rounded-full"/>
    </div>
  );
}
