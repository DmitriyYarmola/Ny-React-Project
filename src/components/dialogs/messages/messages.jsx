import React from 'react'
import messages from './../../../css/dialogs/messages/messages.module.css'
import Message from './message/message'

const Messages = (props) => {

    let messagesItem = props.messages.map(msg => {
        return <Message message={msg.message} />
    })

    return (
        <div className={messages.messages}>
            {messagesItem}
        </div>
    )
}

export default Messages