import React from "react";
import { Img } from "./_img/img";
import style from "./person.module.css";
import { Info } from "./_info/info";
import { ProfileType } from "../../../redux/types/profile";

type PropTypes = {
  profile: ProfileType | null
  status: string
  updateUserStatus: (status: string) => void
  savePhoto: (file: File) => void
  isOwner: boolean
}

export const Persons: React.FC<PropTypes> = React.memo(({ profile, status, updateUserStatus, isOwner, savePhoto }) => {
  return (
    <div className={style.person}>
      <Img profile={profile} isOwner={isOwner} savePhoto={savePhoto} />
      <Info profile={profile} status={status} updateUserStatus={updateUserStatus} isOwner={isOwner} />
    </div>
  );
});
