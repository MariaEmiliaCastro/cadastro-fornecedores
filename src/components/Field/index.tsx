import { UseFormRegister } from "react-hook-form";
import { FieldTypes } from "../../constants";
import { Supplier } from "../../types";
import { FieldWrapper } from "./styles";

export type FieldProps = {
  label?: string;
  fieldId: string;
  name: string;
  options?: { value: string; label: string }[];
  type: FieldTypes;
  error?: string;
  register: UseFormRegister<Supplier>;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function Field({
  label,
  fieldId,
  name,
  options,
  type,
  error,
  register,
  onChange,
}: FieldProps) {
  return (
    <FieldWrapper>
      {label && <label htmlFor={fieldId}>{label}</label>}
      {type === FieldTypes.SELECT ? (
        <select id={name} {...register(name)}>
          {options?.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          id={fieldId}
          {...register(name)}
          onChange={onChange}
        />
      )}
      {error && <p>{error}</p>}
    </FieldWrapper>
  );
}

export default Field;
