import "./ErrorMessage.css"
import { Icon } from '@iconify/react';

export default function ErrorMessage(props){
    return(
        <div className="error-message container">
            <Icon icon={props.icon} className="error-message-icon"/>
            <h2 className="error-message-title">{props.title}</h2>
            <p>{props.text}.</p>
        </div>
    )
}