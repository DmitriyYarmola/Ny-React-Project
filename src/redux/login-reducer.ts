import { ThunkAction } from 'redux-thunk';
import { AppStateType } from './redux-store';
import { authAPI } from "../api/api";

const USER_SIGN = "USER_SIGN";


type InitialStateType = {
  userid: number | null
}
let initialState: InitialStateType = {
  userid: null,
};

const LoginReducer = (state = initialState, action: ActionsTypes):InitialStateType => {
  switch (action.type) {
    case USER_SIGN:
      return {
        ...state,
        userid: action.userid,
      };
    default:
      return state;
  }
};

type ActionsTypes = AccessUserSign
type AccessUserSign = {
  type: typeof USER_SIGN
  userid: number | null
}

const accesUserSign = (userid: number | null):AccessUserSign => ({
  type: USER_SIGN,
  userid,
});

/* ===Thunk=== */

export const getUserLogin = (email: string , password: string, rememberMe: boolean, captcha: string): ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes> => {
  return async (dispatch) => {
    let data = await authAPI.signIn(email, password, rememberMe, captcha);
    if (data.resultCode === 0) {
      dispatch(accesUserSign(data.data.userId));
    }
  };
};

export default LoginReducer;
