import { TEXTS } from "../../utils/constants";
import { Button } from "./Button/ButtonAuth";

type AuthButtonsProps = {className? : string};

export function AuthButtons({className}: Readonly<AuthButtonsProps>) {
  const defaultClass = "flex";
  return (
    <div className={`${defaultClass} ${className}`}>
      <Button text={TEXTS.SignIn} variant="outline"></Button>
      <Button text={TEXTS.SignOut} variant="inline"></Button>
    </div>
  );
}
