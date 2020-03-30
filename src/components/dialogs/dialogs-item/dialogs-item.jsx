import React from 'react'
import dialogsItem from './../../../css/dialogs/dialogs-item/dialogs-item.module.css'
import Dialog from './dialog/dialog'

const DialogsItem = (props) => {

    let dialogsElements = props.dialogs.map(dialog => {
        return <Dialog name={dialog.name} id={dialog.id} />
    })
    return (
        <div className={dialogsItem.dialogs}>
            {dialogsElements}
        </div>
    )
}

export default DialogsItem