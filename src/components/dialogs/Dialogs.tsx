import React from "react";
import style from "./dialogs.module.css";
import { DialogsItem } from "./dialogs-item/dialogs-item";
import { Messages } from "./messages/messages";
import { MessageReduxForm } from "../form/message-form/message-form";
import { MessagesDataType, dialogsData } from "../../redux/dialogs-reducer"

type PropsType = {
  addMessageCB: (messageText: string) => void
  messagesData: MessagesDataType[]
  dialogsData: dialogsData[]
}

export type FormMessagesDataType = {
  message: string
}

export type FormMessagesDataKeysType = keyof FormMessagesDataType
export const Dialogs: React.FC<PropsType> = ({ addMessageCB, dialogsData, messagesData }) => {

  let onSubmit = (formData: FormMessagesDataType) => {
    addMessageCB(formData.message);
  };

  return (
    <div className={style.dialogs}>
      <DialogsItem dialogsData={dialogsData} />

      <Messages messagesData={messagesData} />

      <MessageReduxForm onSubmit={onSubmit} />
    </div>
  );
};

