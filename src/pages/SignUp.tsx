import { addressFields, contactFields } from "../../utils/constants";
import { SubmitButton } from "../components/Button/SubmitButton";
import { Form } from "../components/Form/Form";
import { ConditionsButton } from "../components/SignUp/ConditionsButton";
import { Poster } from "../components/SignUp/Poster";
import { SignWithOthers } from "../components/SignUp/SignWithOthers";
import { Title } from "../components/SignUp/Title";

export function SignUp() {
  const handleRegisterSubmit = (data: Record<string, string>) => {
    console.log("Données d'inscription :", data);
  };
  const handleVerificationSubmit = (data: Record<string, string>) => {
    if (data.password !== data.confirmPassword) alert("mot de passe différent");
  };
  return (
    <div className="flex flex-col lg:ml-[180px] lg:mr-[180px] p-8 space-y-6">
      <Title />
      <div className="flex flex-row space-x-10">
        <div className="flex flex-col flex-grow space-y-6">
          <div className="flex border-b-2 border-gray-300 pb-6">
            <Form
              fields={contactFields}
              onSubmit={handleVerificationSubmit}
              columns={2}
              formId="1"
            />
          </div>
          <Form
            fields={[
              {
                name: "address",
                label: "Address",
                type: "text",
                required: true,
                placeholder: "3, route du bon coin",
              },
            ]}
            onSubmit={handleRegisterSubmit}
            formId="2"
          />
          <Form
            fields={addressFields}
            onSubmit={handleRegisterSubmit}
            columns={2}
            formId="3"
          />
          <ConditionsButton />
          <SubmitButton
            formIds={["1", "2", "3"]}
            height="h-[60px]"
            text="Sign Up"
            width="w-full"
            additionalClassName="rounded-lg bg-primary text-white text-[24px] font-semibold"
          />
          <SignWithOthers />
        </div>
        <Poster />
      </div>
    </div>
  );
}
