import React, { useCallback } from "react";
import { addPost, deletePost } from "../../../redux/profile-reducer";
import Posts from "./posts";
import { useSelector, useDispatch } from "react-redux";
import { AppStateType } from "../../../redux/redux-store";

export const PostsContainer = () => {

  /* ===UseSelect=== */
  const profile = useSelector((state: AppStateType) => state.profilePage.profile)
  const postsData = useSelector((state: AppStateType) => state.profilePage.postsData)

  /* ===UseDispatch=== */
  const dispatch = useDispatch()

  const addPostCB = useCallback((postMessage: string) => {
    dispatch(addPost(postMessage))
  }, [dispatch])

  const deletePostCB = useCallback((id: number) => {
    dispatch(deletePost(id))
  }, [dispatch])

  return (
    <Posts profile={profile} postsData={postsData} addPostCB={addPostCB} deletePostCB={deletePostCB} />
  )
}