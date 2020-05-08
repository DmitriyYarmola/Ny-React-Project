import React, { useCallback } from "react";
import { getUserLogin } from "../../redux/auth-reducer";
import { Login } from "./Login";
import {  useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { AppStateType } from "../../redux/redux-store";

export default  ({ ...props }) => {

  /* ===UseSelector=== */

  const isAuth = useSelector((state: AppStateType) => state.auth.isAuth)
  const captachaUrl = useSelector((state: AppStateType) => state.auth.captachaUrl)

  /* ===UseDispatch=== */
  const dispatch = useDispatch()

  const getUserLoginCB = useCallback((email: string, password: string, rememberMe: boolean, captcha: string | null) => {
    dispatch(getUserLogin(email, password, rememberMe, captcha))
  }, [dispatch])

  if (isAuth) {
    return <Redirect to="/profile" />;
  }
  return <Login {...props} getUserLogin={getUserLoginCB} captachaUrl={captachaUrl} />;
};

