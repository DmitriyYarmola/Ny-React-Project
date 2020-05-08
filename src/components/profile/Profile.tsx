import React from "react";
import style from "./profile.module.css";
import { Persons } from "./-person/person";
import { ProfileType } from "../../redux/types/profile";


type PropTypes = {
  profile: ProfileType | null
  status: string
  updateUserStatus: (status: string) => void
  savePhoto: (file: File) => void
  isOwner: boolean
}

export const Profile: React.FC<PropTypes> = ({ profile, status, updateUserStatus, isOwner, savePhoto }) => {
  return (
    <div className={style.profile}>
      <Persons
        isOwner={isOwner}
        profile={profile}
        status={status}
        updateUserStatus={updateUserStatus}
        savePhoto={savePhoto}
      />
    </div>
  );
};

