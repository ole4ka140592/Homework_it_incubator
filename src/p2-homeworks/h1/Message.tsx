import React from 'react';
import classes from './Message.module.css'

type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessagePropsType) {
    return (
        <div className={classes.messageAll}>

            <img alt='ava' src={props.avatar} className={classes.avatar}/>

            <div className={classes.detail}></div>

            <div className={classes.messageDetails}>
                <div className={classes.name}>
                    {props.name}
                </div>
                <div className={classes.textMessage}>
                    {props.message}
                </div>
                <div className={classes.time}>
                    {props.time}
                </div>
            </div>
        </div>
    )
}

export default Message




