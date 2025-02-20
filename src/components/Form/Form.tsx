import { useState, ChangeEvent, FormEvent } from "react";
import { Field } from "../../../utils/constants";
import { FormElement } from "./FormElement";

interface FormProps {
  fields: Field[];
  onSubmit: (data: Record<string, string>) => void;
  title?: string;
  columns?: number; 
  formId : string;
}

export function Form({ fields, onSubmit, title, columns = 1, formId }: Readonly<FormProps>) {
  const initialState = fields.reduce((acc, field) => {
    acc[field.name] = field.type === "date" ? new Date().toISOString().split("T")[0] : ""; 
    return acc;
  }, {} as Record<string, string>);

  const [formData, setFormData] = useState(initialState);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="w-full mx-auto rounded-lg">
      {title && <h2 className="text-2xl font-bold mb-4 text-center">{title}</h2>}
      <form id={formId} onSubmit={handleSubmit} className="space-y-4">
        <div
          className={`grid gap-4`}
          style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }} // ✅ Grid dynamique
        >
          {fields.map((field) => (
            <FormElement key={field.name} field={field} formData={formData} handleChange={handleChange}/>
          ))}
        </div>
      </form>
    </div>
  );
}
