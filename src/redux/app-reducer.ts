import { ThunkAction } from 'redux-thunk';
  
import { authUser } from "./auth-reducer";
import { AppStateType } from './redux-store';
const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";

type InitialStateType = {
  initialized: boolean,
}
let initialState: InitialStateType = {
  initialized: false,
};

type ActionTypes = initializedSuccessActionType

const appReducer = (state = initialState, action: ActionTypes):InitialStateType => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true,
      };
    default:
      return state;
  }
};

type initializedSuccessActionType = {
  type: typeof INITIALIZED_SUCCESS
}
export const initializedSuccess = ():initializedSuccessActionType => ({
  type: INITIALIZED_SUCCESS,
});

/* === Thunk ===*/

export const initializeApp = (): ThunkAction<void, AppStateType, unknown, ActionTypes> => {
  return (dispatch) => {
    let promise = dispatch(authUser());
    promise.then(() => {
      dispatch(initializedSuccess());
    });
  };
};

export default appReducer;
