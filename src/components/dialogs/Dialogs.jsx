import React from 'react'
import dialogs from './../../css/dialogs/dialogs.module.css'
import DialogsItem from './dialogs-item/dialogs-item'
import Messages from './messages/messages'

const Dialogs = (props) => {
    return (
        <div className={dialogs.dialogs}>
            <DialogsItem dialogs={props.dialogs} />

            <Messages messages={props.messages} />
        </div>
    )
}

export default Dialogs