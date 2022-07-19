import {Group, Input, FormInputLabel  } from "./form-input.styles";

export const FormInput = ({label, ...otherProps}) => {

  return (
    <Group>
      <Input {...otherProps} />
      { label &&
        <FormInputLabel shrink={!!otherProps.value.length}  htmlFor="confirmPassword">{label}</FormInputLabel>
      }
    </Group>
  );

}