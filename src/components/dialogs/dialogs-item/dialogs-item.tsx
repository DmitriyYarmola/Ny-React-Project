import React from "react";
import style from "./dialogs-item.module.css";
import { Dialog } from "./dialog/dialog";
import { dialogsData } from "../../../redux/dialogs-reducer";


type PropsType = {
  dialogsData: dialogsData[]
}

export const DialogsItem: React.FC<PropsType> = ({ dialogsData }) => {

  let dialogsElements = dialogsData.map((dialog) => {
    return <Dialog name={dialog.name} id={dialog.id} key={dialog.id} />;
  });

  return <div className={style.dialogs}>{dialogsElements}</div>;
};

