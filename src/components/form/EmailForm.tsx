"use client";

import { Input } from "../ui";

interface IEmailFormProps {
  onSubmit?: React.FormHTMLAttributes<HTMLFormElement>["onSubmit"];
  emailInputProps: React.ComponentProps<typeof Input>;
  formClassName?: React.FormHTMLAttributes<HTMLFormElement>["className"];
}

export const EmailForm = ({
  formClassName,
  emailInputProps,
  onSubmit,
}: IEmailFormProps) => {
  return (
    <form className={formClassName} onSubmit={onSubmit}>
      <Input {...emailInputProps} />
    </form>
  );
};
