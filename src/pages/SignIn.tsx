import { signInFields } from "../../utils/constants";
import { SubmitButton } from "../components/Button/SubmitButton";
import { Form } from "../components/Form/Form";
import { Poster } from "../components/Sign/Poster";
import { SignWithOthers } from "../components/Sign/SignWithOthers";
import { Title } from "../components/Sign/Title";

export function SignIn() {
  const handleRegisterSubmit = (data: Record<string, string>) => {
    console.log("Données d'inscription :", data);
  };
  return (
    <div className="flex flex-col lg:ml-[180px] lg:mr-[180px] p-8 space-y-6">
      <Title title="Sign In"/>
      <div className="flex flex-row space-x-10">
        <div className="flex flex-col flex-grow space-y-6">
          <div className="flex border-b-2 border-gray-300 pb-6">
            <Form
              fields={signInFields}
              onSubmit={handleRegisterSubmit}
              columns={2}
              formId="4"
            />
          </div>
          <SubmitButton
            formIds={["4"]}
            height="h-[60px]"
            text="Sign In"
            width="w-full"
            additionalClassName="rounded-lg bg-primary text-white text-[24px] font-semibold"
          />
          <SignWithOthers text="Sign In" />
        </div>
        <Poster urlImage="lg:bg-[url('img/signIn.png')]"/>
      </div>
    </div>
  );
}
