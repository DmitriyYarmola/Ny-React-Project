import React from "react";
import { Description } from "./description/description";
import { PostsContainer } from "../../-posts/postsContainer";
import './info.sass'
import { ProfileType } from "../../../../redux/types/profile"

type PropTypes = {
  profile: ProfileType | null
  status: string
  updateUserStatus: (status: string) => void
  isOwner: boolean
}

export const Info: React.FC<PropTypes> = ({ profile, status, updateUserStatus, isOwner }) => {
  return (
    <div className="profile-info">
      <Description
        profile={profile}
        status={status}
        updateUserStatus={updateUserStatus}
        isOwner={isOwner}
      />
      <div className="profile-info_posts">
        <PostsContainer />
      </div>
    </div>
  );
};
