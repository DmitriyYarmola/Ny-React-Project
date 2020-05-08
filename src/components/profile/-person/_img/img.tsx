import React, { ChangeEvent } from "react";
import "./img.sass";
import Preloader from "../../../common/preloader/Preloader";
import profileUser from "./../../../../img/profileUser.png";
import PublishIcon from "@material-ui/icons/Publish";
import { ProfileType } from "../../../../redux/types/profile"

type PropType = {
  profile: ProfileType | null
  isOwner: boolean
  savePhoto: (file: File) => void
}

export const Img: React.FC<PropType> = ({ profile, isOwner, savePhoto }) => {
  if (!profile) {
    return <Preloader />;
  }

  const onMainPhotoSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) savePhoto(e.target.files[0]);
  };

  return (
    <div className="profile-block">
      <div className="profile-portait">
        <img src={profile.photos.large || profileUser} alt="UserAvatar" />
        {isOwner && (
          <div className="profile-input_choose">
            <input
              id="choose-file"
              type={"file"}
              onChange={onMainPhotoSelected}
            />
            <label htmlFor="choose-file">
              <PublishIcon />
              <span>Choose File...</span>
            </label>
          </div>
        )}
      </div>
    </div>
  );
};

