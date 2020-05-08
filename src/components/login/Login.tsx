import React from "react";
import { LoginReduxForm } from "../form/login-form/Login-form";
import "./login.sass";

type PropsType = {
  getUserLogin: (email: string, password: string, rememberMe: boolean, captcha: string | null) => void
  captachaUrl: string | null
}



export type LoginFormValuesType = {
  login: string
  password: string
  rememberMe: boolean
  captcha: string | null
}

export type LoginFormValuesKeysType = keyof LoginFormValuesType

export const Login: React.FC<PropsType> = ({ getUserLogin, captachaUrl }) => {
  const onSubmit = (formData: LoginFormValuesType) => {
    let { login, password, rememberMe, captcha } = formData;
    getUserLogin(login, password, rememberMe, captcha);
  };

  return (
    <div className="login-form">
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} captachaUrl={captachaUrl} />
    </div>
  );
};

