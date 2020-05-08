import { photosType } from './types/photos';
import { usersAPI } from "../api/api";
import { updateObjectInArray } from "../components/untils/objects-helper";
import { UserType } from './types/user';
import { AppStateType, InferAtionsType } from './redux-store';
import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const TOTAL_COUNT = "TOTAL_COUNT";
const TOGGLE_IS_FATCHING = "TOGGLE_IS_FATCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";

let initialState = {
  users: [] as Array<UserType>,
  pageSize: 5,
  totalItemsCount: 0 as number,
  portionSize: 10,
  currentPage: 1 as number ,
  isFetching: true,
  followingInProgress: [] as Array<number | null>,
};


export type InitialStateType = typeof initialState
const usersReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userid, "id", { followed: true })
      };
    case UNFOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userid, "id", { followed: false })
      };

    case SET_USERS:
      return {
        ...state,
        users: action.users,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case TOTAL_COUNT:
      return {
        ...state,
        totalItemsCount: action.totalCount!,
      };
    case TOGGLE_IS_FATCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userid]
          : state.followingInProgress.filter((id) => id != action.userid),
      };
    default:
      return state;
  }
};

type ActionsTypes = InferAtionsType<typeof actions>

export const actions = {

  acceptFollow: (userid: number | null) => {
    return {
      type: FOLLOW,
      userid,
    } as const
  },

  acceptUnfollow: (userid: number | null) => {
    return {
      type: UNFOLLOW,
      userid,
    } as const
  },

  setUsers: (users: Array<UserType>) => {
    return {
      type: SET_USERS,
      users,
    } as const
  },

  setCurrentPage: (currentPage: number) => {
    return {
      type: SET_CURRENT_PAGE,
      currentPage,
    } as const
  },

  setTotalCount: (totalCount: number | null) => {
    return {
      type: TOTAL_COUNT,
      totalCount,
    } as const
  },

  toggleIsFatching: (isFetching: boolean) => {
    return {
      type: TOGGLE_IS_FATCHING,
      isFetching,
    } as const
  },

  toggleIsFollowing: (isFetching: boolean, userid: number | null) => {
    return {
      type: TOGGLE_IS_FOLLOWING_PROGRESS,
      isFetching,
      userid,
    } as const
  }

}



/* === Thunk ===*/

type GetAppStateType = () => AppStateType
type DispatchType = Dispatch<ActionsTypes>

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>

export const requestUsers = (currentPage: number, pageSize: number): ThunkType => {
  return async (dispatch, getState) => {
    dispatch(actions.toggleIsFatching(true));
    let data = await usersAPI.getUsers(currentPage, pageSize);
    dispatch(actions.toggleIsFatching(false));
    dispatch(actions.setUsers(data.items));
    dispatch(actions.setTotalCount(data.totalCount));
  };
};

const _followUnfollowFlow = async (dispatch: DispatchType, id: number, apiMethod: any, actionCreator: (userid: number) => ActionsTypes) => {
  dispatch(actions.toggleIsFollowing(true, id));
  let data = await apiMethod(id);
  if (data.resultCode === 0) {
    dispatch(actionCreator(id));
  }
  dispatch(actions.toggleIsFollowing(false, id));
};

export const follow = (id: number): ThunkType => {
  return async (dispatch) => {
    let apiMethod = usersAPI.followUser.bind(usersAPI);
    let actionCreator = actions.acceptFollow;
    _followUnfollowFlow(dispatch, id, apiMethod, actionCreator);
  };
};

export const unfollow = (id: number): ThunkType => {
  return async (dispatch) => {
    let apiMethod = usersAPI.unfollowUser.bind(usersAPI);
    let actionCreator = actions.acceptUnfollow;

    _followUnfollowFlow(dispatch, id, apiMethod, actionCreator);
  };
};

export default usersReducer;
