import React from "react";
import style from "./dialog.module.css";
import { NavLink } from "react-router-dom";

type PropsType = {
  id: number
  name: string
  key: number
}

export const Dialog:React.FC<PropsType> = ({ id, name, key }) => {
  return (
    <div key={key} className={style.dialog}>
      <NavLink to={`/dialogs/${id}`}>{name}</NavLink>
    </div>
  );
};

