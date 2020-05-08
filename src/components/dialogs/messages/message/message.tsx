import React from 'react'
import style from './message.module.css'


type PropsType = {
    message: string
    key: number
}

export const Message:React.FC<PropsType> = ({message, key}) => {

    return (
        <div key={key} className={style.message}>{message}</div>
    )

}
