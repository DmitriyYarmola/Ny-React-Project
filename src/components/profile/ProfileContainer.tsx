import React, { useCallback } from "react";
import { Profile } from "./Profile";
import { useSelector, useDispatch } from "react-redux";
import {
  setProfile,
  getUserStatus,
  updateUserStatus,
  savePhoto,
  setProfileMe,
} from "../../redux/profile-reducer";
import { useHistory, useParams } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { useEffect } from "react";
import { AppStateType } from "../../redux/redux-store";


type ParamsType = {
  userid?: any
}

type PropsType = {
}

const ProfileContainer: React.FC<PropsType> = (props) => {

  /* ===use"Route"=== */
  let params: ParamsType = useParams()
  let history = useHistory()

  /* ===UseSelector=== */
  const profile = useSelector((state: AppStateType) => state.profilePage.profile)
  const profileStatus = useSelector((state: AppStateType) => state.profilePage.status)
  const authorizeduserId = useSelector((state: AppStateType) => state.auth.id)

  /* ===UseDispatch=== */
  const dispatch = useDispatch()

  const updateUserStatusCB = useCallback((status: string) => {
    dispatch(updateUserStatus(status));
  }, [dispatch]);
  const setProfileCB = useCallback((userid: number | null) => {
    dispatch(setProfile(userid));
  }, [dispatch]);
  const setProfileMeCB = useCallback((userid: number | null) => {
    dispatch(setProfileMe(userid));
  }, [dispatch]);
  const getUserStatusCB = useCallback((userid: number | null) => {
    dispatch(getUserStatus(userid));
  }, [dispatch]);
  const savePhotoCB = useCallback((file: File) => {
    dispatch(savePhoto(file));
  }, [dispatch]);

  let userid = params.userid
  useEffect(() => {
    if (!userid) {
      userid = authorizeduserId;
      setProfileMeCB(userid)
      if (!userid) history.push("/login");
    } else setProfileCB(userid);
    getUserStatusCB(userid);
  }, [userid]);

  return (
    <Profile
      {...props}
      isOwner={!params.userid}
      profile={profile}
      status={profileStatus}
      updateUserStatus={updateUserStatusCB}
      savePhoto={savePhotoCB}
    />
  );
};

export default withAuthRedirect(ProfileContainer)
