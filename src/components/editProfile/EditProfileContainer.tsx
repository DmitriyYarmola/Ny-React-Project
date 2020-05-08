import React, { useCallback } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import ProfileFormRedux from "../form/profile-form/profile-form";
import { saveProfile } from '../../redux/profile-reducer'
import { Redirect } from "react-router-dom";
import { ProfileType } from "../../redux/types/profile";
import { AppStateType } from "../../redux/redux-store";
import { contactsType } from "../../redux/types/contacts";


export type EditProfileFormDataType = keyof ProfileType
export type ContactsProfileType = keyof contactsType
const EditProfileContainer: React.FC = (props) => {
  /* ===UseSelector=== */
  const profileMe = useSelector((state: AppStateType) => state.profilePage.profileMe)

  /* ===UseDispatch=== */
  const dispatch = useDispatch()
  const saveProfileCB = useCallback((formData: ProfileType) => {
    dispatch(saveProfile(formData))
  }, [dispatch])

  const onSubmit = (formData: ProfileType) => {
    saveProfileCB(formData)
  }

  if (!profileMe) return <Redirect to="/profile" />
  return (
    <ProfileFormRedux
      {...props}
      profile={profileMe}
      initialValues={profileMe}
      onSubmit={onSubmit}
    />
  );

}


export default EditProfileContainer
