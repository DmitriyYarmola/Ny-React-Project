import React from 'react'
import message from './../../../../css/dialogs/messages/message/message.module.css'

const Message = (props) => {
    return (
        <div className={message.message}>{props.message}</div>
    )
}

export default Message