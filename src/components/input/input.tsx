import React, { FC, HTMLInputTypeAttribute, InputHTMLAttributes } from "react";
import {
  useForm,
  useController,
  UseControllerProps,
  FieldError,
  Merge,
  FieldErrorsImpl,
  UseFormRegister,
  FieldValues,
} from "react-hook-form";
import { Container, Label, InputField, ErrorMessage } from "./style";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  error: FieldError | null;
  register: UseFormRegister<FieldValues>;
  [rest: string]: any;
}

const BaseInput: React.ForwardRefRenderFunction<
  HTMLInputElement,
  InputProps
> = ({ name, label, error = null, register, ...rest }: InputProps, ref) => {
  return (
    <Container>
      <Label>{label}</Label>
      <InputField
        error={!!error}
        value={rest.defaultValue}
        type={rest?.type}
        {...register(name)}
        placeholder={rest.placeholder}
      />
      {error && <ErrorMessage error={!!error}>{error.message}</ErrorMessage>}
    </Container>
  );
};

const Input = React.forwardRef(BaseInput);

export default Input;
