import React from "react";
import "./post.sass";
import { ProfileType } from "../../../../redux/types/profile";

type PropsType = {
  message: string
  id: number
  deletePostCB: (id: number) => void
  key: number
  profile: ProfileType | null
}
const Post: React.FC<PropsType> = ({ message, id, deletePostCB, key, profile }) => {
  console.log("key:", key)
  let onDeletePost = () => {
    deletePostCB(id);
  };

  let photos:string | undefined, fullName;
  if (profile) {
    photos = profile.photos.small!;
    fullName = profile.fullName;
  }
  return (
    <div className="post-item" key={key}>
      <div className="post-author">
        <img src={photos} className="author-image" alt="" />
        <span className="author-name"><b>{fullName}</b></span>
      </div>
      <div className="post-content">{message}</div>
      <div className="post-close" onClick={onDeletePost}>
        &#10008;
      </div>
    </div>
  );
};

export default Post;
