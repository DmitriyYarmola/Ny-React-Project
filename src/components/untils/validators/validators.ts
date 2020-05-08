export type ValidatorFieldType = (value: string) => string | undefined

export const required: ValidatorFieldType = (value) => {
  if (value) return undefined;
  return "Field is required";
};

export const requiredMidle: ValidatorFieldType = value => {
  if (!value) return ''
  return undefined
}
export const maxLengthCreator = (maxLength: number): ValidatorFieldType => {
  return (value) => {
    if (value && value.length > maxLength) return `Max Length ${maxLength} symbols`;
    return undefined;
  };
};

export const minLengthCreator = (minLength: number): ValidatorFieldType => {
  return (value) => {
    if (value && value.length < minLength) return `Min Length ${minLength} symbols`;
    return undefined;
  }
}
