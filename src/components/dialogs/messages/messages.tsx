import React from 'react'
import style from './messages.module.css'
import { Message } from './message/message'
import { MessagesDataType } from '../../../redux/dialogs-reducer'


type PropsType = {
    messagesData: MessagesDataType[]
}

export const Messages: React.FC<PropsType> = ({ messagesData }) => {

    let messagesItem = messagesData.map(msg => {
        return <Message message={msg.message} key={msg.id} />
    })

    return (
        <div className={style.messages}>
            {messagesItem}
        </div>
    )
}
