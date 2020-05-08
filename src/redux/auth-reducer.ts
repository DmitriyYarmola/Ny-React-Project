import { ResultCodeEnum, ResultCodeForCaptcha } from './../api/api';
import { ThunkAction } from 'redux-thunk';
import { authAPI, securityAPI } from "../api/api";
import { stopSubmit } from "redux-form";
import { AppStateType } from './redux-store';

const SET_USER_DATA = "auth/SET_USER_DATA";
const USER_SIGN = "auth/USER_SIGN";
const SET_CAPTCHA = "auth/SET_CAPTCHA";


let initialState = {
  id: null as number | null,
  login: null as string | null,
  email: null as string | null,
  isAuth: false as boolean,
  captachaUrl: null as string | null,
};

type InitialStateType = typeof initialState

const authReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
      };
    case SET_CAPTCHA:
      return {
        ...state,
        captachaUrl: action.url
      };
    default:
      return state;
  }
};

type ActionTypes = setUserDataActionType | accesUserSignActionType | setCaptchaUrlActionType

type setUserDataActionDataType = {
  id: number | null
  login: string | null
  email: string | null
  isAuth: boolean
}

type setUserDataActionType = {
  type: typeof SET_USER_DATA,
  data: setUserDataActionDataType
}

export const setUserData = (id: number | null, login: string | null, email: string | null, isAuth: boolean): setUserDataActionType => ({
  type: SET_USER_DATA,
  data: { id, login, email, isAuth },
});

type accesUserSignActionType = {
  type: typeof USER_SIGN,
  userid: number | null
}

export const accesUserSign = (userid: number | null): accesUserSignActionType => ({
  type: USER_SIGN,
  userid,
});

type setCaptchaUrlActionType = {
  type: typeof SET_CAPTCHA,
  url: string | null
}

export const setCaptchaUrl = (url: string | null): setCaptchaUrlActionType => ({
  type: SET_CAPTCHA,
  url,
});

/* === Thunk ===*/

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes>
export const authUser = (): ThunkType => {
  return async (dispatch) => {
    let data = await authAPI.me();
    if (data.resultCode === ResultCodeEnum.Succes) { {
      let { id, login, email } = data.data;
      dispatch(setUserData(id, login, email, true));
    }}
  }
};

export const getUserLogin = (email: string, password: string, rememberMe: boolean, captcha: string | null): ThunkType => {
  return async (dispatch) => {
    let data = await authAPI.signIn(email, password, rememberMe, captcha);
    if (data.resultCode === ResultCodeEnum.Succes) {
      dispatch(authUser());
    } else {
      if (data.resultCode === ResultCodeForCaptcha.CaptchaIsRequired) {
        dispatch(getCaptcha())
      }

      let message =
        data.messages.length > 0
          ? data.messages[0]
          : "Email or password is wrong";
      //@ts-ignore
      dispatch(stopSubmit("login", { _error: message }));

    }
  };
};

export const getCaptcha = (): ThunkType => {
  return async (dispatch) => {
    let data = await securityAPI.getCaptcha();
    const captachaUrl = data.url;
    dispatch(setCaptchaUrl(captachaUrl))
  };
};

export const getUserLogout = (): ThunkType => {
  return async (dispatch) => {
    let data = await authAPI.signOut();
    if (data.resultCode === ResultCodeEnum.Succes) {
      dispatch(setUserData(null, null, null, false));
    }
  };
};

export default authReducer;
