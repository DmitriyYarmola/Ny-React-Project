import React from 'react'
import { ValidatorFieldType } from '../../untils/validators/validators';
import "./FormsControls.sass";
import { TextField, InputAdornment } from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import { Field, WrappedFieldProps } from "redux-form";



export const FormControl:React.FC<WrappedFieldProps> = ({ meta, children }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className={`form-control ${hasError ? "error" : ""}`}>
      {children}
      {hasError && <span>{meta.error}</span>}
    </div>
  );
};

export type InputProps = {
  visible: boolean
}

export const Input:React.FC<WrappedFieldProps & InputProps>= (props) => {
  const { input, ...restProps } = props;
  return (
    <FormControl {...props}>
      <TextField
        className="field"
        id="input-with-icon-textfield"
        {...input}
        {...restProps}
        InputProps={restProps.visible ? {
          startAdornment: (
            <InputAdornment position="start" >
              <AccountCircle />
            </InputAdornment>
          )
        }: undefined}
      />
    </FormControl>
  );
};


export function createField<FormKeysType extends string>(
   validators: ValidatorFieldType[], 
   className: string, 
   placeholder: string | undefined, 
   type: string | null, 
   name: FormKeysType  , 
   label: string | null,
   visible: boolean) {
  return (
    <div>
      <Field
        validate={validators}
        className={className} 
        autoComplete="off"
        placeholder={placeholder}
        type={type}
        name={name}
        label={label}
        component={Input}
        visible={visible}
      />
    </div>
  );
};
