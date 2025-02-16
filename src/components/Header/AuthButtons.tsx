import { TEXTS } from "../../../utils/constants";
import { ButtonClick } from "../Button/ButtonClick";

type AuthButtonsProps = { className?: string };

export function AuthButtons({ className }: Readonly<AuthButtonsProps>) {
  const defaultClass = "flex";
  return (
    <div className={`${defaultClass} ${className}`}>
      <ButtonClick
        text={TEXTS.SignUp}
        link="/signUP"
        height="h-[39px]"
        width="w-[78px]"
        additionalClassName="text-[12px] font-bold font-inter rounded-full bg-primary text-white"
      />
      <ButtonClick
        text={TEXTS.SignIn}
        link="/signIn"
        height="h-[39px]"
        width="w-[78px]"
        additionalClassName="text-[12px] font-bold font-inter rounded-full bg-white text-primary border-[2px] border-primary"
      />
    </div>
  );
}
