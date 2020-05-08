import React from "react";
import { reduxForm, Field, InjectedFormProps } from "redux-form";
import "./login-form.sass";
import {
  required,
  maxLengthCreator,
  minLengthCreator,
} from "../../untils/validators/validators";
import { createField } from "../../common/FormsControls/FormsControls";
import { Button } from "@material-ui/core";
import { LoginFormValuesType, LoginFormValuesKeysType } from "../../login/Login"
const maxLenght = maxLengthCreator(50);
const minLenght = minLengthCreator(1);

// const input = Element("input");

type PropsType = {
  captachaUrl: string | null
}

let LoginForm: React.FC<InjectedFormProps<LoginFormValuesType, PropsType> & PropsType> = ({ handleSubmit, error, captachaUrl }) => {
  console.log(captachaUrl)
  return (
    <form onSubmit={handleSubmit} className="form-login">
      {createField<LoginFormValuesKeysType>(
        [required, maxLenght, minLenght],
        "login-form_input",
        "Email",
        "email",
        "login",
        "Email",
        true
      )}
      {createField<LoginFormValuesKeysType>(
        [required, maxLenght, minLenght],
        "login-form_input",
        "Password",
        "password",
        "password",
        "password",
        true
      )}
      <div className="login-form_checkbox">
        <Field
          className="checkbox"
          type="checkbox"
          id="form_checkbox"
          name="rememberMe"
          component="input"
        />
        <label htmlFor="form_checkbox" className="login-form_label"></label>
        remember me
      </div>
      {error && <div className="form-summary_error">{error}</div>}
      {captachaUrl ? <img src={captachaUrl} /> : null}
      {captachaUrl ? createField<LoginFormValuesKeysType>(
        [required, maxLenght, minLenght],
        "login-form_captcha",
        "Captcha",
        "text",
        "captcha",
        null,
        false
      ) : null}
      <div className="">
        <Button
          className="login-form_button"
          variant="contained"
          color="primary"
          type="submit"
        >
          Submit
        </Button>
      </div>
    </form>
  );
};

export const LoginReduxForm = reduxForm<LoginFormValuesType, PropsType>({
  form: "login",
})(LoginForm);
