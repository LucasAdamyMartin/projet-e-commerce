interface SubmitButtonProps {
  formIds: string[];
  text?: string;
  width: string;
  height: string;
  position?: string;
  additionalClassName?: string;
}

export function SubmitButton({
  formIds,
  text = "Envoyer",
  width,
  height,
  position,
  additionalClassName,
}: Readonly<SubmitButtonProps>) {
  const handleSubmit = () => {
    formIds.forEach((formId) => {
      const form = document.getElementById(formId) as HTMLFormElement;
      if (form) {
        form.requestSubmit();
      }
    });
  };

  return (
    <button
      type="button"
      onClick={handleSubmit}
      className={`${width} ${height} ${position} ${additionalClassName} flex items-center justify-center`}
    >
      {text}
    </button>
  );
}
