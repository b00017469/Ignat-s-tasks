import React from 'react'
import style from './Message.module.css'

type MessagePropsType = {
    avatar: string;
    name: string;
    message: string;
    time: string;
}

function Message(props: MessagePropsType) {
    return (
        <div className={style.message}>
            <div className={style.ava}>
                <img src={props.avatar} alt=""/>
            </div>
            <div className={style.block}>
                <h4 className={style.userName}>
                    {props.name}
                </h4>
                <div className={style.userMassage}>
                    {props.message}
                </div>
                <div className={style.timeMassage}>
                    {props.time}
                </div>
            </div>

        </div>
    )
}

export default Message
