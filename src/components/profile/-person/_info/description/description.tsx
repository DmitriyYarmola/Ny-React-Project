import React from "react";
import { ProfileData } from "./profileData/profileData";
import './description.sass'
import { ProfileType } from '../../../../../redux/types/profile'

type PropsType = {
  profile: ProfileType | null
  isOwner: boolean
  updateUserStatus: (status: string) => void
  status: string
}

export const Description: React.FC<PropsType> = ({ profile, status, updateUserStatus, isOwner }) => {
  return (
    <div className="profile-description">
      <ProfileData
        profile={profile}
        status={status}
        isOwner={isOwner}
        updateUserStatus={updateUserStatus}
      />
    </div>
  );
};

