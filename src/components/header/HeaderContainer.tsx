import React, { useCallback } from "react";
import { Header } from "./Header";
import { useSelector, useDispatch } from "react-redux";
import { getUserLogout } from "../../redux/auth-reducer";
import { AppStateType } from "../../redux/redux-store";


export const HeaderContainer = () => {

  /* ===UseSelector=== */
  const isAuth = useSelector((state: AppStateType) => state.auth.isAuth)
  const login = useSelector((state: AppStateType) => state.auth.login)

  /* ===UseDispatch=== */
  const dispatch = useDispatch()

  const getUserLogoutCB = useCallback(() => {
    dispatch(getUserLogout())
  }, [dispatch])

  return <Header isAuth={isAuth} getUserLogoutCB={getUserLogoutCB} login={login} />

}