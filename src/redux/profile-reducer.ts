import { PostType } from './types/post';
import { AppStateType } from './redux-store';
import { photosType } from './types/photos';
import { profileAPI } from "../api/api";
import { stopSubmit } from "redux-form";
import { ProfileType } from './types/profile';
import { ThunkAction } from 'redux-thunk';

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const DELETE_POST = "DELETE_POST";
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTOS_SUCCES";
const STATUS_PROFILE_UPDATE = "STATUS_PROFILE_UPDATE";
const SET_ME_PROFILE = "SET_ME_PROFILE";


let initialState = {
  postsData: [
    { id: 1, message: "Hello, how are you?"},
    { id: 2, message: "Test message, oh dadada"},
  ] as Array<PostType>,
  profileMe: null as ProfileType | null,
  profile: null as ProfileType | null,
  updateProfileStatus: false,
  status: "",
};

type InititalStateType = typeof initialState
const profileReducer = (state = initialState, action: ActionsTypes): InititalStateType => {
  switch (action.type) {
    case ADD_POST:
      console.log(action.postText)
      let newPost = {
        id: Date.now(),
        message: action.postText,
      };
      return {
        ...state,
        postsData: [...state.postsData, newPost],
      };
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };
    case SET_ME_PROFILE:
      return {
        ...state,
        profileMe: action.profileMe,
      };
    case SET_STATUS:
      return {
        ...state,
        status: action.status,
      };
    case DELETE_POST:
      return {
        ...state,
        postsData: state.postsData.filter((p) => p.id !== action.id),
      };
    case SAVE_PHOTO_SUCCESS:
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos }  as ProfileType | null,
      };
    case STATUS_PROFILE_UPDATE:
      return {
        ...state,
        updateProfileStatus: action.updateStatus,
      };
    default:
      return state;
  }
};

type ActionsTypes = AddPostType | DeletePostType | SetUserProfileType | SetMerProfileType | SetStatusType | SavePhotoSuccessType | StatusProfileUpdate

type AddPostType = {
  type: typeof ADD_POST
  postText: string
}

export const addPost = (postText: string): AddPostType => ({
  type: ADD_POST,
  postText
});

type DeletePostType = {
  type: typeof DELETE_POST
  id: number | null
}

export const deletePost = (postId: number | null): DeletePostType => ({
  type: DELETE_POST,
  id: postId,
});

type SetUserProfileType = {
  type: typeof SET_USER_PROFILE
  profile: ProfileType
}
export const setUserProfile = (profile: ProfileType): SetUserProfileType => ({
  type: SET_USER_PROFILE,
  profile,
});


type SetMerProfileType = {
  type: typeof SET_ME_PROFILE
  profileMe: ProfileType
}
export const setMeProfileUser = (profileMe: ProfileType): SetMerProfileType => ({
  type: SET_ME_PROFILE,
  profileMe,
});

type SetStatusType = {
  type: typeof SET_STATUS
  status: string
}

export const setStatus = (status: string): SetStatusType => ({
  type: SET_STATUS,
  status,
});

type SavePhotoSuccessType = {
  type: typeof SAVE_PHOTO_SUCCESS
  photos: photosType
}

export const savePhotoSuccess = (photos: photosType): SavePhotoSuccessType => ({
  type: SAVE_PHOTO_SUCCESS,
  photos,
});


type StatusProfileUpdate = {
  type: typeof STATUS_PROFILE_UPDATE
  updateStatus: boolean
}
export const statusProfileUpdate = (updateStatus: boolean): StatusProfileUpdate => ({
  type: STATUS_PROFILE_UPDATE,
  updateStatus
});

/* === Thunk ===*/

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>
export const setProfileMe = (userid: number | null):ThunkType => {
  return async (dispatch) => {
    let data = await profileAPI.getProfile(userid);
    dispatch(setMeProfileUser(data));
    dispatch(setUserProfile(data));
  };
};

export const setProfile = (userid: number | null):ThunkType => {
  return async (dispatch) => {
    let data = await profileAPI.getProfile(userid);
    dispatch(setUserProfile(data));
  };
};

export const getUserStatus = (userid: number | null):ThunkType => {
  return async (dispatch) => {
    let data = await profileAPI.getStatus(userid);
    dispatch(setStatus(data));
  };
};

export const updateUserStatus = (status: string):ThunkType => {
  return async (dispatch) => {
    try {
      let data = await profileAPI.updateStatus(status);
      if (data.resultCode === 0) {
        dispatch(setStatus(status));
      }
    } catch (error) {
      console.error(error.message);
    }
  };
};

export const savePhoto = (file: File):ThunkType => {    
  return async (dispatch) => {
    let data = await profileAPI.saveProfilePhoto(file);
    dispatch(savePhotoSuccess(data.data.photos));
  };
};

export const saveProfile = (profileData: any):ThunkType => {
  return async (dispatch, getState) => {
    const userid = getState().auth.id;
    let data = await profileAPI.saveProfileUser(profileData);
    console.log("Data", data)
    if (data.resultCode === 0) {
      dispatch(setProfile(userid));
      dispatch(statusProfileUpdate(true));
    } else {
      let errorArray = data.messages[0].split(" ");
      let getThreeWord = errorArray[3].split("");
      let messageError = `${errorArray[0]} ${errorArray[1]} ${errorArray[2]}`;
      let deleteOthersymbols = getThreeWord.splice(11, getThreeWord.length);
      let networkName = deleteOthersymbols
        .splice(0, deleteOthersymbols.length - 1)
        .join("")
        .toLowerCase();
      dispatch(
        // @ts-ignore
        stopSubmit("profileEdit", { contacts: { [networkName]: messageError } })
      );
      // console.log(socialName)
      dispatch(statusProfileUpdate(false));
      return Promise.reject(data.messages[0]);
    }
  };
};

export default profileReducer;
