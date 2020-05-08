import React from "react";
import Post from "./post/post";
import Title from "./title/title";
import style from "./posts.module.css";
import PostReduxForm from "../../form/post-form/post-form";
import { ProfileType } from "../../../redux/types/profile";
import { PostType } from "../../../redux/types/post";

type PropsType = {
  profile: ProfileType | null
  postsData: Array<PostType>
  addPostCB: (postMessage: string) => void
  deletePostCB: (id: number) => void
}

export type PostFormValuesType = {
  postMessageTitle: string
}

export type PostFormValuesKeysType = keyof PostFormValuesType
const Posts: React.FC<PropsType> = ({ postsData, addPostCB, deletePostCB, profile }) => {

  let postsItem = postsData.map(post => {
    return <Post key={post.id} id={post.id} message={post.message} deletePostCB={deletePostCB} profile={profile}/>;
  });

  let onSubmit = (formData: PostFormValuesType) => {
    addPostCB(formData.postMessageTitle);
  };

  return (  
    <div className={style.info}>
      <Title />
      <PostReduxForm onSubmit={onSubmit} />
      <div className={style.list}>{postsItem}</div>
    </div>
  );
};

export default Posts;
