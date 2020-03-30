import React from 'react'
import dialog from './../../../../css/dialogs/dialogs-item/dialog/dialog.module.css'
import { NavLink } from 'react-router-dom'

const Dialog = (props) => {
    return (
        <div className={dialog.dialog}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink> 
        </div>
    )
}

export default Dialog