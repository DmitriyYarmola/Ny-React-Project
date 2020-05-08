import React, { useCallback } from "react";
import { addMessage } from "../../redux/dialogs-reducer";
import { Dialogs } from "./Dialogs";
import { useSelector, useDispatch } from "react-redux";
import { AppStateType } from "../../redux/redux-store";



export default  () => {

  /* ===useSelector=== */
  const dialogsData = useSelector((state: AppStateType) => state.dialogsPage.dialogsData)
  const messagesData = useSelector((state: AppStateType) => state.dialogsPage.messagesData)

  /* ===useDispatch=== */

  const dispatch = useDispatch()
  const addMessageCB = useCallback((newMessageText: string) => {
    dispatch(addMessage(newMessageText))
  }, [dispatch])
  return (
    <Dialogs dialogsData={dialogsData} messagesData={messagesData} addMessageCB={addMessageCB}/>
  )
}
