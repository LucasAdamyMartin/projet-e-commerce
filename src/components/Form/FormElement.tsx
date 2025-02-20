import { ChangeEvent } from "react"
import { Field } from "../../../utils/constants"

type FormElementProps = {
    field: Field,
    handleChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void, 
    formData : Record<string, string>
}
export function FormElement({field, handleChange, formData} : Readonly<FormElementProps>) {
    return(
        <div key={field.name} className="flex flex-col">
              <label className="text-primary font-medium ml-4 mb-4">
                {field.label} {field.required && <span className="text-red-500">*</span>}
              </label>
              {field.type === "textarea" ? (
                <textarea
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required={field.required}
                  placeholder={field.placeholder ? field.placeholder : ""}
                ></textarea>
              ) : (
                <input
                  type={field.type}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  className="w-full px-4 py-4 bg-gray-100 rounded-lg"
                  required={field.required}
                  placeholder={field.placeholder ? field.placeholder : ""}
                />
              )}
            </div>
    )
}